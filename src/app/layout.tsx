import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Crievo - Da Criação à Evolução Digital",
  description: "Agência de desenvolvimento digital especializada em criar experiências únicas.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
