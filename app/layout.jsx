import "./globals.css";

export const metadata = {
  title: "Портфолио • Разработка приложений",
  description:
    "Простой сайт-портфолио: продаю разработку мобильных и веб-приложений.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
