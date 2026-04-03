import { Badge } from './types';

export const BADGES: Record<string, Badge> = {
  firstSteps: {
    id: 'first-steps',
    name: 'First Steps',
    nameZh: '初次尝试',
    emoji: '🎬',
    description: 'Complete your first episode',
    descriptionZh: '完成第一集学习',
    category: 'milestone',
    requirement: 'Complete Episode 1'
  },

  halfwayThere: {
    id: 'halfway-there',
    name: 'Halfway There',
    nameZh: '过半了',
    emoji: '🏃',
    description: 'Complete 3 episodes',
    descriptionZh: '完成3集学习',
    category: 'milestone',
    requirement: 'Complete Episode 3'
  },

  dramaGraduate: {
    id: 'drama-graduate',
    name: 'Drama Graduate',
    nameZh: '短剧毕业生',
    emoji: '🎓',
    description: 'Complete all 5 MVP episodes',
    descriptionZh: '完成全部5集',
    category: 'milestone',
    requirement: 'Complete all 5 episodes'
  },

  dailyLearner: {
    id: 'daily-learner',
    name: 'Daily Learner',
    nameZh: '每日学习者',
    emoji: '🔥',
    description: '3-day learning streak',
    descriptionZh: '连续学习3天',
    category: 'streak',
    requirement: '3-day streak'
  },

  dedicatedStudent: {
    id: 'dedicated-student',
    name: 'Dedicated Student',
    nameZh: '专注学生',
    emoji: '⚡',
    description: '7-day learning streak',
    descriptionZh: '连续学习7天',
    category: 'streak',
    requirement: '7-day streak'
  },

  familyExpert: {
    id: 'family-expert',
    name: 'Family Dynamics Expert',
    nameZh: '家庭剧专家',
    emoji: '👨\u200d👩\u200d👧\u200d👦',
    description: 'Perfect score on Episode 5 quiz',
    descriptionZh: '第5集测验满分',
    category: 'cultural',
    requirement: '100% on Episode 5'
  }
};

// Helper function to check badge unlocks
export function checkBadgeUnlocks(
  episodesCompleted: number[],
  streak: number,
  quizScores: Record<number, { correct: number; total: number }>
): string[] {
  const newBadges: string[] = [];

  // Milestone badges
  if (episodesCompleted.includes(1) && episodesCompleted.length === 1) {
    newBadges.push('first-steps');
  }
  if (episodesCompleted.includes(3) && episodesCompleted.length === 3) {
    newBadges.push('halfway-there');
  }
  if (episodesCompleted.length === 5) {
    newBadges.push('drama-graduate');
  }

  // Streak badges
  if (streak === 3) {
    newBadges.push('daily-learner');
  }
  if (streak === 7) {
    newBadges.push('dedicated-student');
  }

  // Cultural mastery badge
  if (quizScores[5] && quizScores[5].correct === quizScores[5].total) {
    newBadges.push('family-expert');
  }

  return newBadges;
}

export function getAllBadges(): Badge[] {
  return Object.values(BADGES);
}

export function getBadgeById(id: string): Badge | undefined {
  return BADGES[id];
}
