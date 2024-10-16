import type { Metadata } from "next";
import "./globals.css";
import {Montserrat} from 'next/font/google'

const font = Montserrat({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Cesta Solidária - Alimentando Vidas",
  description: "Cadastre-se para receber cestas básicas e fique por dentro das datas e locais de retirada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={font.className}>{children}
      </body>
    </html>
  );
}
