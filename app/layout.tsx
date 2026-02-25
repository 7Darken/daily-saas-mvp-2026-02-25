import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SoignAide - Coordination pour Aidants",
  description: "Coordonnez facilement les soins de vos proches",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 font-sans">
        {children}
      </body>
    </html>
  );
}
