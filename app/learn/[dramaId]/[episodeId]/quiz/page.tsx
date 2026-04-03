'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import QuizCard from '@/components/quiz/QuizCard';
import { mvpDrama } from '@/lib/learning-data';
import { useLearningStore } from '@/store/learning-store';
import { checkBadgeUnlocks } from '@/lib/badges';
import type { Episode } from '@/lib/types';

export default function QuizPage() {
  const params = useParams();
  const router = useRouter();
  const dramaId = params.dramaId as string;
  const episodeId = params.episodeId as string;

  const [episode, setEpisode] = useState<Episode | null>(null);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [isComplete, setIsComplete] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);
  const [newBadges, setNewBadges] = useState<string[]>([]);

  const watchProgress = useLearningStore((state) => state.watchProgress);
  const addXP = useLearningStore((state) => state.addXP);
  const unlockBadge = useLearningStore((state) => state.unlockBadge);
  const unlockedBadges = useLearningStore((state) => state.unlockedBadges);
  const totalXP = useLearningStore((state) => state.totalXP);

  useEffect(() => {
    // Find the episode
    if (dramaId === 'inside-outside') {
      const foundEpisode = mvpDrama.episodes.find(
        (ep) => ep.episodeNumber === parseInt(episodeId)
      );
      if (foundEpisode) {
        setEpisode(foundEpisode);
      }
    }
  }, [dramaId, episodeId]);

  useEffect(() => {
    // Check if quiz is unlocked
    const epId = `${dramaId}-ep${episodeId}`;
    const progress = watchProgress[epId];
    if (!progress || !progress.isUnlocked) {
      router.push(`/learn/${dramaId}/${episodeId}`);
    }
  }, [watchProgress, dramaId, episodeId, router]);

  const handleAnswer = (isCorrect: boolean) => {
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);

    if (currentQuizIndex < (episode?.quizzes.length || 0) - 1) {
      // Move to next question after a short delay
      setTimeout(() => {
        setCurrentQuizIndex(currentQuizIndex + 1);
      }, 2000);
    } else {
      // Quiz complete
      setTimeout(() => {
        completeQuiz(newAnswers);
      }, 2000);
    }
  };

  const completeQuiz = (finalAnswers: boolean[]) => {
    if (!episode) return;

    // Calculate XP
    const correctCount = finalAnswers.filter((a) => a).length;
    const baseXP = 20; // Base XP for completing episode
    const quizXP = correctCount * 5; // 5 XP per correct answer
    const totalEarnedXP = baseXP + quizXP;

    setEarnedXP(totalEarnedXP);
    addXP(totalEarnedXP);

    // Check for badge unlocks
    const episodesCompleted = [episode.episodeNumber]; // Simplified for MVP
    const quizScores = {
      [episode.episodeNumber]: {
        correct: correctCount,
        total: episode.quizzes.length,
      },
    };

    const badges = checkBadgeUnlocks(episodesCompleted, 1, quizScores);
    const trulyNewBadges = badges.filter((b) => !unlockedBadges.includes(b));

    trulyNewBadges.forEach((badgeId) => {
      unlockBadge(badgeId);
    });

    setNewBadges(trulyNewBadges);
    setIsComplete(true);
  };

  if (!episode) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="text-white text-2xl">Loading quiz...</div>
      </div>
    );
  }

  const currentQuiz = episode.quizzes[currentQuizIndex];
  const correctCount = answers.filter((a) => a).length;
  const scorePercent =
    answers.length > 0 ? Math.round((correctCount / answers.length) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      {/* Header */}
      <div className="bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="container mx-auto px-4 py-4">
          <Link
            href={`/learn/${dramaId}/${episodeId}`}
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
            Back to Episode
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        {!isComplete ? (
          <>
            {/* Quiz Progress Bar */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  Quiz Progress
                </span>
                <span className="text-sm font-bold text-indigo-600">
                  {currentQuizIndex + 1} / {episode.quizzes.length}
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
                  style={{
                    width: `${
                      ((currentQuizIndex + 1) / episode.quizzes.length) * 100
                    }%`,
                  }}
                />
              </div>
            </div>

            {/* Current Quiz */}
            <QuizCard
              quiz={currentQuiz}
              onAnswer={handleAnswer}
              quizNumber={currentQuizIndex + 1}
              totalQuizzes={episode.quizzes.length}
            />
          </>
        ) : (
          /* Results Screen */
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="text-center">
              {/* Trophy Icon */}
              <div className="text-6xl mb-4">
                {scorePercent === 100
                  ? '🏆'
                  : scorePercent >= 75
                  ? '🎉'
                  : scorePercent >= 50
                  ? '👍'
                  : '📚'}
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Quiz Complete!
              </h2>

              <p className="text-gray-600 mb-6">
                Episode {episode.episodeNumber}: {episode.title}
              </p>

              {/* Score Card */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <div className="text-3xl font-bold text-indigo-600">
                      {correctCount}/{episode.quizzes.length}
                    </div>
                    <div className="text-sm text-gray-600">Correct Answers</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">
                      {scorePercent}%
                    </div>
                    <div className="text-sm text-gray-600">Score</div>
                  </div>
                </div>

                <div className="border-t border-white/50 pt-4">
                  <div className="text-2xl font-bold text-green-600">
                    +{earnedXP} XP
                  </div>
                  <div className="text-sm text-gray-600">
                    Total XP: {totalXP}
                  </div>
                </div>
              </div>

              {/* New Badges */}
              {newBadges.length > 0 && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    🎖️ New Badges Unlocked!
                  </h3>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {newBadges.map((badgeId) => (
                      <div
                        key={badgeId}
                        className="text-4xl animate-bounce"
                        style={{
                          animationDelay: `${newBadges.indexOf(badgeId) * 0.2}s`,
                        }}
                      >
                        {badgeId === 'first-steps' && '🎬'}
                        {badgeId === 'halfway-there' && '🏃'}
                        {badgeId === 'drama-graduate' && '🎓'}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-3">
                {episode.episodeNumber < mvpDrama.episodes.length && (
                  <Link
                    href={`/learn/${dramaId}/${episode.episodeNumber + 1}`}
                    className="block w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Next Episode →
                  </Link>
                )}

                <Link
                  href="/"
                  className="block w-full bg-white border-2 border-gray-300 text-gray-700 text-center py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
