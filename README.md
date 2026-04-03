# DramaLingo - 多邻国·短剧版

**"Duolingo for Chinese Short Dramas"** - Learn Chinese through entertaining short dramas

## 🎯 What is DramaLingo?

An educational platform combining entertainment + learning:
- Watch 5-min drama episodes
- Complete quizzes (vocabulary, culture, comprehension)
- Earn badges and track progress
- Mobile-first experience

## ✨ Current Features

- **Episode Watching**: Stream drama episodes with embedded YouTube player
- **Progress Tracking**: Real-time watch progress monitoring
- **Smart Quiz Unlock**: Quizzes unlock automatically after watching 80% of an episode
- **Interactive Quizzes**: 4 questions per episode with immediate feedback
- **Visual Feedback**: Confetti for correct answers, shake animation for wrong ones
- **XP System**: Earn 20 base XP + 5 per correct answer
- **Badge Unlocking**: Automatic badge detection and celebration
- **Episode Navigation**: Easy prev/next navigation between episodes
- **Persistent State**: Your progress is saved locally with Zustand + localStorage
- **Mobile Optimized**: Responsive design works beautifully on all devices
- **Emotion Scores**: Each episode shows laugh/sweet/hype/conflict/cry ratings

## 🚀 Current Status: Quiz System Complete (Phase 3)

### ✅ Built
- Next.js 16 + React 19 + TypeScript + Tailwind
- 5 episodes with complete metadata
- 20 hand-crafted quizzes (vocabulary, comprehension, emotion, cultural)
- 6-badge system with auto-unlock detection
- Mobile-first homepage
- Episode player with YouTube IFrame API integration
- Real-time watch progress tracking
- 80% watch threshold for quiz unlock
- **NEW: Interactive quiz cards with tap-to-select**
- **NEW: Visual feedback (confetti + shake animations)**
- **NEW: XP calculation and awarding (20 base + 5 per correct)**
- **NEW: Results screen with score breakdown**
- **NEW: Badge unlock notifications with animations**
- **NEW: Episode completion flow**

### 🚧 Coming Next
- Gamification layer: badge gallery, streak calendar (Phase 4)
- PWA capabilities: offline support, install prompt (Phase 5)

## 📊 MVP Drama: 家里家外 (Inside and Outside)

- 5 episodes (out of 24 total)
- Blended family theme
- Complete emotion data (laugh/sweet/hype/conflict/cry)
- 20 quizzes ready

## 🛠️ Development

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
```

## 📁 Structure

```
lib/
  types.ts                        # TypeScript definitions
  learning-data.ts                # Episodes + 20 quizzes
  badges.ts                       # Badge system + unlock logic

store/
  learning-store.ts               # Zustand state management

components/
  player/EpisodePlayer.tsx        # YouTube player with progress tracking
  quiz/QuizCard.tsx               # Interactive quiz component

app/
  page.tsx                        # Homepage
  learn/[dramaId]/[episodeId]/
    page.tsx                      # Episode detail page
    quiz/page.tsx                 # Quiz flow + results
```

## 🎨 Design

- Indigo/Purple gradient theme
- Mobile-first responsive
- Clean, modern UI

## 🌐 Deployment

**Live Demo**: https://dramalingo-699rds0sx-ezcat207s-projects.vercel.app

Deploy updates to Vercel:
```bash
vercel --prod
```

Auto-deploys on push to `main` branch.

### Complete User Flow (Now Live!)
1. Visit homepage → Click "Start Learning"
2. Watch Episode 1 → Progress tracked in real-time
3. Hit 80% → Quiz unlocks automatically
4. Complete quiz → Get immediate feedback with confetti/shake
5. See results → Earn XP and unlock badges
6. Move to next episode → Repeat!

---

🤖 Generated with [Claude Code](https://claude.ai/code) via [Happy](https://happy.engineering)
