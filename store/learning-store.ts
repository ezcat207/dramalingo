import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface WatchProgress {
  episodeId: string;
  percentWatched: number;
  lastUpdated: string;
  isUnlocked: boolean; // true if 80%+ watched
}

interface LearningState {
  // Watch progress by episode ID
  watchProgress: Record<string, WatchProgress>;

  // Current episode being watched
  currentEpisode: number;

  // XP tracking
  totalXP: number;

  // Streak tracking
  streak: number;
  lastActivityDate: string | null;

  // Badge IDs unlocked
  unlockedBadges: string[];

  // Actions
  updateWatchProgress: (episodeId: string, percent: number) => void;
  unlockQuiz: (episodeId: string) => void;
  addXP: (amount: number) => void;
  unlockBadge: (badgeId: string) => void;
  updateStreak: () => void;
  setCurrentEpisode: (episodeNumber: number) => void;
}

export const useLearningStore = create<LearningState>()(
  persist(
    (set, get) => ({
      watchProgress: {},
      currentEpisode: 1,
      totalXP: 0,
      streak: 0,
      lastActivityDate: null,
      unlockedBadges: [],

      updateWatchProgress: (episodeId: string, percent: number) => {
        set((state) => ({
          watchProgress: {
            ...state.watchProgress,
            [episodeId]: {
              episodeId,
              percentWatched: Math.max(
                percent,
                state.watchProgress[episodeId]?.percentWatched || 0
              ),
              lastUpdated: new Date().toISOString(),
              isUnlocked: state.watchProgress[episodeId]?.isUnlocked || percent >= 80,
            },
          },
        }));
      },

      unlockQuiz: (episodeId: string) => {
        set((state) => ({
          watchProgress: {
            ...state.watchProgress,
            [episodeId]: {
              ...state.watchProgress[episodeId],
              isUnlocked: true,
            },
          },
        }));
      },

      addXP: (amount: number) => {
        set((state) => ({
          totalXP: state.totalXP + amount,
        }));
      },

      unlockBadge: (badgeId: string) => {
        set((state) => {
          if (state.unlockedBadges.includes(badgeId)) {
            return state; // Already unlocked
          }
          return {
            unlockedBadges: [...state.unlockedBadges, badgeId],
          };
        });
      },

      updateStreak: () => {
        const today = new Date().toISOString().split('T')[0];
        const lastDate = get().lastActivityDate?.split('T')[0];

        if (!lastDate) {
          // First activity
          set({ streak: 1, lastActivityDate: new Date().toISOString() });
          return;
        }

        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        const yesterdayStr = yesterday.toISOString().split('T')[0];

        if (lastDate === today) {
          // Already logged today, no change
          return;
        } else if (lastDate === yesterdayStr) {
          // Consecutive day
          set((state) => ({
            streak: state.streak + 1,
            lastActivityDate: new Date().toISOString(),
          }));
        } else {
          // Streak broken
          set({
            streak: 1,
            lastActivityDate: new Date().toISOString(),
          });
        }
      },

      setCurrentEpisode: (episodeNumber: number) => {
        set({ currentEpisode: episodeNumber });
      },
    }),
    {
      name: 'dramalingo-learning',
    }
  )
);
