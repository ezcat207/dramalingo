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
- **Episode Navigation**: Easy prev/next navigation between episodes
- **Persistent State**: Your progress is saved locally with Zustand + localStorage
- **Mobile Optimized**: Responsive design works beautifully on all devices
- **Emotion Scores**: Each episode shows laugh/sweet/hype/conflict/cry ratings

## 🚀 Current Status: Core Player Complete (Phase 2)

### ✅ Built
- Next.js 16 + React 19 + TypeScript + Tailwind
- 5 episodes with complete metadata
- 20 hand-crafted quizzes (vocabulary, comprehension, emotion, cultural)
- 6-badge system
- Mobile-first homepage
- **NEW: Episode player with YouTube IFrame API integration**
- **NEW: Real-time watch progress tracking**
- **NEW: 80% watch threshold for quiz unlock**
- **NEW: Zustand state management with localStorage persistence**
- **NEW: Episode navigation system**

### 🚧 Coming Next
- Interactive quiz system (Phase 3)
- Gamification layer with badge animations (Phase 4)
- PWA capabilities (Phase 5)

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
  badges.ts                       # Badge system

store/
  learning-store.ts               # Zustand state management

components/
  player/EpisodePlayer.tsx        # YouTube player with progress tracking

app/
  page.tsx                        # Homepage
  learn/[dramaId]/[episodeId]/
    page.tsx                      # Episode detail page
```

## 🎨 Design

- Indigo/Purple gradient theme
- Mobile-first responsive
- Clean, modern UI

## 🌐 Deployment

**Live Demo**: https://dramalingo-o8d6dg9mx-ezcat207s-projects.vercel.app

Deploy updates to Vercel:
```bash
vercel --prod
```

Auto-deploys on push to `main` branch.

---

🤖 Generated with [Claude Code](https://claude.ai/code) via [Happy](https://happy.engineering)
