import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";

const fonteBase = Geist({
  variable: "--font-corpo",
  subsets: ["latin"],
});

const fonteTitulos = Space_Grotesk({
  variable: "--font-titulos",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
      <body className={`${fonteBase.variable} ${fonteTitulos.variable}`}>
        {children}
      </body>
    </html>
  );
}
