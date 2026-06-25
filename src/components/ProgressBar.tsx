"use client";

interface Props {
  percentage: number;
  masteredCount: number;
  totalCards: number;
  viewedCount: number;
  onReset: () => void;
}

export default function ProgressBar({
  percentage,
  masteredCount,
  totalCards,
  viewedCount,
  onReset,
}: Props) {
  return (
    <div className="rounded-2xl border border-white/8 p-5 mb-6"
      style={{ background: "rgba(255,255,255,0.03)" }}>
      {/* Stats row */}
      <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
        <div className="flex items-center gap-4 text-sm">
          <span className="text-white/40">
            Viewed{" "}
            <span className="text-white/70 font-medium">
              {viewedCount}/{totalCards}
            </span>
          </span>
          <span className="text-white/20">|</span>
          <span className="text-white/40">
            Mastered{" "}
            <span className="text-emerald-400 font-semibold">
              {masteredCount}/{totalCards}
            </span>
          </span>
          <span className="text-white/20">|</span>
          <span className="text-white/40">
            Progress{" "}
            <span className="text-violet-400 font-semibold">{percentage}%</span>
          </span>
        </div>
        <button
          onClick={onReset}
          className="text-xs text-white/25 hover:text-white/60 transition-colors px-2 py-1 rounded-lg hover:bg-white/5"
        >
          Reset
        </button>
      </div>

      {/* Bar */}
      <div className="h-1.5 bg-white/8 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${percentage}%`,
            background:
              "linear-gradient(90deg, #7c3aed, #06b6d4)",
          }}
        />
      </div>
    </div>
  );
}
