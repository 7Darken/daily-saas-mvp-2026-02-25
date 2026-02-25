"use client";

import { useState } from "react";
import {
  Heart,
  Users,
  Calendar,
  FileText,
  MessageSquare,
  Pill,
  ArrowRight,
  Check,
  Star,
  LogOut,
} from "lucide-react";

export default function Home() {
  const [currentView, setCurrentView] = useState<"landing" | "app">("landing");
  const [selectedRecipient, setSelectedRecipient] = useState<string | null>(
    "marie"
  );
  const [showNewTask, setShowNewTask] = useState(false);

  // Mock data
  const recipients = [
    {
      id: "marie",
      name: "Marie (Mère)",
      condition: "Arthrite",
      age: 74,
      avatar: "👵",
    },
    { id: "jean", name: "Jean (Père)", condition: "Diabète", age: 78, avatar: "👴" },
  ];

  const tasks = [
    {
      id: 1,
      title: "Rendez-vous cardiologue",
      date: "Demain, 14h00",
      recipient: "marie",
      status: "pending",
      assigned_to: "You",
    },
    {
      id: 2,
      title: "Renouvellement ordonnance Dr Dubois",
      date: "Mercredi",
      recipient: "marie",
      status: "pending",
      assigned_to: "Sophie (sœur)",
    },
    {
      id: 3,
      title: "Courses semaine",
      date: "Samedi 10h",
      recipient: "marie",
      status: "completed",
      assigned_to: "You",
    },
    {
      id: 4,
      title: "Prise de médicaments (Metformine)",
      date: "Tous les jours 8h & 20h",
      recipient: "marie",
      status: "pending",
      assigned_to: "Marie",
    },
  ];

  const documents = [
    { id: 1, name: "Ordonnances 2025", date: "15 Feb 2025", type: "PDF" },
    { id: 2, name: "Résultats analyses sang", date: "10 Feb 2025", type: "PDF" },
    { id: 3, name: "Carnet de suivi santé", date: "01 Feb 2025", type: "DOC" },
  ];

  const insights = [
    { label: "Tâches complétées", value: "87%", icon: "✓" },
    { label: "Jours sans oublis", value: "12", icon: "📅" },
    { label: "Famille coordonnée", value: "4", icon: "👥" },
  ];

  const pricing = [
    {
      tier: "Gratuit",
      price: "0€",
      features: ["1 proche aidé", "Tâches basiques", "Chat famille"],
      cta: "Commencer",
    },
    {
      tier: "Pro",
      price: "9,99€/mois",
      features: [
        "Proches illimités",
        "Suivi médical avancé",
        "AI reminders",
        "Export documents",
        "Support prioritaire",
      ],
      cta: "Essayer",
      highlight: true,
    },
    {
      tier: "Famille+",
      price: "19,99€/mois",
      features: [
        "Tout du Pro",
        "Coordonnateurs pros",
        "Intégration médecins",
        "Analytics famille",
      ],
      cta: "Contacter",
    },
  ];

  if (currentView === "landing") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        {/* Nav */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-40">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 text-2xl font-bold text-indigo-600">
              <Heart className="w-8 h-8" />
              SoignAide
            </div>
            <button
              onClick={() => setCurrentView("app")}
              className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Demo App
            </button>
          </div>
        </nav>

        {/* Hero */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-6 inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Pour les 9M aidants familiaux en France
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Coordonnez les soins de vos proches sans stress
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              SoignAide centralise rendez-vous, médicaments, documents et
              notifications pour vous et votre famille. Moins de charge mentale,
              plus de sérénité.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button
                onClick={() => setCurrentView("app")}
                className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition flex items-center gap-2"
              >
                Essayer Gratuitement <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition">
                En Savoir Plus
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16">
              <div>
                <div className="text-4xl font-bold text-indigo-600">9M+</div>
                <p className="text-gray-600">Aidants en France</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600">92B€</div>
                <p className="text-gray-600">Coût pour l'économie</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-600">50%</div>
                <p className="text-gray-600">Souffrent de burnout</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 px-6 bg-white/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Tout ce qu'il faut pour coordonner
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <Calendar className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Calendrier Unifié</h3>
                <p className="text-gray-600">
                  Tous les rendez-vous, médicaments et tâches au même endroit
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <Users className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Famille Connectée</h3>
                <p className="text-gray-600">
                  Invitez famille et professionnels, déléguer sans vous perdre
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <FileText className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Documents Centralisés</h3>
                <p className="text-gray-600">
                  Ordonnances, résultats, dossiers - toujours à portée de main
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <Pill className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Suivi Médical</h3>
                <p className="text-gray-600">
                  Rappels intelligents, historique des traitements, alertes
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Trusted by Family Caregivers
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: "Sophie M.",
                  role: "Aidante, Paris",
                  text: "J'ai arrêté de jongler entre calendriers, SMS et appels. SoignAide m'a redonné 10 heures par mois.",
                },
                {
                  name: "Marc D.",
                  role: "Fils aidant, Lyon",
                  text: "Enfin je ne suis plus le seul à gérer. Ma sœur peut voir et contribuer - c'est transformateur.",
                },
              ].map((t, i) => (
                <div key={i} className="bg-white p-6 rounded-lg border border-gray-200">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4">"{t.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-gray-600">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-6 bg-gradient-to-b from-blue-50 to-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Tarification simple
            </h2>
            <p className="text-center text-gray-600 mb-16">
              Pour chaque type d'aidant, du solo au professionnel
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {pricing.map((plan, i) => (
                <div
                  key={i}
                  className={`rounded-xl p-8 border-2 ${
                    plan.highlight
                      ? "border-indigo-600 bg-indigo-50 shadow-lg scale-105"
                      : "border-gray-200 bg-white"
                  }`}
                >
                  <h3 className="text-2xl font-bold mb-2">{plan.tier}</h3>
                  <div className="text-4xl font-bold text-indigo-600 mb-6">
                    {plan.price}
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-green-600" />
                        <span className="text-gray-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-lg font-semibold transition ${
                      plan.highlight
                        ? "bg-indigo-600 text-white hover:bg-indigo-700"
                        : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 text-center bg-gradient-to-r from-indigo-600 to-blue-600 text-white">
          <h2 className="text-4xl font-bold mb-4">Prêt à simplifier ?</h2>
          <p className="text-xl mb-8 opacity-90">
            Commencez gratuitement, pas de carte bancaire nécessaire
          </p>
          <button
            onClick={() => setCurrentView("app")}
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition"
          >
            Essayer Now →
          </button>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-400 py-8 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <p>© 2025 SoignAide - Coordinating Care, Simplifying Lives</p>
          </div>
        </footer>
      </div>
    );
  }

  // APP VIEW
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Heart className="w-8 h-8 text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-900">SoignAide</h1>
          </div>
          <button
            onClick={() => setCurrentView("landing")}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <LogOut className="w-5 h-5" />
            Demo Mode
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-24">
              <h2 className="font-bold text-gray-900 mb-4">Mes Proches</h2>
              <div className="space-y-2">
                {recipients.map((r) => (
                  <button
                    key={r.id}
                    onClick={() => setSelectedRecipient(r.id)}
                    className={`w-full text-left p-3 rounded-lg transition ${
                      selectedRecipient === r.id
                        ? "bg-indigo-100 border-2 border-indigo-500"
                        : "bg-gray-50 border-2 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    <div className="text-2xl mb-1">{r.avatar}</div>
                    <div className="font-semibold text-sm text-gray-900">
                      {r.name.split("(")[0].trim()}
                    </div>
                    <div className="text-xs text-gray-600">{r.condition}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              {insights.map((insight, i) => (
                <div key={i} className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="text-2xl mb-2">{insight.icon}</div>
                  <div className="text-2xl font-bold text-indigo-600">
                    {insight.value}
                  </div>
                  <p className="text-xs text-gray-600">{insight.label}</p>
                </div>
              ))}
            </div>

            {/* Tasks Section */}
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-2xl font-bold">Tâches & Rappels</h2>
                </div>
                <button
                  onClick={() => setShowNewTask(!showNewTask)}
                  className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition text-sm"
                >
                  + Nouvelle tâche
                </button>
              </div>

              {showNewTask && (
                <div className="bg-gray-50 p-4 rounded-lg mb-6 border-2 border-indigo-200">
                  <input
                    type="text"
                    placeholder="Nom de la tâche..."
                    className="w-full p-2 border border-gray-300 rounded-lg mb-3"
                  />
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <input
                      type="date"
                      className="p-2 border border-gray-300 rounded-lg"
                    />
                    <select className="p-2 border border-gray-300 rounded-lg">
                      <option>Assigner à moi</option>
                      <option>Assigner à un tiers</option>
                    </select>
                  </div>
                  <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                    Ajouter
                  </button>
                </div>
              )}

              <div className="space-y-3">
                {tasks
                  .filter((t) => t.recipient === selectedRecipient)
                  .map((task) => (
                    <div
                      key={task.id}
                      className={`p-4 rounded-lg border-2 flex items-center justify-between ${
                        task.status === "completed"
                          ? "bg-green-50 border-green-200 opacity-60"
                          : "bg-white border-gray-200 hover:border-indigo-300"
                      }`}
                    >
                      <div className="flex-1">
                        <h3
                          className={`font-semibold ${
                            task.status === "completed"
                              ? "line-through text-gray-500"
                              : "text-gray-900"
                          }`}
                        >
                          {task.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {task.date} • {task.assigned_to}
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={task.status === "completed"}
                        onChange={() => {}}
                        className="w-6 h-6 cursor-pointer"
                      />
                    </div>
                  ))}
              </div>
            </div>

            {/* Documents & Communication */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Documents */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <FileText className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-xl font-bold">Documents</h2>
                </div>
                <div className="space-y-3">
                  {documents.map((doc) => (
                    <div
                      key={doc.id}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer"
                    >
                      <div>
                        <p className="font-semibold text-gray-900">
                          {doc.name}
                        </p>
                        <p className="text-xs text-gray-600">{doc.date}</p>
                      </div>
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded">
                        {doc.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chat Preview */}
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <div className="flex items-center gap-2 mb-6">
                  <MessageSquare className="w-6 h-6 text-indigo-600" />
                  <h2 className="text-xl font-bold">Famille</h2>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg h-48 flex flex-col justify-between">
                  <div className="space-y-3 text-sm">
                    <div className="text-left">
                      <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs">
                        You
                      </span>
                      <p className="text-gray-700 mt-1">
                        Maman a pris ses médicaments ✓
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="bg-gray-300 text-gray-900 px-3 py-1 rounded-full text-xs">
                        Sophie
                      </span>
                      <p className="text-gray-700 mt-1">
                        Super! À demain pour le RDV
                      </p>
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Envoyer un message..."
                    className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
