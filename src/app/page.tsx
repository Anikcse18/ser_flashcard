import LectureCard from "@/components/LectureCard";
import { lecturesMeta } from "@/data";

export default function Home() {
  const totalCards = lecturesMeta.reduce((sum, l) => sum + l.cardCount, 0);

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full
          border border-violet-500/30 bg-violet-500/10 text-violet-400 mb-6">
          <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
          Software Engineering for Robotics — HBRS
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
          Exam Flashcard{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
          >
            Portal
          </span>
        </h1>

        <p className="text-lg text-white/50 max-w-xl mx-auto mb-3">
          Practice likely exam questions lecture by lecture.
          <br />
          Randomised. Tracked. Exam-focused.
        </p>

        <div className="flex items-center justify-center gap-6 text-sm text-white/30 mt-6">
          <span>{lecturesMeta.length} lectures</span>
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <span>{totalCards} flashcards</span>
          <span className="w-1 h-1 bg-white/20 rounded-full" />
          <span>Progress saved locally</span>
        </div>
      </div>

      {/* Lecture grid */}
      <div className="max-w-5xl mx-auto px-4 pb-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-sm font-semibold text-white/40 uppercase tracking-widest">
            Select a Lecture
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {lecturesMeta.map((lecture, i) => (
            <LectureCard key={lecture.id} lecture={lecture} index={i} />
          ))}

          {/* Coming soon placeholder */}
          <div className="rounded-2xl border border-dashed border-white/8 p-6 flex flex-col
            items-center justify-center gap-2 min-h-[180px]">
            <span className="text-2xl opacity-30">+</span>
            <p className="text-xs text-white/20 text-center">
              More lectures coming soon
            </p>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-16 rounded-2xl border border-white/8 p-6"
          style={{ background: "rgba(255,255,255,0.02)" }}>
          <h3 className="text-sm font-semibold text-white/60 mb-4">
            💡 Study Tips
          </h3>
          <div className="grid sm:grid-cols-3 gap-4 text-xs text-white/35">
            <div>
              <p className="text-white/60 font-medium mb-1">Keyboard shortcuts</p>
              <p>Space / Enter → reveal answer</p>
              <p>← → navigate cards</p>
              <p>M → mark mastered</p>
            </div>
            <div>
              <p className="text-white/60 font-medium mb-1">Strategy</p>
              <p>Cards shuffle on every page load</p>
              <p>Filter to unmastered to focus</p>
              <p>Progress saved across sessions</p>
            </div>
            <div>
              <p className="text-white/60 font-medium mb-1">Priority</p>
              <p>⭐⭐⭐ Hard = must know</p>
              <p>⭐⭐ Medium = important</p>
              <p>⭐ Easy = quick mark</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
