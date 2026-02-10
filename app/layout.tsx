import "./globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Typing Calm — тренажёр печати",
  description: "Спокойный тренажёр печати и антистресс-пространство."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
