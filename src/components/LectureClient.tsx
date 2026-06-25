"use client";
import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { Flashcard, LectureMeta } from "@/types";
import { shuffleArray } from "@/data";
import { useProgress } from "@/lib/useProgress";
import FlashcardView from "@/components/FlashcardView";
import ProgressBar from "@/components/ProgressBar";

interface Props {
  cards: Flashcard[];
  meta: LectureMeta;
}

export default function LectureClient({ cards, meta }: Props) {
  const [shuffled, setShuffled] = useState<Flashcard[]>([]);
  const [index, setIndex] = useState(0);

  const progress = useProgress(meta.id, cards.length);

  // Shuffle on mount
  useEffect(() => {
    setShuffled(shuffleArray(cards));
  }, [cards]);

  const currentCard = shuffled[index];

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % shuffled.length);
  }, [shuffled.length]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + shuffled.length) % shuffled.length);
  }, [shuffled.length]);

  const goRandom = useCallback(() => {
    let next = Math.floor(Math.random() * shuffled.length);
    if (next === index && shuffled.length > 1) next = (next + 1) % shuffled.length;
    setIndex(next);
  }, [index, shuffled.length]);

  // Mark current card viewed whenever it changes
  useEffect(() => {
    if (currentCard) progress.markViewed(currentCard.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCard?.id]);

  const handleMastered = useCallback(() => {
    if (currentCard) progress.toggleMastered(currentCard.id);
  }, [currentCard, progress]);

  // Filter UI
  const [filter, setFilter] = useState<"all" | "unmastered">("all");

  const filteredCards = useMemo(() => {
    if (filter === "all") return shuffled;
    return shuffled.filter((c) => !progress.isMastered(c.id));
  }, [shuffled, filter, progress]);

  const filteredIndex = useMemo(() => {
    if (!currentCard) return 0;
    const idx = filteredCards.findIndex((c) => c.id === currentCard.id);
    return idx >= 0 ? idx : 0;
  }, [currentCard, filteredCards]);

  const displayCard = filteredCards[filteredIndex] ?? filteredCards[0];

  if (!shuffled.length) {
    return (
      <div className="flex items-center justify-center h-64 text-white/30 text-sm">
        Loading cards...
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/80
          transition-colors mb-8 group"
      >
        <span className="group-hover:-translate-x-1 transition-transform">←</span>
        All Lectures
      </Link>

      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-2">
          <span
            className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-gradient-to-r ${meta.gradient} text-white`}
          >
            Lecture {meta.id}
          </span>
          <span className="text-xs text-white/30">{cards.length} cards</span>
        </div>
        <h1 className="text-xl font-bold text-white">{meta.title}</h1>
        <p className="text-sm text-white/40 mt-1">{meta.description}</p>
      </div>

      {/* Progress */}
      {progress.hydrated && (
        <ProgressBar
          percentage={progress.percentage}
          masteredCount={progress.masteredCount}
          totalCards={cards.length}
          viewedCount={progress.viewedCount}
          onReset={progress.resetProgress}
        />
      )}

      {/* Filter tabs */}
      <div className="flex gap-2 mb-5">
        {(["all", "unmastered"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1.5 rounded-full text-xs font-medium border transition-all
              ${
                filter === f
                  ? "border-violet-500/50 bg-violet-500/15 text-violet-400"
                  : "border-white/8 bg-white/3 text-white/40 hover:text-white/60"
              }`}
          >
            {f === "all" ? "All cards" : `Unmastered (${filteredCards.length})`}
          </button>
        ))}
        <button
          onClick={() => {
            setShuffled(shuffleArray(cards));
            setIndex(0);
          }}
          className="ml-auto px-4 py-1.5 rounded-full text-xs font-medium border
            border-white/8 bg-white/3 text-white/40 hover:text-white/60 transition-all"
        >
          🔀 Reshuffle
        </button>
      </div>

      {/* Flashcard */}
      {displayCard ? (
        <FlashcardView
          card={displayCard}
          index={filteredIndex}
          total={filteredCards.length}
          isMastered={progress.isMastered(displayCard.id)}
          onMarkMastered={() => progress.toggleMastered(displayCard.id)}
          onNext={() =>
            setIndex(
              (shuffled.findIndex((c) => c.id === displayCard.id) + 1) %
                shuffled.length
            )
          }
          onPrev={() =>
            setIndex(
              (shuffled.findIndex((c) => c.id === displayCard.id) -
                1 +
                shuffled.length) %
                shuffled.length
            )
          }
        />
      ) : (
        <div className="text-center py-16 text-white/30">
          <p className="text-4xl mb-3">🎉</p>
          <p className="font-medium text-white/60">All cards mastered!</p>
          <button
            onClick={() => setFilter("all")}
            className="mt-4 text-sm text-violet-400 hover:text-violet-300 transition-colors"
          >
            Show all cards
          </button>
        </div>
      )}
    </div>
  );
}
