import "./globals.css";
import type { Metadata } from "next";
import { TriviaProvider } from "@/context/TriviaContext";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Trivia App",
  description: "Aplicacion de Trivia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <TriviaProvider>
          <Header />
          <main className="p-6">{children}</main>
        </TriviaProvider>
      </body>
    </html>
  );
}