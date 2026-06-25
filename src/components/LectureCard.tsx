"use client";
import Link from "next/link";
import { LectureMeta } from "@/types";

interface Props {
  lecture: LectureMeta;
  index: number;
}

const icons: Record<number, string> = {
  1: "🚀",
  2: "🏛️",
  3: "📡",
  4: "🔧",
  5: "⚙️",
  6: "🧪",
  7: "🤖",
  8: "📊",
  9: "🧠",
  10: "🔬",
  11: "🛡️",
};

export default function LectureCard({ lecture, index }: Props) {
  const icon = icons[lecture.id] ?? "📚";

  return (
    <Link href={`/lecture/${lecture.id}`} className="group block">
      <div
        className="relative overflow-hidden rounded-2xl border border-white/8 p-6 h-full
          transition-all duration-300 ease-out
          hover:scale-[1.02] hover:border-white/20 hover:-translate-y-1
          hover:shadow-2xl cursor-pointer"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)",
          animationDelay: `${index * 60}ms`,
        }}
      >
        {/* Gradient shine on hover */}
        <div
          className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl bg-gradient-to-br ${lecture.gradient}`}
        />

        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl
              bg-gradient-to-br ${lecture.gradient} opacity-90 shadow-lg`}
          >
            {icon}
          </div>
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full border border-white/10
            text-white/40 bg-white/5"
          >
            L{lecture.id}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-white/90 mb-2 leading-snug group-hover:text-white transition-colors">
          {lecture.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-white/40 leading-relaxed mb-5">
          {lecture.description}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium ${lecture.accentColor}`}>
            {lecture.cardCount} cards
          </span>
          <span className="text-white/25 group-hover:text-white/60 transition-colors text-lg">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
