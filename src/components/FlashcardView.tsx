"use client";
import { useState, useEffect, useCallback } from "react";
import { Flashcard } from "@/types";
import DifficultyBadge from "./DifficultyBadge";

interface Props {
  card: Flashcard;
  index: number;
  total: number;
  isMastered: boolean;
  onMarkMastered: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function FlashcardView({
  card,
  index,
  total,
  isMastered,
  onMarkMastered,
  onNext,
  onPrev,
}: Props) {
  const [revealed, setRevealed] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  // Reset reveal when card changes
  useEffect(() => {
    setRevealed(false);
    setAnimKey((k) => k + 1);
  }, [card.id]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "n") onNext();
      if (e.key === "ArrowLeft" || e.key === "p") onPrev();
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        setRevealed((r) => !r);
      }
      if (e.key === "m") onMarkMastered();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onNext, onPrev, onMarkMastered]);

  const formatAnswer = useCallback((text: string) => {
    return text.split("\n").map((line, i) => {
      if (line.trim() === "") return <br key={i} />;
      // Bold headers (lines ending with colon)
      if (line.match(/^[A-Z].+:$/) || line.match(/^\d+\./)) {
        return (
          <p key={i} className="font-semibold text-white/90 mt-3 first:mt-0">
            {line}
          </p>
        );
      }
      return (
        <p key={i} className="text-white/70 leading-relaxed">
          {line}
        </p>
      );
    });
  }, []);

  return (
    <div
      key={animKey}
      className="animate-fade-up w-full"
      style={{ animationDuration: "0.35s" }}
    >
      {/* Card */}
      <div
        className={`relative rounded-2xl border transition-all duration-300 overflow-hidden
          ${isMastered ? "border-emerald-500/30" : "border-white/8"}
        `}
        style={{ background: "rgba(255,255,255,0.03)" }}
      >
        {/* Mastered glow */}
        {isMastered && (
          <div className="absolute inset-0 bg-emerald-500/5 pointer-events-none" />
        )}

        {/* Header */}
        <div className="flex items-center justify-between p-5 pb-0 flex-wrap gap-2">
          <div className="flex items-center gap-2.5">
            <DifficultyBadge difficulty={card.difficulty} />
            <span className="text-xs px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-white/40 font-medium">
              {card.category}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {isMastered && (
              <span className="text-xs text-emerald-400 font-semibold flex items-center gap-1">
                <span>✓</span> Mastered
              </span>
            )}
            <span className="text-xs text-white/30">
              {index + 1} / {total}
            </span>
          </div>
        </div>

        {/* Question */}
        <div className="p-5 pb-4">
          <p className="text-base font-medium text-white/90 leading-relaxed">
            {card.question}
          </p>
        </div>

        {/* Divider */}
        <div className="mx-5 h-px bg-white/8" />

        {/* Answer area */}
        <div className="p-5 pt-4">
          {revealed ? (
            <div
              className="animate-fade-up text-sm space-y-1"
              style={{ animationDuration: "0.25s" }}
            >
              {formatAnswer(card.answer)}
            </div>
          ) : (
            <button
              onClick={() => setRevealed(true)}
              className="w-full py-8 flex flex-col items-center gap-2 text-white/25
                hover:text-white/50 transition-colors group"
            >
              <span className="text-3xl group-hover:scale-110 transition-transform">👁</span>
              <span className="text-sm font-medium">Click to reveal answer</span>
              <span className="text-xs text-white/15">or press Space / Enter</span>
            </button>
          )}
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-3 mt-4 flex-wrap">
        <button
          onClick={() => setRevealed((r) => !r)}
          className="flex-1 min-w-[130px] py-3 px-4 rounded-xl border border-white/10 text-sm font-medium
            text-white/70 hover:text-white hover:border-white/25 transition-all bg-white/3 hover:bg-white/6"
        >
          {revealed ? "Hide Answer" : "Show Answer"}
        </button>

        <button
          onClick={onMarkMastered}
          className={`flex-1 min-w-[130px] py-3 px-4 rounded-xl border text-sm font-medium
            transition-all duration-200
            ${
              isMastered
                ? "border-emerald-500/40 bg-emerald-500/15 text-emerald-400 hover:bg-emerald-500/20"
                : "border-white/10 bg-white/3 text-white/70 hover:border-emerald-500/30 hover:text-emerald-400 hover:bg-emerald-500/10"
            }`}
        >
          {isMastered ? "✓ Mastered" : "Mark Mastered"}
        </button>

        <button
          onClick={onPrev}
          className="py-3 px-5 rounded-xl border border-white/10 text-sm font-medium
            text-white/50 hover:text-white hover:border-white/25 transition-all bg-white/3 hover:bg-white/6"
          title="Previous (←)"
        >
          ←
        </button>

        <button
          onClick={onNext}
          className="flex-1 min-w-[130px] py-3 px-4 rounded-xl text-sm font-semibold
            text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #06b6d4)",
          }}
          title="Next random card (→)"
        >
          Next Card →
        </button>
      </div>

      {/* Keyboard hint */}
      <p className="text-center text-xs text-white/15 mt-3">
        ← → navigate · Space reveal · M master
      </p>
    </div>
  );
}
