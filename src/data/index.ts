import { Flashcard, LectureMeta } from "@/types";
import { lecture1Cards } from "./lecture1";
import { lecture2Cards } from "./lecture2";
import { lecture11Cards } from "./lecture11";

// ─── Add new lectures here ───────────────────────────────────────────────────
export const allCards: Record<number, Flashcard[]> = {
  1: lecture1Cards,
  2: lecture2Cards,
  11: lecture11Cards,
};

export const lecturesMeta: LectureMeta[] = [
  {
    id: 1,
    title: "Introduction to SE for Robotics",
    description:
      "Software vs programming, 4 factors of robot software, reconfigurable components, SDLC steps",
    cardCount: lecture1Cards.length,
    gradient: "from-violet-500 via-purple-500 to-indigo-500",
    accentColor: "text-violet-400",
  },
  {
    id: 2,
    title: "Robot Software Architectures",
    description:
      "Abstraction levels, SPA, behaviour-based, 3T, cognitive, UML diagrams",
    cardCount: lecture2Cards.length,
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
    accentColor: "text-sky-400",
  },
  {
    id: 11,
    title: "Diagnosis in Distributed Systems",
    description:
      "FDD definitions, fault types, redundancy, MRS attributes, swarm, plan diagnosis",
    cardCount: lecture11Cards.length,
    gradient: "from-rose-500 via-pink-500 to-fuchsia-500",
    accentColor: "text-rose-400",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────
export function getCards(lectureId: number): Flashcard[] {
  return allCards[lectureId] ?? [];
}

export function getLectureMeta(lectureId: number): LectureMeta | undefined {
  return lecturesMeta.find((l) => l.id === lectureId);
}

export function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
