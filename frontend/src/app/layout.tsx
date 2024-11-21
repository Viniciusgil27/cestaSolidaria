import type { Metadata } from "next";
import "./globals.css";
import { Montserrat } from "next/font/google";

// Configuração da fonte Montserrat
const montserratFont = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // Adicionando uma variável CSS para facilitar o uso da fonte
});

export const metadata: Metadata = {
  title: "Cesta Solidária - Alimentando Vidas",
  description:
    "Cadastre-se para receber cestas básicas e fique por dentro das datas e locais de retirada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={montserratFont.variable}>
      <body className="bg-gray-50 text-gray-800 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
