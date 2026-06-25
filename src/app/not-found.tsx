import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4">
      <p className="text-6xl">🔍</p>
      <h1 className="text-2xl font-bold text-white">Lecture not found</h1>
      <p className="text-white/40 text-sm text-center">
        This lecture doesn&apos;t exist yet. Check back when more slides are added.
      </p>
      <Link
        href="/"
        className="mt-4 px-6 py-2.5 rounded-xl text-sm font-medium text-white
          transition-all hover:opacity-90"
        style={{ background: "linear-gradient(135deg,#7c3aed,#06b6d4)" }}
      >
        ← Back to all lectures
      </Link>
    </div>
  );
}
