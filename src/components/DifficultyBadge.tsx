import { Difficulty } from "@/types";

const styles: Record<Difficulty, string> = {
  easy: "bg-emerald-500/15 text-emerald-400 border-emerald-500/20",
  medium: "bg-amber-500/15 text-amber-400 border-amber-500/20",
  hard: "bg-rose-500/15 text-rose-400 border-rose-500/20",
};

const labels: Record<Difficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
};

export default function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  return (
    <span
      className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${styles[difficulty]}`}
    >
      {labels[difficulty]}
    </span>
  );
}
