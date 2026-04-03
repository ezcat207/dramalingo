// Core type definitions for DramaLingo

export interface Episode {
  episodeNumber: number;
  videoId: string;
  title: string; // Episode title/stage (e.g., "闪婚相遇")
  summary: string; // Brief plot summary

  // Emotion scores (0-100 scale)
  emotions: {
    laugh: number;    // Comedy/humor moments
    sweet: number;    // Romance/heartwarming moments
    hype: number;     // Satisfaction/power reversal moments
    conflict: number; // Tension/confrontation moments
    cry: number;      // Emotional/sad moments
  };

  // Scene notes for each emotion
  emotionNotes: {
    laugh?: string;
    sweet?: string;
    hype?: string;
    conflict?: string;
    cry?: string;
  };

  // Quiz questions for this episode
  quizzes: Quiz[];
}

export interface Quiz {
  id: string;
  type: 'vocabulary' | 'comprehension' | 'emotion-match' | 'cultural';
  question: string;
  options: string[];
  correctAnswer: number; // Index of correct option (0-3)
  explanation: string;
  relatedTimestamp?: number; // Optional: link to video moment
}

export interface Drama {
  id: string;
  videoId: string; // Full video YouTube ID
  titleZh: string;
  titleEn: string | null;
  totalEpisodes: number;
  difficultyLevel: 1 | 2 | 3 | 4 | 5;

  // Learning path
  episodes: Episode[];

  // Cultural context
  description?: string;
  tags?: string[];
}

export interface UserProgress {
  userId: string;
  dramaId: string;
  currentEpisode: number;
  episodesCompleted: number[];
  totalXP: number;
  streak: number; // Consecutive days
  lastActivityDate: string; // ISO date string
  badges: string[]; // Array of badge IDs
}

export interface QuizResult {
  episodeId: string;
  quizId: string;
  isCorrect: boolean;
  attemptedAt: string; // ISO timestamp
}

export interface Badge {
  id: string;
  name: string;
  nameZh: string;
  emoji: string;
  description: string;
  descriptionZh: string;
  category: 'milestone' | 'streak' | 'mastery' | 'cultural';
  requirement: string; // e.g., "Complete 1 episode", "3-day streak"
}

export interface WatchProgress {
  episodeId: string;
  percentWatched: number; // 0-100
  lastUpdated: string; // ISO timestamp
}
