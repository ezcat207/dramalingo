'use client';

import { useEffect, useRef, useState } from 'react';
import { useLearningStore } from '@/store/learning-store';

interface EpisodePlayerProps {
  videoId: string;
  episodeId: string;
  onProgressUpdate?: (percent: number) => void;
}

export default function EpisodePlayer({
  videoId,
  episodeId,
  onProgressUpdate,
}: EpisodePlayerProps) {
  const [isReady, setIsReady] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef<YT.Player | null>(null);
  const updateWatchProgress = useLearningStore((state) => state.updateWatchProgress);

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  useEffect(() => {
    // Load YouTube IFrame API
    if (!window.YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    }

    // Wait for API to be ready
    const initPlayer = () => {
      if (window.YT && window.YT.Player) {
        playerRef.current = new window.YT.Player(`player-${episodeId}`, {
          videoId,
          playerVars: {
            autoplay: 0,
            controls: 1,
            modestbranding: 1,
            rel: 0,
          },
          events: {
            onReady: (event) => {
              setIsReady(true);
              setDuration(event.target.getDuration());
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.PLAYING) {
                trackProgress();
              }
            },
          },
        });
      }
    };

    if (window.YT && window.YT.Player) {
      initPlayer();
    } else {
      window.onYouTubeIframeAPIReady = initPlayer;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, [videoId, episodeId]);

  const trackProgress = () => {
    const interval = setInterval(() => {
      if (playerRef.current && playerRef.current.getCurrentTime) {
        const current = playerRef.current.getCurrentTime();
        const total = playerRef.current.getDuration();

        if (total > 0) {
          setCurrentTime(current);
          setDuration(total);

          const percentWatched = (current / total) * 100;

          // Update Zustand store
          updateWatchProgress(episodeId, percentWatched);

          // Notify parent
          if (onProgressUpdate) {
            onProgressUpdate(percentWatched);
          }

          // Stop tracking if video ended
          if (percentWatched >= 99) {
            clearInterval(interval);
          }
        }
      }
    }, 1000); // Update every second

    return () => clearInterval(interval);
  };

  return (
    <div className="relative w-full">
      {/* Video Container */}
      <div className="relative aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
        <div id={`player-${episodeId}`} className="w-full h-full" />

        {/* Loading State */}
        {!isReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-black">
            <div className="text-white text-lg">Loading video...</div>
          </div>
        )}
      </div>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-700">
            Watch Progress
          </span>
          <span className="text-sm font-bold text-indigo-600">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* 80% Threshold Indicator */}
        {progress < 80 && (
          <div className="mt-2 text-sm text-gray-600">
            Watch at least 80% to unlock the quiz ({Math.round(80 - progress)}% to
            go)
          </div>
        )}

        {progress >= 80 && (
          <div className="mt-2 text-sm font-semibold text-green-600 flex items-center gap-2">
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
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Quiz unlocked! Ready to test your knowledge.
          </div>
        )}
      </div>
    </div>
  );
}

// Type declarations for YouTube IFrame API
declare global {
  interface Window {
    YT: typeof YT;
    onYouTubeIframeAPIReady: () => void;
  }
}

declare namespace YT {
  class Player {
    constructor(
      elementId: string,
      config: {
        videoId: string;
        playerVars?: any;
        events?: {
          onReady?: (event: any) => void;
          onStateChange?: (event: any) => void;
        };
      }
    );
    getCurrentTime(): number;
    getDuration(): number;
    destroy(): void;
  }

  enum PlayerState {
    PLAYING = 1,
    PAUSED = 2,
    ENDED = 0,
  }
}
