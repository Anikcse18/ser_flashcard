"use client";
import { useCallback, useEffect, useState } from "react";

type ProgressData = {
  viewed: number[];
  mastered: number[];
};

const STORAGE_KEY = (lectureId: number) => `flashcard_progress_${lectureId}`;

export function useProgress(lectureId: number, totalCards: number) {
  const [data, setData] = useState<ProgressData>({ viewed: [], mastered: [] });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY(lectureId));
      if (raw) setData(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, [lectureId]);

  const persist = useCallback(
    (next: ProgressData) => {
      setData(next);
      try {
        localStorage.setItem(STORAGE_KEY(lectureId), JSON.stringify(next));
      } catch {}
    },
    [lectureId]
  );

  const markViewed = useCallback(
    (cardId: number) => {
      setData((prev) => {
        if (prev.viewed.includes(cardId)) return prev;
        const next = { ...prev, viewed: [...prev.viewed, cardId] };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const toggleMastered = useCallback(
    (cardId: number) => {
      setData((prev) => {
        const isMastered = prev.mastered.includes(cardId);
        const next = {
          ...prev,
          mastered: isMastered
            ? prev.mastered.filter((id) => id !== cardId)
            : [...prev.mastered, cardId],
        };
        persist(next);
        return next;
      });
    },
    [persist]
  );

  const resetProgress = useCallback(() => {
    const next = { viewed: [], mastered: [] };
    persist(next);
  }, [persist]);

  const masteredCount = data.mastered.length;
  const viewedCount = data.viewed.length;
  const percentage =
    totalCards > 0 ? Math.round((masteredCount / totalCards) * 100) : 0;

  return {
    hydrated,
    viewed: data.viewed,
    mastered: data.mastered,
    masteredCount,
    viewedCount,
    percentage,
    markViewed,
    toggleMastered,
    resetProgress,
    isMastered: (cardId: number) => data.mastered.includes(cardId),
  };
}
