'use client'

import Link from 'next/link'
import { Heart, Brain, Zap, TrendingUp, Users, Shield, Sparkles, ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-2xl gradient-text">
            🧠 MentalClear
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-neutral hover:text-primary transition">Features</a>
            <a href="#pricing" className="text-sm font-medium text-neutral hover:text-primary transition">Pricing</a>
            <Link href="/thinking" className="text-sm font-medium text-teal-700 hover:text-teal-800 transition flex items-center gap-1">
              💭 Our Thinking
            </Link>
            <Link href="/app" className="btn-primary">Essayer</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 text-sm font-semibold">
            ✨ Votre bien-être mental mérite mieux
          </div>
          
          <h1 className="text-7xl font-black mb-6 gradient-text leading-tight tracking-tight">
            Combattez le burnout<br />avec l'IA
          </h1>
          
          <p className="text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Un assistant IA qui comprend votre stress, offre des méditations personnalisées, et vous connecte à des experts quand vous en avez besoin.
          </p>

          <div className="flex gap-4 justify-center mb-16">
            <Link href="/app" className="btn-primary">
              Commencer gratuitement →
            </Link>
            <button className="btn-secondary">
              Voir la démo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">47%</div>
              <p className="text-sm text-gray-600">Des remote workers touchés par le burnout</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <p className="text-sm text-gray-600">Support IA personnalisé</p>
            </div>
            <div>
              <div className="text-4xl font-bold gradient-text mb-2">1M+</div>
              <p className="text-sm text-gray-600">Méditations générées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">
            Vos outils contre le burnout
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="card group hover-lift">
              <div className="mb-4 p-3 rounded-xl bg-teal-100 w-fit group-hover:bg-teal-200 transition-colors duration-300">
                <Brain className="w-6 h-6 text-teal-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-900">Check-in IA Quotidien</h3>
              <p className="text-gray-600 mb-4">1 minute pour évaluer votre stress. L'IA comprend les patterns et adapte ses recommandations en temps réel.</p>
              <div className="text-sm text-teal-700 font-semibold group-hover:translate-x-1 transition-transform">→ Insight émotionnel</div>
            </div>

            {/* Feature 2 */}
            <div className="card group hover-lift">
              <div className="mb-4 p-3 rounded-xl bg-emerald-100 w-fit group-hover:bg-emerald-200 transition-colors duration-300">
                <Sparkles className="w-6 h-6 text-emerald-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-900">Méditations Générées</h3>
              <p className="text-gray-600 mb-4">50+ méditations IA adaptées à vos besoins : stress managérial, sommeil, focus, parentalité.</p>
              <div className="text-sm text-emerald-700 font-semibold group-hover:translate-x-1 transition-transform">→ Détente en 3-5 min</div>
            </div>

            {/* Feature 3 */}
            <div className="card group hover-lift">
              <div className="mb-4 p-3 rounded-xl bg-amber-100 w-fit group-hover:bg-amber-200 transition-colors duration-300">
                <TrendingUp className="w-6 h-6 text-amber-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-900">Tableau de Bord Santé</h3>
              <p className="text-gray-600 mb-4">Visualisez votre bien-être sur 30 jours. Patterns d'IA, prédictions de burnout, conseils personnalisés.</p>
              <div className="text-sm text-amber-700 font-semibold group-hover:translate-x-1 transition-transform">→ Suivi en continu</div>
            </div>

            {/* Feature 4 */}
            <div className="card group hover-lift">
              <div className="mb-4 p-3 rounded-xl bg-rose-100 w-fit group-hover:bg-rose-200 transition-colors duration-300">
                <Heart className="w-6 h-6 text-rose-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-900">Wellness Score</h3>
              <p className="text-gray-600 mb-4">Score quotidien 1-10 basé sur stress, sommeil, focus. Améliorez votre baseline semaine après semaine.</p>
              <div className="text-sm text-rose-700 font-semibold group-hover:translate-x-1 transition-transform">→ Progression mesurable</div>
            </div>

            {/* Feature 5 */}
            <div className="card group hover-lift">
              <div className="mb-4 p-3 rounded-xl bg-orange-100 w-fit group-hover:bg-orange-200 transition-colors duration-300">
                <Users className="w-6 h-6 text-orange-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-900">Experts Référencés</h3>
              <p className="text-gray-600 mb-4">Psychologues, coachs certifiés, thérapeutes. Connectez-vous directement depuis l'app (France 🇫🇷).</p>
              <div className="text-sm text-orange-700 font-semibold group-hover:translate-x-1 transition-transform">→ Support pro 24/7</div>
            </div>

            {/* Feature 6 */}
            <div className="card group hover-lift">
              <div className="mb-4 p-3 rounded-xl bg-cyan-100 w-fit group-hover:bg-cyan-200 transition-colors duration-300">
                <Shield className="w-6 h-6 text-cyan-700" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-teal-900">RGPD & Sécurité</h3>
              <p className="text-gray-600 mb-4">Vos données sont cryptées, confidentielles. Aucune revente. Conforme CNIL français.</p>
              <div className="text-sm text-cyan-700 font-semibold group-hover:translate-x-1 transition-transform">→ Votre privacy d'abord</div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Témoignages Clients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Story 1 */}
            <div className="card border-l-4 border-indigo-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-600"></div>
                <div>
                  <p className="font-bold">Marie D.</p>
                  <p className="text-sm text-gray-500">Product Manager, Paris</p>
                </div>
              </div>
              <p className="text-gray-700">
                "MentalClear a changé ma relation au burnout. Les méditations IA sont incroyables et le check-in me rappelle de respirer tous les jours. Ça coûte 3x moins cher qu'une thérapeute."
              </p>
              <div className="flex gap-1 mt-4">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>

            {/* Story 2 */}
            <div className="card border-l-4 border-purple-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-400 to-pink-600"></div>
                <div>
                  <p className="font-bold">Thomas R.</p>
                  <p className="text-sm text-gray-500">Freelance Developer, Lyon</p>
                </div>
              </div>
              <p className="text-gray-700">
                "J'ai essayé 5 apps de bien-être. MentalClear est la seule qui comprend les défis du remote work. Le dashboard m'a permis de voir que mon stress monte en fin de sprint."
              </p>
              <div className="flex gap-1 mt-4">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>

            {/* Story 3 */}
            <div className="card border-l-4 border-pink-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-red-600"></div>
                <div>
                  <p className="font-bold">Sophie T.</p>
                  <p className="text-sm text-gray-500">Designer, Toulouse</p>
                </div>
              </div>
              <p className="text-gray-700">
                "L'IA recommande exactement ce dont j'ai besoin. Après 2 mois mon Wellness Score a augmenté de 35%. Mon manager a remarqué que je suis plus présente."
              </p>
              <div className="flex gap-1 mt-4">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>

            {/* Story 4 */}
            <div className="card border-l-4 border-blue-600">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600"></div>
                <div>
                  <p className="font-bold">Alex M.</p>
                  <p className="text-sm text-gray-500">Founder, Marseille</p>
                </div>
              </div>
              <p className="text-gray-700">
                "C'est la première app où je me sens vraiment écouté. Pas de jugement, juste du support. J'ai même convaincu mon équipe de la recommandation premium pour tous."
              </p>
              <div className="flex gap-1 mt-4">
                {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 gradient-text">
            Tarification Simple
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Commencez gratuitement. Upgrader quand vous êtes prêt.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Free Plan */}
            <div className="card">
              <h3 className="text-2xl font-bold mb-2">Gratuit</h3>
              <p className="text-gray-600 mb-6">Commencez dès maintenant</p>
              <div className="text-4xl font-bold mb-6">0€<span className="text-lg text-gray-600">/mois</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Check-ins illimités</li>
                <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> 5 méditations IA</li>
                <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Dashboard 7 jours</li>
                <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Wellness Score quotidien</li>
                <li className="flex items-center gap-2 text-gray-400"><span>✗</span> Chat IA 24/7</li>
                <li className="flex items-center gap-2 text-gray-400"><span>✗</span> Accès experts référencés</li>
              </ul>
              <button className="btn-secondary w-full">Commencer gratuitement</button>
            </div>

            {/* Premium Plan */}
            <div className="card ring-2 ring-indigo-600 transform md:scale-105">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                ⭐ RECOMMANDÉ
              </div>
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p className="text-gray-600 mb-6">Pour une santé mentale complète</p>
              <div className="text-4xl font-bold mb-6">11,99€<span className="text-lg text-gray-600">/mois</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Tout du plan gratuit +</li>
                <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> 50+ méditations IA</li>
                <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Dashboard complet 30 jours</li>
                <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Chat IA personnalisé 24/7</li>
                <li className="flex items-center gap-2"><span className="text-indigo-600">✓</span> Accès experts référencés</li>
              </ul>
              <button className="btn-primary w-full">Essayer Premium</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center gradient-primary rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-bold mb-4">
            Prêt à reprendre le contrôle?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Des milliers de remote workers français font confiance à MentalClear. Rejoignez la communauté.
          </p>
          <Link href="/app" className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Commencer gratuitement (30s) →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 text-center text-gray-600">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-2 font-bold text-xl mb-6 gradient-text">
            🧠 MentalClear
          </div>
          <p className="mb-4">Votre bien-être mental est notre priorité.</p>
          <div className="flex justify-center gap-6 mb-6 text-sm">
            <a href="#" className="hover:text-indigo-600 transition">Conditions</a>
            <a href="#" className="hover:text-indigo-600 transition">Confidentialité</a>
            <a href="#" className="hover:text-indigo-600 transition">Contact</a>
          </div>
          <p className="text-xs text-gray-500">© 2026 MentalClear. RGPD Compliant. Made in France 🇫🇷</p>
        </div>
      </footer>
    </div>
  )
}
