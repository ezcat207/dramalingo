# DramaLingo - 多邻国·短剧版

**"Duolingo for Chinese Short Dramas"** - Learn Chinese through entertaining short dramas

## 🎯 What is DramaLingo?

An educational platform combining entertainment + learning:
- Watch 5-min drama episodes
- Complete quizzes (vocabulary, culture, comprehension)
- Earn badges and track progress
- Mobile-first experience

## 🚀 Current Status: Foundation Complete (Phase 1)

### ✅ Built
- Next.js 16 + React 19 + TypeScript + Tailwind
- 5 episodes with complete metadata
- 20 hand-crafted quizzes (vocabulary, comprehension, emotion, cultural)
- 6-badge system
- Mobile-first homepage

### 🚧 Coming Next
- Video player with progress tracking (Phase 2)
- Interactive quiz system (Phase 3)
- Gamification layer (Phase 4)
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
lib/types.ts           # TypeScript definitions
lib/learning-data.ts   # Episodes + 20 quizzes
lib/badges.ts          # Badge system
app/page.tsx           # Homepage
```

## 🎨 Design

- Indigo/Purple gradient theme
- Mobile-first responsive
- Clean, modern UI

## 🌐 Deployment

Deploy to Vercel:
```bash
vercel --prod
```

---

🤖 Generated with [Claude Code](https://claude.ai/code) via [Happy](https://happy.engineering)
