'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, Download, Star, Users, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  const [currentStat, setCurrentStat] = useState(0)

  const stats = [
    { icon: Users, value: '500+', label: 'Clients Accompagnés' },
    { icon: TrendingUp, value: '12 000€', label: 'Économies Moyennes' },
    { icon: Star, value: '95%', label: 'Taux de Réussite' },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#1f4e79] via-[#2a5a8a] to-[#2e8b57]">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
      </div>

      {/* Contenu Principal */}
      <div className="relative z-10 container-max section-padding text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8"
          >
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-medium">Expert en Financement Immobilier</span>
          </motion.div>

          {/* Titre Principal */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-center"
          >
            <span className="text-gradient bg-gradient-to-r from-yellow-400 to-green-400 bg-clip-text text-transparent">
              Votre Prêt Immobilier, Simplifié et Optimisé
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed text-center"
          >
            Devenez propriétaire sans stress grâce à un accompagnement d'expert.
          </motion.p>

          {/* Boutons d'Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Link 
              href="https://calendly.com/contact-coachlacledupret" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
              Réserver une consultation
            </Link>
            <Link 
              href="#lead-magnet" 
              className="bg-white hover:bg-gray-50 text-[#1f4e79] px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 min-h-[44px] group flex items-center justify-center"
            >
              <Download className="w-5 h-5 mr-2 text-[#1f4e79]" />
              Télécharger mon Guide Gratuit
            </Link>
          </motion.div>

          {/* Statistiques Animées */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.2, duration: 0.6 }}
                  className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 ${
                    currentStat === index ? 'bg-white/20 scale-105' : ''
                  }`}
                >
                  <Icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-blue-100 text-sm">{stat.label}</div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
