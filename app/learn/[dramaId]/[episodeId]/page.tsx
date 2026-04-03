'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import EpisodePlayer from '@/components/player/EpisodePlayer';
import { mvpDrama } from '@/lib/learning-data';
import { useLearningStore } from '@/store/learning-store';
import type { Episode } from '@/lib/types';

export default function EpisodePage() {
  const params = useParams();
  const router = useRouter();
  const dramaId = params.dramaId as string;
  const episodeId = params.episodeId as string;

  const [episode, setEpisode] = useState<Episode | null>(null);
  const [quizUnlocked, setQuizUnlocked] = useState(false);

  const watchProgress = useLearningStore((state) => state.watchProgress);
  const updateStreak = useLearningStore((state) => state.updateStreak);
  const setCurrentEpisode = useLearningStore((state) => state.setCurrentEpisode);

  useEffect(() => {
    // Update streak on page load
    updateStreak();

    // Find the episode
    if (dramaId === 'inside-outside') {
      const foundEpisode = mvpDrama.episodes.find(
        (ep) => ep.episodeNumber === parseInt(episodeId)
      );
      if (foundEpisode) {
        setEpisode(foundEpisode);
        setCurrentEpisode(foundEpisode.episodeNumber);
      }
    }
  }, [dramaId, episodeId, updateStreak, setCurrentEpisode]);

  useEffect(() => {
    // Check if quiz is unlocked
    const epId = `${dramaId}-ep${episodeId}`;
    const progress = watchProgress[epId];
    if (progress && progress.isUnlocked) {
      setQuizUnlocked(true);
    }
  }, [watchProgress, dramaId, episodeId]);

  if (!episode) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="text-white text-2xl">Episode not found</div>
      </div>
    );
  }

  const episodeStorageId = `${dramaId}-ep${episodeId}`;
  const currentProgress = watchProgress[episodeStorageId]?.percentWatched || 0;

  // Navigation helpers
  const prevEpisode = episode.episodeNumber > 1 ? episode.episodeNumber - 1 : null;
  const nextEpisode =
    episode.episodeNumber < mvpDrama.episodes.length
      ? episode.episodeNumber + 1
      : null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Episode Info Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-6">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-4">
            {mvpDrama.titleZh} • Episode {episode.episodeNumber}
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {episode.title}
          </h1>

          {/* Summary */}
          <p className="text-gray-700 mb-6 leading-relaxed">{episode.summary}</p>

          {/* Emotion Scores */}
          <div className="grid grid-cols-5 gap-2 mb-6">
            {Object.entries(episode.emotions).map(([emotion, score]) => (
              <div
                key={emotion}
                className="text-center p-3 bg-gray-50 rounded-lg"
              >
                <div className="text-2xl mb-1">
                  {emotion === 'laugh' && '😄'}
                  {emotion === 'sweet' && '💕'}
                  {emotion === 'hype' && '🔥'}
                  {emotion === 'conflict' && '⚡'}
                  {emotion === 'cry' && '😢'}
                </div>
                <div className="text-xs font-semibold text-gray-600 capitalize">
                  {emotion}
                </div>
                <div className="text-sm font-bold text-indigo-600">{score}</div>
              </div>
            ))}
          </div>

          {/* Emotion Notes */}
          {Object.entries(episode.emotionNotes).length > 0 && (
            <div className="mb-6 space-y-2">
              {Object.entries(episode.emotionNotes).map(([emotion, note]) =>
                note ? (
                  <div
                    key={emotion}
                    className="text-sm p-3 bg-indigo-50 rounded-lg"
                  >
                    <span className="font-semibold capitalize">{emotion}:</span>{' '}
                    {note}
                  </div>
                ) : null
              )}
            </div>
          )}
        </div>

        {/* Video Player */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-6">
          <EpisodePlayer
            videoId={episode.videoId}
            episodeId={episodeStorageId}
            onProgressUpdate={(percent) => {
              if (percent >= 80 && !quizUnlocked) {
                setQuizUnlocked(true);
              }
            }}
          />
        </div>

        {/* Quiz CTA */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Test Your Knowledge
          </h2>

          {quizUnlocked || currentProgress >= 80 ? (
            <Link
              href={`/learn/${dramaId}/${episodeId}/quiz`}
              className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
            >
              Start Quiz ({episode.quizzes.length} Questions) →
            </Link>
          ) : (
            <div>
              <div className="block w-full bg-gray-300 text-gray-500 text-center py-4 rounded-xl font-semibold text-lg cursor-not-allowed">
                Quiz Locked 🔒
              </div>
              <p className="text-sm text-gray-600 mt-2 text-center">
                Watch at least 80% of the video to unlock the quiz
              </p>
            </div>
          )}
        </div>

        {/* Episode Navigation */}
        <div className="flex gap-4">
          {prevEpisode && (
            <Link
              href={`/learn/${dramaId}/${prevEpisode}`}
              className="flex-1 bg-white/20 backdrop-blur-sm text-white text-center py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
            >
              ← Episode {prevEpisode}
            </Link>
          )}
          {nextEpisode && (
            <Link
              href={`/learn/${dramaId}/${nextEpisode}`}
              className="flex-1 bg-white/20 backdrop-blur-sm text-white text-center py-3 rounded-xl font-semibold hover:bg-white/30 transition-colors"
            >
              Episode {nextEpisode} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
