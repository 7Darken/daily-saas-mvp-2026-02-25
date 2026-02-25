import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MentalClear - AI Wellness For Remote Workers',
  description: 'Gérez votre burnout avec un assistant IA. Suivi santé mentale, méditations personnalisées, alertes pros directes.',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="75" font-size="75" fill="%236366f1">🧠</text></svg>',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="bg-gradient-to-br from-slate-50 to-slate-100">
        {children}
      </body>
    </html>
  )
}
