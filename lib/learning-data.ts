import { Drama, Episode, Quiz } from './types';

// Quiz questions for Episode 1
const episode1Quizzes: Quiz[] = [
  {
    id: 'ep1-q1',
    type: 'comprehension',
    question: '第一集中，晓艳为什么需要闪婚？',
    options: [
      '她爱上了海清',
      '她被前夫抛弃，急需一个家',
      '她想要报复前夫',
      '她的父母安排的'
    ],
    correctAnswer: 1,
    explanation: '晓艳遭前夫抛弃，海清突然求婚给她一个家。这是典型的"契约婚姻"开局，也展现了女主的困境。'
  },
  {
    id: 'ep1-q2',
    type: 'emotion-match',
    question: '这一集中，哪种情感占据主导地位？',
    options: [
      '笑点满满（laugh）',
      '甜蜜浪漫（sweet）',
      '冲突紧张（conflict）',
      '爽点爆发（hype）'
    ],
    correctAnswer: 2,
    explanation: '第一集的conflict情感得分最高（50分），因为有"渣男前夫搬空家当"和女主被抛弃的冲突情节。'
  },
  {
    id: 'ep1-q3',
    type: 'cultural',
    question: '为什么"闪婚"在中国短剧中如此常见？',
    options: [
      '这是真实生活的写照',
      '快速建立契约关系，推动浪漫剧情发展',
      '观众喜欢看婚礼场景',
      '节省拍摄成本'
    ],
    correctAnswer: 1,
    explanation: '"契约婚姻"是短剧常见trope。它快速建立男女主关系，同时保持情感距离，为后续的相处和爱情发展创造空间。'
  },
  {
    id: 'ep1-q4',
    type: 'vocabulary',
    question: '"霸气怒滚渣男"中的"渣男"是什么意思？',
    options: [
      '贫穷的男人',
      '不负责任、品行不端的男人',
      '愚蠢的男人',
      '英俊的男人'
    ],
    correctAnswer: 1,
    explanation: '"渣男"是现代汉语网络用语，指感情中不负责任、欺骗背叛的男性。在这集中指的是抛弃晓艳的前夫。'
  }
];

// Quiz questions for Episode 2
const episode2Quizzes: Quiz[] = [
  {
    id: 'ep2-q1',
    type: 'comprehension',
    question: '海清如何表现他对晓艳的保护？',
    options: [
      '他打了婆婆',
      '他上交全部工资给晓艳',
      '他带晓艳离开了家',
      '他跟婆婆断绝关系'
    ],
    correctAnswer: 1,
    explanation: '海清"上交全部身家"是经典的"霸道总裁宠妻"桥段，通过实际行动展示对女主的保护和信任。'
  },
  {
    id: 'ep2-q2',
    type: 'emotion-match',
    question: '第二集的主要情感基调是什么？',
    options: [
      '悲伤（cry: 0）',
      '甜蜜（sweet: 30）',
      '冲突（conflict: 30）',
      'B和C都对'
    ],
    correctAnswer: 3,
    explanation: '第二集同时包含甜蜜（海清护妻）和冲突（婆婆刁难）两种情感，这种对比增强戏剧张力。'
  },
  {
    id: 'ep2-q3',
    type: 'cultural',
    question: '"婆媳矛盾"为什么是中国家庭剧的经典主题？',
    options: [
      '这只是编剧的虚构',
      '反映传统大家庭中权力结构和代际冲突',
      '为了增加笑点',
      '国外没有这种关系'
    ],
    correctAnswer: 1,
    explanation: '在传统中国家庭中，婆婆掌握家庭权力，与新进门的儿媳之间容易产生矛盾。这是真实的文化现象，也是戏剧冲突的来源。'
  },
  {
    id: 'ep2-q4',
    type: 'vocabulary',
    question: '"恶婆婆"中的"恶"字在这里的意思是？',
    options: [
      '邪恶的、坏的',
      '恐怖的',
      '严格的',
      '丑陋的'
    ],
    correctAnswer: 0,
    explanation: '"恶"在这里形容婆婆的刁难行为和不好的态度。"恶婆婆"是家庭剧中的经典反派角色。'
  }
];

