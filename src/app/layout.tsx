import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const fonteBase = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TalentFlow | Rede do Futuro",
  description:
    "Prototipo inicial da rede profissional colaborativa pensada para a Global Solution.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={fonteBase.variable}>{children}</body>
    </html>
  );
}
