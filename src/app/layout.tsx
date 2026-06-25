import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exam Flashcard Portal | SER",
  description:
    "Practice likely exam questions lecture by lecture for Software Engineering for Robotics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="relative min-h-screen antialiased">
        {/* Background glow orbs */}
        <div
          className="glow-orb w-[600px] h-[600px] top-[-200px] left-[-200px] opacity-20"
          style={{ background: "radial-gradient(circle, #7c3aed, transparent)" }}
        />
        <div
          className="glow-orb w-[500px] h-[500px] bottom-[-150px] right-[-150px] opacity-15"
          style={{ background: "radial-gradient(circle, #0ea5e9, transparent)" }}
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
