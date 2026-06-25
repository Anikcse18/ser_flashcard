# 🎓 Exam Flashcard Portal — SER (Software Engineering for Robotics)

A premium dark-mode flashcard app built with Next.js 14, TypeScript, and Tailwind CSS.
Deployed on Vercel. Progress saved in localStorage. Cards shuffle on every visit.

## ✨ Features

- 📚 Lecture-by-lecture flashcard navigation
- 🔀 Auto-shuffle on every page load
- 👁 Show/Hide answer with smooth animation
- ✅ Mark as Mastered with persistent tracking
- 📊 Progress bar: Viewed / Mastered / % complete
- 🔍 Filter to unmastered cards only
- ⌨️ Full keyboard navigation (← → Space M)
- 🌑 Premium dark mode design (Notion/Linear inspired)
- 📱 Fully mobile responsive
- ⚡ Statically generated — instant page loads

## 🚀 Deploy in 5 Minutes

### Step 1 — Clone and push to GitHub

```bash
# Create a new GitHub repo at github.com/new, then:
git init
git add .
git commit -m "initial commit: exam flashcard portal"
git remote add origin https://github.com/YOUR_USERNAME/exam-flashcard-portal.git
git branch -M main
git push -u origin main
```

### Step 2 — Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) → Sign in → **New Project**
2. Import your GitHub repo
3. Leave all settings as default (Vercel auto-detects Next.js)
4. Click **Deploy**
5. Done — live in ~60 seconds ✅

Your live URL will be: `https://exam-flashcard-portal.vercel.app`

---

## 💻 Run Locally

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + dark background
│   ├── page.tsx            # Homepage with lecture grid
│   ├── globals.css         # Global styles + CSS vars
│   └── lecture/
│       └── [id]/
│           └── page.tsx    # Dynamic lecture page (server)
├── components/
│   ├── LectureCard.tsx     # Homepage lecture card with hover
│   ├── LectureClient.tsx   # Flashcard session (client, shuffle, filter)
│   ├── FlashcardView.tsx   # Individual card + buttons + keyboard
│   ├── ProgressBar.tsx     # Progress tracker UI
│   └── DifficultyBadge.tsx # Easy/Medium/Hard badge
├── data/
│   ├── index.ts            # Central registry (add new lectures here)
│   ├── lecture1.ts         # Lecture 1 flashcards
│   ├── lecture2.ts         # Lecture 2 flashcards
│   └── lecture11.ts        # Lecture 11 flashcards
├── lib/
│   └── useProgress.ts      # localStorage progress hook
└── types/
    └── index.ts            # Flashcard + LectureMeta types
```

## ➕ Adding a New Lecture

1. Create `src/data/lectureX.ts`:

```typescript
import { Flashcard } from "@/types";

export const lectureXCards: Flashcard[] = [
  {
    id: X01,
    lecture: X,
    question: "Your question here?",
    answer: "Your detailed answer here.\n\nUse \\n for line breaks.",
    difficulty: "medium",   // "easy" | "medium" | "hard"
    category: "Theory",     // "Definition" | "Theory" | "Comparison" | "Scenario-based" | "Short Answer" | "Why"
  },
  // ... more cards
];
```

2. Register in `src/data/index.ts`:

```typescript
import { lectureXCards } from "./lectureX";

// Add to allCards:
export const allCards: Record<number, Flashcard[]> = {
  1: lecture1Cards,
  2: lecture2Cards,
  11: lecture11Cards,
  X: lectureXCards,   // ← add here
};

// Add to lecturesMeta:
export const lecturesMeta: LectureMeta[] = [
  // ... existing entries
  {
    id: X,
    title: "Your Lecture Title",
    description: "Brief description of topics covered",
    cardCount: lectureXCards.length,
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    accentColor: "text-orange-400",
  },
];
```

3. Push to GitHub → Vercel auto-deploys in ~30 seconds ✅

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `Space` / `Enter` | Show/hide answer |
| `→` / `n` | Next card |
| `←` / `p` | Previous card |
| `m` | Toggle mastered |

## 🎨 Available Gradient Options

```
from-violet-500 via-purple-500 to-indigo-500   (purple)
from-sky-500 via-cyan-500 to-teal-500          (blue)
from-rose-500 via-pink-500 to-fuchsia-500      (red/pink)
from-orange-500 via-amber-500 to-yellow-500    (orange)
from-emerald-500 via-green-500 to-teal-500     (green)
from-indigo-500 via-blue-500 to-sky-500        (indigo)
```

## 📦 Tech Stack

- **Next.js 14** (App Router, static generation)
- **React 18** with hooks
- **TypeScript** — strict mode
- **Tailwind CSS** — dark theme, custom animations
- **Vercel** — zero-config deployment

## 📊 Current Content

| Lecture | Title | Cards |
|---------|-------|-------|
| Lecture 1 | Introduction to SE for Robotics | 10 |
| Lecture 2 | Robot Software Architectures | 12 |
| Lecture 11 | Diagnosis in Distributed Systems | 21 |
| **Total** | | **43** |