// Quiz questions for Episode 3
const episode3Quizzes: Quiz[] = [
  {
    id: 'ep3-q1',
    type: 'comprehension',
    question: '第三集的核心冲突是什么？',
    options: [
      '晓艳和海清吵架',
      '婆婆偷走新被子送给舅舅',
      '晓艳要离婚',
      '海清失业了'
    ],
    correctAnswer: 1,
    explanation: '婆婆"偷新被送舅舅"是这集的主要冲突，体现了婆婆对媳妇的不尊重，以及女主需要捍卫自己的权利。'
  },
  {
    id: 'ep3-q2',
    type: 'emotion-match',
    question: '晓艳"霸气夺回陪嫁"属于哪种情感类型？',
    options: [
      'laugh - 搞笑',
      'sweet - 甜蜜',
      'hype - 爽点',
      'cry - 悲伤'
    ],
    correctAnswer: 2,
    explanation: 'hype（爽点）指女主反击、夺回尊严的情节。"霸气夺回陪嫁"让观众感到痛快和满足。'
  },
  {
    id: 'ep3-q3',
    type: 'cultural',
    question: '为什么"陪嫁"在剧中如此重要？',
    options: [
      '陪嫁很值钱',
      '代表女方家庭的体面和女儿的地位',
      '只是道具',
      '法律要求的'
    ],
    correctAnswer: 1,
    explanation: '在传统文化中，陪嫁不仅是物质财产，更象征着女方家庭的尊严和女儿在婆家的地位。偷陪嫁是严重的冒犯。'
  },
  {
    id: 'ep3-q4',
    type: 'vocabulary',
    question: '"警察来了快点跑"反映了什么？',
    options: [
      '婆婆犯了法',
      '婆婆心虚，知道自己理亏',
      '警察是坏人',
      '邻居报警'
    ],
    correctAnswer: 1,
    explanation: '这句话的搞笑之处在于婆婆虽然蛮横，但内心知道偷东西是不对的，所以一听"警察"就害怕逃跑。'
  }
];

// Quiz questions for Episode 4
const episode4Quizzes: Quiz[] = [
  {
    id: 'ep4-q1',
    type: 'comprehension',
    question: '海清如何处理母亲和妻子的矛盾？',
    options: [
      '他选择站在母亲一边',
      '他警告母亲不要再刁难妻子',
      '他离开了家',
      '他什么也不做'
    ],
    correctAnswer: 1,
    explanation: '海清"霸气警告亲妈"展示了他护妻的立场，这是"好男人"人设的体现，也是观众期待的爽点。'
  },
  {
    id: 'ep4-q2',
    type: 'emotion-match',
    question: '这一集的sweet（甜蜜）和hype（爽点）都是30分，为什么？',
    options: [
      '情感数据错误',
      '既有夫妻感情升温，又有护妻打脸情节',
      '编剧不知道写什么',
      '只有冲突没有其他'
    ],
    correctAnswer: 1,
    explanation: '这集同时包含"海清承诺让妻享福"（sweet）和"警告亲妈"（hype）两种高潮，平衡了浪漫和爽感。'
  },
  {
    id: 'ep4-q3',
    type: 'cultural',
    question: '"两个娃打架和解"有什么文化意义？',
    options: [
      '孩子打架很正常',
      '象征重组家庭的融合过程',
      '纯粹的搞笑情节',
      '没有意义'
    ],
    correctAnswer: 1,
    explanation: '在"重组家庭"题材中，孩子们的关系是关键。打架后和解象征着新家庭成员之间逐渐接纳和融合。'
  },
  {
    id: 'ep4-q4',
    type: 'vocabulary',
    question: '"大的永远都大"这句话在剧中是什么意思？',
    options: [
      '年龄大的孩子应该让着小的',
      '搞笑的双关语（可能指其他"大"）',
      '哥哥比弟弟强壮',
      '尊重长辈'
    ],
    correctAnswer: 1,
    explanation: '这是一句搞笑的台词，表面上说年龄，实际上可能暗指其他方面的"大"，是短剧中常见的幽默手法。'
  }
];

// Quiz questions for Episode 5
const episode5Quizzes: Quiz[] = [
  {
    id: 'ep5-q1',
    type: 'comprehension',
    question: '第五集中，晓艳为什么要"手撕无良老师"？',
    options: [
      '老师打了她',
      '老师冤枉她的女儿爽娃偷钱',
      '老师教得不好',
      '老师对海清无礼'
    ],
    correctAnswer: 1,
    explanation: '"无良老师冤枉爽娃偷钱"是引发冲突的原因，晓艳"霸气护女"展现母性力量，也是观众期待的爽点。'
  },
  {
    id: 'ep5-q2',
    type: 'emotion-match',
    question: '为什么这集的hype（爽点）得分最高（40）？',
    options: [
      '有打斗场面',
      '晓艳手撕老师，为女儿讨回公道',
      '海清升职了',
      '婆婆被教训了'
    ],
    correctAnswer: 1,
    explanation: '"手撕无良老师"是典型的爽剧情节：正义战胜不公，弱者（母亲）保护更弱者（女儿），观众情绪得到释放。'
  },
  {
    id: 'ep5-q3',
    type: 'cultural',
    question: '为什么"护犊子"（护子）情节在中国剧中如此受欢迎？',
    options: [
      '母爱是永恒的主题',
      '中国文化重视家庭和亲子关系',
      '满足观众的情感需求',
      '以上都对'
    ],
    correctAnswer: 3,
    explanation: '家庭观念深植于中国文化。"护犊子"情节既展现母爱本能，又让观众产生共鸣，是最能触动人心的主题之一。'
  },
  {
    id: 'ep5-q4',
    type: 'vocabulary',
    question: '"霸气"这个词在短剧中通常是什么意思？',
    options: [
      '霸道、欺负人',
      '强势、有气场、不服输',
      '生气、发怒',
      '神秘、高冷'
    ],
    correctAnswer: 1,
    explanation: '在短剧语境中，"霸气"是褒义词，形容人物强势、有魄力、敢于维护自己和家人的权利。是女主/男主人设的核心特质。'
  }
];

