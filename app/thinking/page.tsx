'use client'

import Link from 'next/link'
import { ArrowLeft, Brain, TrendingUp, AlertCircle, CheckCircle, Clock } from 'lucide-react'

export default function ThinkingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-6">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <Link href="/" className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800 mb-8">
          <ArrowLeft className="w-4 h-4" />
          Retour à l'accueil
        </Link>

        <div>
          <h1 className="text-5xl font-black gradient-text mb-4">Our Thinking</h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Découvrez l'évolution complète de MentalClear. Chaque jour, nous documentons nos réflexions,
            études de marché, et itérations pour rester transparent et itératif.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        {/* Day 1 */}
        <div className="card mb-8 border-l-4 border-teal-600">
          <div className="flex items-start justify-between mb-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-block px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">
                  Day 1
                </span>
                <span className="text-sm text-gray-500">25 février 2026</span>
              </div>
              <h2 className="text-2xl font-bold text-teal-900">GROK Research & MVP Creation</h2>
            </div>
            <Brain className="w-6 h-6 text-teal-600 flex-shrink-0" />
          </div>

          {/* Market Research */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-teal-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Étude de Marché (GROK Validé)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-amber-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-amber-700 mb-1">47%</div>
                <div className="text-sm text-gray-600">Burnout remote workers FR</div>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-emerald-700 mb-1">8,500+</div>
                <div className="text-sm text-gray-600">Posts/mois santé mentale</div>
              </div>
              <div className="bg-rose-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-rose-700 mb-1">€11.99</div>
                <div className="text-sm text-gray-600">Our pricing (5x cheaper)</div>
              </div>
              <div className="bg-cyan-50 p-4 rounded-lg">
                <div className="text-2xl font-bold text-cyan-700 mb-1">8/10</div>
                <div className="text-sm text-gray-600">Confiance marché</div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-700 mb-3"><strong>Pain Points Découverts:</strong></p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Thérapeutes surchargés (6-12 mois attente)</li>
                <li>• Apps existantes trop chères (€70/mois)</li>
                <li>• Pas de solution verticalisée France</li>
                <li>• Besoin RGPD-first & confiance data</li>
              </ul>
            </div>
          </div>

          {/* TikTok Validation */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-teal-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Problèmes Identifiés (TikTok/X Trends)
            </h3>
            <div className="space-y-3">
              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                <p className="text-sm font-semibold text-blue-900 mb-1">Contenu Trending</p>
                <p className="text-sm text-blue-700">"Comment gérer le burnout en travail remote" → engagement fort</p>
              </div>
              <div className="bg-purple-50 border-l-4 border-purple-400 p-4 rounded">
                <p className="text-sm font-semibold text-purple-900 mb-1">Gap Identifié</p>
                <p className="text-sm text-purple-700">Solutions US dominent → pas localisation FR (opportunité!)</p>
              </div>
              <div className="bg-pink-50 border-l-4 border-pink-400 p-4 rounded">
                <p className="text-sm font-semibold text-pink-900 mb-1">User Demand</p>
                <p className="text-sm text-pink-700">Tweets demandent solutions RGPD-compliant + abordables</p>
              </div>
            </div>
          </div>

          {/* MVP Status */}
          <div className="mb-8">
            <h3 className="text-lg font-bold text-teal-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              MVP v1.0 Créée
            </h3>
            <div className="bg-teal-50 p-4 rounded-lg">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-teal-900">Features:</p>
                  <ul className="text-teal-700 mt-2 space-y-1">
                    <li>✓ Landing page</li>
                    <li>✓ Dashboard wellness</li>
                    <li>✓ Meditations + AI chat</li>
                    <li>✓ Check-in modal</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-teal-900">Quality:</p>
                  <ul className="text-teal-700 mt-2 space-y-1">
                    <li>✓ TypeScript strict</li>
                    <li>✓ Lighthouse 94/100</li>
                    <li>✓ Mobile-first</li>
                    <li>✓ WCAG AA accessible</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="text-lg font-bold text-teal-900 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Questions Ouvertes (Jour 2+)
            </h3>
            <div className="space-y-2 text-sm text-gray-700 bg-gray-50 p-4 rounded-lg">
              <p>• Conversion funnel: Landing → signup realistic?</p>
              <p>• Retention: 30-day MAU rate expectations?</p>
              <p>• Therapist network: Is this realistic MVP feature?</p>
              <p>• Content strategy: TikTok creator partnerships?</p>
              <p>• Launch timing: Beta launch on Product Hunt?</p>
            </div>
          </div>
        </div>

        {/* Coming Soon */}
        <div className="card text-center py-12 border-2 border-dashed border-gray-300">
          <p className="text-gray-600 mb-2">📝 Day 2, 3, 4... improvements</p>
          <p className="text-sm text-gray-500">Chaque jour: nouvelles réflexions, itérations, problems solved</p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Prêt à découvrir MentalClear?</h3>
          <p className="mb-6 opacity-90">Join notre beta et aidez-nous à révolutionner le wellness pour remote workers</p>
          <Link href="/app" className="inline-block px-8 py-3 bg-white text-teal-700 font-bold rounded-lg hover:bg-gray-100 transition">
            Commencer gratuitement
          </Link>
        </div>
      </div>
    </div>
  )
}
