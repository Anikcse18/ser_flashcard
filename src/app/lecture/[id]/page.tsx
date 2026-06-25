import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getCards, getLectureMeta, lecturesMeta } from "@/data";
import LectureClient from "@/components/LectureClient";

interface Props {
  params: { id: string };
}

export function generateStaticParams() {
  return lecturesMeta.map((l) => ({ id: String(l.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const meta = getLectureMeta(Number(params.id));
  if (!meta) return { title: "Not found" };
  return {
    title: `Lecture ${meta.id}: ${meta.title} | Flashcards`,
    description: meta.description,
  };
}

export default function LecturePage({ params }: Props) {
  const lectureId = Number(params.id);
  const meta = getLectureMeta(lectureId);
  const cards = getCards(lectureId);

  if (!meta || cards.length === 0) notFound();

  return <LectureClient cards={cards} meta={meta} />;
}