// Episodes data for 家里家外 (Inside and Outside)
export const mvpEpisodes: Episode[] = [
  {
    episodeNumber: 1,
    videoId: 'NDULBqPT6XY',
    title: '闪婚相遇',
    summary: '晓艳遭前夫抛弃，海清突袭求婚',
    emotions: {
      laugh: 10,
      sweet: 10,
      hype: 20,
      conflict: 50,
      cry: 10
    },
    emotionNotes: {
      laugh: '"神经兮兮的"',
      sweet: '海清求婚给个家',
      hype: '晓艳霸气怒滚渣男',
      conflict: '渣男前夫搬空家当',
      cry: '"住桥洞也不怕"'
    },
    quizzes: episode1Quizzes
  },
  {
    episodeNumber: 2,
    videoId: 'NDULBqPT6XY',
    title: '新婚交锋',
    summary: '新婚夜婆婆刁难，海清上交工资护妻',
    emotions: {
      laugh: 20,
      sweet: 30,
      hype: 20,
      conflict: 30,
      cry: 0
    },
    emotionNotes: {
      laugh: '"她是我男人"',
      sweet: '海清上交全部身家',
      hype: '海清护妻怼亲妈',
      conflict: '恶婆婆刁难二婚媳'
    },
    quizzes: episode2Quizzes
  },
  {
    episodeNumber: 3,
    videoId: 'NDULBqPT6XY',
    title: '夺回嫁妆',
    summary: '婆婆偷新被子，晓艳霸气夺回嫁妆',
    emotions: {
      laugh: 15,
      sweet: 15,
      hype: 30,
      conflict: 40,
      cry: 0
    },
    emotionNotes: {
      laugh: '"警察来了快点跑"',
      sweet: '回忆当年暗生情愫',
      hype: '晓艳强势夺回陪嫁',
      conflict: '婆婆偷新被送舅舅'
    },
    quizzes: episode3Quizzes
  },
  {
    episodeNumber: 4,
    videoId: 'NDULBqPT6XY',
    title: '家庭调和',
    summary: '海清警告亲妈护妻，俩萌娃打架和解',
    emotions: {
      laugh: 20,
      sweet: 30,
      hype: 30,
      conflict: 20,
      cry: 0
    },
    emotionNotes: {
      laugh: '"大的永远都大"',
      sweet: '海清承诺让妻享福',
      hype: '海清霸气警告亲妈',
      conflict: '爽娃帆娃激烈打架'
    },
    quizzes: episode4Quizzes
  },
  {
    episodeNumber: 5,
    videoId: 'NDULBqPT6XY',
    title: '霸气护女',
    summary: '无良老师冤枉爽娃，晓艳霸气护女',
    emotions: {
      laugh: 20,
      sweet: 20,
      hype: 40,
      conflict: 20,
      cry: 0
    },
    emotionNotes: {
      laugh: '"快点对着我笑"',
      sweet: '夫妻出差前发糖',
      hype: '晓艳手撕无良老师',
      conflict: '老师冤枉爽娃偷钱'
    },
    quizzes: episode5Quizzes
  }
];

// Main drama object
export const mvpDrama: Drama = {
  id: 'inside-outside',
  videoId: 'NDULBqPT6XY',
  titleZh: '家里家外',
  titleEn: 'Inside and Outside',
  totalEpisodes: 24, // Full drama has 24 episodes, we're using 5 for MVP
  difficultyLevel: 2, // Moderate difficulty
  episodes: mvpEpisodes,
  description: '重组家庭的温馨故事：晓艳遭遇婚变后遇到海清，两人闪婚组成新家庭。面对恶婆婆的刁难和继子女的融合，他们用真心守护这个家。',
  tags: ['重组家庭', '婆媳关系', '现代', '都市', '家庭温情']
};

// Helper functions
export function getEpisodeById(episodeNumber: number): Episode | undefined {
  return mvpEpisodes.find(ep => ep.episodeNumber === episodeNumber);
}

export function getTotalQuizCount(): number {
  return mvpEpisodes.reduce((sum, ep) => sum + ep.quizzes.length, 0);
}

export function calculateXP(correctAnswers: number, totalQuestions: number, isRetry: boolean = false): number {
  const baseXP = 20; // Base XP for completing episode
  const perQuestionXP = 5;
  const earnedXP = correctAnswers * perQuestionXP;
  const penalty = isRetry ? 0.5 : 1; // 50% penalty on retry

  return Math.floor((baseXP + earnedXP) * penalty);
}
