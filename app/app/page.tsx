'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts'
import { Brain, Home, Settings, LogOut, Send, AlertCircle, TrendingUp, MessageSquare, Calendar, Clock, CheckCircle } from 'lucide-react'

// Types
interface Meditation {
  id: number
  title: string
  duration: string
  category: string
  completed: boolean
}

interface Insight {
  type: 'warning' | 'success' | 'neutral'
  text: string
}

// Mock data
const wellnessData = [
  { date: '20 Feb', score: 6.2, stress: 7, sleep: 5, focus: 6 },
  { date: '21 Feb', score: 6.5, stress: 6.5, sleep: 6, focus: 6.5 },
  { date: '22 Feb', score: 7.1, stress: 5, sleep: 7, focus: 7.5 },
  { date: '23 Feb', score: 6.8, stress: 6, sleep: 6.5, focus: 7 },
  { date: '24 Feb', score: 7.4, stress: 4.5, sleep: 8, focus: 8 },
  { date: 'Aujourd\'hui', score: 7.6, stress: 4, sleep: 7.5, focus: 8 },
]

const meditations = [
  { id: 1, title: 'Respiration Anti-Stress', duration: '5 min', category: 'Stress', completed: true },
  { id: 2, title: 'Méditation Focus - Deep Work', duration: '8 min', category: 'Focus', completed: false },
  { id: 3, title: 'Sommeil Réparateur', duration: '12 min', category: 'Sommeil', completed: true },
  { id: 4, title: 'Parentalité Zen', duration: '6 min', category: 'Parentalité', completed: false },
  { id: 5, title: 'Gestion Réunions Stressantes', duration: '7 min', category: 'Pro', completed: false },
]

const insights = [
  { type: 'warning', text: 'Votre stress était élevé hier après-midi. Méditation recommandée.' },
  { type: 'success', text: 'Excellente semaine! Votre sleep score +18% vs semaine passée.' },
  { type: 'neutral', text: 'Pattern détecté: votre focus baisse le mardi. Try check-in Morning.' },
]

