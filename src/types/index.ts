export type Difficulty = "easy" | "medium" | "hard";

export type Category =
  | "Definition"
  | "Theory"
  | "Comparison"
  | "Scenario-based"
  | "Short Answer"
  | "Why";

export type Flashcard = {
  id: number;
  lecture: number;
  question: string;
  answer: string;
  difficulty: Difficulty;
  category: Category;
};

export type LectureMeta = {
  id: number;
  title: string;
  description: string;
  cardCount: number;
  gradient: string;
  accentColor: string;
};