export default function Dashboard() {
  const [currentScreen, setCurrentScreen] = useState<string>('home')
  const [selectedMeditation, setSelectedMeditation] = useState<Meditation | null>(null)
  const [checkinAnswer, setCheckinAnswer] = useState<string>('')
  const [showCheckinModal, setShowCheckinModal] = useState<boolean>(false)
  const [checkinTime, setCheckinTime] = useState<string>('')
  const [showTimeSelection, setShowTimeSelection] = useState<boolean>(true)
  const [workSchedule, setWorkSchedule] = useState<string>('')
  const [showScheduleSelection, setShowScheduleSelection] = useState<boolean>(true)

  const TodayScore = () => (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-3xl p-8 mb-8 shadow-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-indigo-100 text-sm">Votre Wellness Score</p>
          <div className="text-6xl font-black">7.6</div>
          <p className="text-indigo-100 text-sm mt-2">↑ +0.2 depuis hier</p>
        </div>
        <TrendingUp className="w-12 h-12 text-indigo-200" />
      </div>
      <div className="bg-white/20 backdrop-blur rounded-2xl p-4">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="text-xs text-indigo-100">Stress</p>
            <p className="text-2xl font-bold">4/10</p>
          </div>
          <div>
            <p className="text-xs text-indigo-100">Sommeil</p>
            <p className="text-2xl font-bold">7.5/10</p>
          </div>
          <div>
            <p className="text-xs text-indigo-100">Focus</p>
            <p className="text-2xl font-bold">8/10</p>
          </div>
        </div>
      </div>
    </div>
  )

  const Navigation = () => (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-3 flex justify-around">
      <button onClick={() => setCurrentScreen('home')} className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition ${currentScreen === 'home' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'}`}>
        <Home className="w-5 h-5" />
        <span className="text-xs font-semibold">Accueil</span>
      </button>
      <button onClick={() => setCurrentScreen('meditations')} className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition ${currentScreen === 'meditations' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'}`}>
        <Brain className="w-5 h-5" />
        <span className="text-xs font-semibold">Méditations</span>
      </button>
      <button onClick={() => setCurrentScreen('chat')} className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition ${currentScreen === 'chat' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'}`}>
        <MessageSquare className="w-5 h-5" />
        <span className="text-xs font-semibold">Chat IA</span>
      </button>
      <button onClick={() => setCurrentScreen('settings')} className={`flex flex-col items-center gap-1 py-2 px-4 rounded-lg transition ${currentScreen === 'settings' ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600'}`}>
        <Settings className="w-5 h-5" />
        <span className="text-xs font-semibold">Paramètres</span>
      </button>
    </nav>
  )

  const HomeScreen = () => (
    <div>
      <TodayScore />

      {/* Check-in CTA */}
      <div className="card mb-6 cursor-pointer hover:shadow-lg transition-all" onClick={() => setShowCheckinModal(true)}>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-lg mb-1">Check-in Quotidien</p>
            <p className="text-sm text-gray-600">Comment allez-vous aujourd'hui?</p>
          </div>
          <Calendar className="w-6 h-6 text-indigo-600" />
        </div>
      </div>

      {/* Chart */}
      <div className="card mb-6">
        <h3 className="font-bold text-lg mb-4">Votre Évolution (30j)</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={wellnessData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" />
            <XAxis dataKey="date" stroke="#9ca3af" />
            <YAxis stroke="#9ca3af" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#f8f9ff', border: '1px solid #e0e7ff', borderRadius: '8px' }}
              cursor={{ stroke: '#6366f1', strokeWidth: 2 }}
            />
            <Line type="monotone" dataKey="score" stroke="#6366f1" strokeWidth={3} dot={{ fill: '#6366f1', r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Insights */}
      <div className="card">
        <h3 className="font-bold text-lg mb-4">🤖 Insights IA</h3>
        <div className="space-y-3">
          {insights.map((insight, i) => (
            <div key={i} className={`p-4 rounded-lg flex gap-3 ${
              insight.type === 'warning' ? 'bg-yellow-50 border-l-4 border-yellow-400' : 
              insight.type === 'success' ? 'bg-green-50 border-l-4 border-green-400' :
              'bg-blue-50 border-l-4 border-blue-400'
            }`} role="status" aria-label={`${insight.type} insight`}>
              <span className="text-xl" aria-hidden="true">
                {insight.type === 'warning' ? '⚠️' : insight.type === 'success' ? '✨' : 'ℹ️'}
              </span>
              <p className="text-base text-gray-700">{insight.text}</p>
            </div>
          ))}
          {workSchedule && (
            <div className="p-4 rounded-lg flex gap-3 bg-purple-50 border-l-4 border-purple-400">
              <span className="text-xl" aria-hidden="true">💡</span>
              <p className="text-base text-gray-700">
                {workSchedule === 'erratic' ? 
                  'Votre horaire est irrégulier. Essayez 3 check-ins/semaine au lieu de quotidien.' :
                  workSchedule === 'flexible' ?
                  'Check-in flexible. Vous pouvez adapter votre heure quotidienne si besoin.' :
                  'Horaire fixe confirmé. Rappels à 9h chaque matin.' }
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )

  const MeditationsScreen = () => (
    <div>
      <h2 className="text-2xl font-bold mb-6">Méditations Disponibles</h2>
      
      <div className="space-y-3">
        {meditations.map((med) => (
          <div key={med.id} className="card cursor-pointer hover:shadow-lg transition-all" onClick={() => setSelectedMeditation(med)}>
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  {med.completed && <CheckCircle className="w-4 h-4 text-green-500" />}
                  <p className="font-bold">{med.title}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">{med.category}</span>
                  <span className="text-xs text-gray-600 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {med.duration}
                  </span>
                </div>
              </div>
              <span className="text-2xl">▶️</span>
            </div>
          </div>
        ))}
      </div>

      {selectedMeditation && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">🧘</div>
              <h3 className="text-2xl font-bold mb-2">{selectedMeditation.title}</h3>
              <p className="text-gray-600">{selectedMeditation.duration}</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-2xl p-4 text-center mb-6">
              <p className="text-sm opacity-90">Méditation en cours de lecture...</p>
              <div className="mt-3 w-full bg-white/30 rounded-full h-2">
                <div className="bg-white h-2 rounded-full w-1/3 animate-pulse"></div>
              </div>
              <p className="text-xs mt-2">2:15 / 5:00</p>
            </div>
            <button className="btn-primary w-full" onClick={() => setSelectedMeditation(null)}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  )

  const ChatScreen = () => (
    <div className="flex flex-col h-full">
      <div className="flex-1 space-y-4 mb-4">
        <div className="bg-indigo-50 rounded-2xl p-4 max-w-xs">
          <p className="text-sm">Bonjour! 👋 Comment je peux vous aider aujourd'hui?</p>
          <p className="text-xs text-gray-500 mt-2">14:32</p>
        </div>
        <div className="flex justify-end">
          <div className="bg-indigo-600 text-white rounded-2xl p-4 max-w-xs">
            <p className="text-sm">Je me sens stressée par ma réunion de demain</p>
            <p className="text-xs opacity-75 mt-2">14:33</p>
          </div>
        </div>
        <div className="bg-indigo-50 rounded-2xl p-4 max-w-xs">
          <p className="text-sm">Je comprends. C'est normal d'avoir des appréhensions. Je vous recommande:</p>
          <ul className="text-sm mt-2 space-y-1">
            <li>• Méditation "Gestion Réunions" (7 min) avant</li>
            <li>• Technique de respiration 4-7-8</li>
            <li>• Préparation claire de vos 3 points clés</li>
          </ul>
          <p className="text-xs text-gray-500 mt-2">14:34</p>
        </div>
      </div>
      <div className="flex gap-2">
        <input 
          type="text" 
          placeholder="Votre message..." 
          value={checkinAnswer}
          onChange={(e) => setCheckinAnswer(e.target.value)}
          className="flex-1 px-4 py-3 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        />
        <button className="bg-indigo-600 text-white p-3 rounded-2xl hover:bg-indigo-700 transition">
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  )

  const SettingsScreen = () => (
    <div>
      <h2 className="text-2xl font-bold mb-6">Paramètres</h2>
      
      <div className="space-y-3">
        <div className="card">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Notifications</p>
              <p className="text-sm text-gray-600">Check-in à 10h, méditations suggérées</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 rounded accent-indigo-600" />
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Mode Sombre</p>
              <p className="text-sm text-gray-600">Réduire la fatigue oculaire</p>
            </div>
            <input type="checkbox" className="w-5 h-5 rounded accent-indigo-600" />
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold">Partage de Données</p>
              <p className="text-sm text-gray-600">Anonymisées pour améliorer l'IA</p>
            </div>
            <input type="checkbox" defaultChecked className="w-5 h-5 rounded accent-indigo-600" />
          </div>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        <button className="btn-secondary w-full">
          📄 Conditions & Confidentialité
        </button>
        <button className="btn-secondary w-full">
          💬 Support & Feedback
        </button>
        <Link href="/" className="block w-full">
          <button className="btn-secondary w-full">
            ← Retour à l'accueil
          </button>
        </Link>
      </div>
    </div>
  )

  // Check-in Modal
  const CheckinModal = () => {
    if (!showCheckinModal) return null
    
    // Step 0: Work schedule selection (first time only)
    if (showScheduleSelection && !workSchedule) {
      return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full">
            <div className="mb-6">
              <p className="text-xs text-gray-600 text-center mb-2 font-semibold">ÉTAPE 1/6</p>
              <h3 className="text-2xl font-bold text-center">Quel est votre horaire de travail?</h3>
              <p className="text-sm text-gray-600 text-center mt-2 text-base">Cela nous aide à personnaliser vos rappels</p>
            </div>
            
            <div className="space-y-2 mb-6">
              {[
                { type: 'fixed', emoji: '🕘', label: 'Fixe (9h-17h)', desc: 'Horaires réguliers' },
                { type: 'flexible', emoji: '🎯', label: 'Flexible', desc: 'Variable mais prévisible' },
                { type: 'erratic', emoji: '🔄', label: 'Irrégulier', desc: 'Très variable' },
              ].map((opt) => (
                <button
                  key={opt.type}
                  onClick={() => {
                    setWorkSchedule(opt.type)
                    setShowScheduleSelection(false)
                  }}
                  className={`w-full p-4 rounded-xl border-2 transition text-left ${
                    workSchedule === opt.type
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{opt.emoji}</span>
                    <div>
                      <p className="font-semibold text-base">{opt.label}</p>
                      <p className="text-xs text-gray-600">{opt.desc}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowScheduleSelection(false)}
              className="btn-primary w-full"
            >
              Continuer →
            </button>
          </div>
        </div>
      )
    }
    
    // Step 1: Choose check-in time (first time only) - SMART DEFAULT VERSION
    if (showTimeSelection && !checkinTime) {
      return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full">
            <div className="mb-6">
              <p className="text-sm text-gray-600 text-center mb-2 font-semibold">ÉTAPE 2/6</p>
              <h3 className="text-2xl font-bold text-center">À quelle heure votre check-in?</h3>
              <p className="text-base text-gray-600 text-center mt-2">Nous vous rappellerons quotidiennement</p>
            </div>
            
            <div className="space-y-2 mb-6">
              {[
                { time: '09:00', emoji: '🌅', label: '9h - Matin', recommended: true },
                { time: '12:00', emoji: '🍽️', label: '12h - Midi', recommended: false },
                { time: '18:00', emoji: '🌙', label: '18h - Fin de journée', recommended: false },
              ].map((opt) => (
                <div key={opt.time} className="relative">
                  {opt.recommended && (
                    <div className="absolute -top-2 right-4 bg-indigo-600 text-white text-xs px-2.5 py-0.5 rounded-full font-semibold z-10">
                      ⭐ Recommandé
                    </div>
                  )}
                  <button
                    key={opt.time}
                    onClick={() => setCheckinTime(opt.time)}
                    className={`w-full p-4 rounded-xl border-2 transition text-left font-medium ${
                      checkinTime === opt.time
                        ? 'border-indigo-600 bg-indigo-50 text-indigo-900'
                        : opt.recommended ? 'border-indigo-300 bg-indigo-50 hover:border-indigo-600' : 'border-gray-200 hover:border-indigo-300'
                    }`}
                    aria-label={`Sélectionner ${opt.label}`}
                  >
                    <span className="text-2xl mr-3" aria-hidden="true">{opt.emoji}</span>
                    <span className="text-base">{opt.label}</span>
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setCheckinTime('09:00')
                setShowTimeSelection(false)
              }}
              className="btn-primary w-full mb-2"
            >
              Continuer →
            </button>
            
            <button
              onClick={() => setShowTimeSelection(false)}
              className="w-full text-sm text-gray-600 hover:text-gray-900 transition py-2"
            >
              Je vais changer après
            </button>
          </div>
        </div>
      )
    }

    // Step 3: Check-in emotion
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full">
          <div className="mb-6">
            <p className="text-sm text-gray-600 text-center mb-2 font-semibold">ÉTAPE 3/6 · {checkinTime}</p>
            <h3 className="text-2xl font-bold text-center">Comment allez-vous aujourd'hui?</h3>
          </div>
          
          <div className="space-y-3 mb-6">
            {[
              { emoji: '😔', label: 'Très stressé', value: 2 },
              { emoji: '😟', label: 'Un peu stressé', value: 4 },
              { emoji: '😐', label: 'Neutre', value: 6 },
              { emoji: '😊', label: 'Bien', value: 8 },
              { emoji: '😄', label: 'Excellent', value: 10 },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setCheckinAnswer(option.value.toString())}
                className={`w-full p-4 rounded-xl border-2 transition text-left ${
                  checkinAnswer === option.value.toString()
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
                aria-label={`Je me sens ${option.label}`}
                aria-pressed={checkinAnswer === option.value.toString()}
              >
                <span className="text-4xl mr-3" aria-hidden="true">{option.emoji}</span>
                <span className="font-semibold text-base">{option.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              setShowCheckinModal(false)
              setCheckinAnswer('')
              setShowTimeSelection(true)
              setShowScheduleSelection(true)
              setCheckinTime('')
              setWorkSchedule('')
            }}
            disabled={!checkinAnswer}
            className={`btn-primary w-full ${!checkinAnswer ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Envoyer Check-in
          </button>
          
          <button
            onClick={() => setShowTimeSelection(true)}
            className="w-full mt-2 text-sm text-gray-600 hover:text-indigo-600 transition"
          >
            ← Retour
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 p-6 sticky top-0 z-40">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg gradient-text">
            🧠 MentalClear
          </div>
          <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
            <LogOut className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md mx-auto px-4 py-6">
        {currentScreen === 'home' && <HomeScreen />}
        {currentScreen === 'meditations' && <MeditationsScreen />}
        {currentScreen === 'chat' && <ChatScreen />}
        {currentScreen === 'settings' && <SettingsScreen />}
      </div>

      <Navigation />
      <CheckinModal />
    </div>
  )
}
