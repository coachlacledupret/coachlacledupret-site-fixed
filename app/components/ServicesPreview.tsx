
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Search, FileText, Users, ArrowRight, CheckCircle, Euro, Clock, Star, Target } from 'lucide-react'

const ServicesPreview = () => {
  const forfaits = [
    {
      icon: Search,
      title: 'Diagnostic & Clarté',
      subtitle: 'Pour comprendre et optimiser',
      price: '100€',
      duration: '1h visio',
      description: 'Vision claire de votre situation financière et stratégie personnalisée.',
      features: [
        'Analyse complète profil emprunteur',
        'Évaluation capacité d\'emprunt',
        'Plan d\'action détaillé',
        'Recommandations bancaires ciblées',
      ],
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: FileText,
      title: 'Dossier Solide & Stratégie Gagnante',
      subtitle: 'Pour maximiser vos chances',
      price: '290€',
      duration: '3h visio + suivi email',
      description: 'Dossier optimisé et techniques de négociation pour les meilleures conditions.',
      features: [
        'Dossier emprunteur optimisé',
        'Scripts de négociation personnalisés',
        'Préparation entretiens bancaires',
        'Suivi email 2 mois',
      ],
      popular: true,
      color: 'from-green-500 to-green-600'
    },
  ]

  const stats = [
    { value: '500+', label: 'Clients Accompagnés' },
    { value: '12 000€', label: 'Économies Moyennes' },
    { value: '95%', label: 'Taux de Réussite' },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl lg:text-4xl font-bold text-[#1f4e79] mb-4 lg:mb-6"
          >
            Nos Forfaits de Coaching
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-[#6e7b8b] leading-relaxed"
          >
            2 forfaits adaptés à vos besoins pour optimiser votre financement immobilier, 
            du diagnostic express au dossier optimisé avec suivi personnalisé.
          </motion.p>
        </div>

        {/* Forfaits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16 max-w-5xl mx-auto">
          {forfaits.map((forfait, index) => {
            const Icon = forfait.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl shadow-xl p-6 lg:p-8 card-hover ${
                  forfait.popular ? 'ring-2 ring-[#2e8b57] lg:scale-105' : ''
                }`}
              >
                {forfait.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#2e8b57] to-[#1f4e79] text-white px-4 py-1 rounded-full text-xs font-semibold flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Populaire
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${forfait.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold text-[#1f4e79] mb-1">{forfait.title}</h3>
                  <p className="text-[#6e7b8b] text-sm font-medium mb-3">{forfait.subtitle}</p>
                  <div className="flex items-center justify-center space-x-2 mb-3">
                    <span className="text-xl lg:text-2xl font-bold text-[#2e8b57]">{forfait.price}</span>
                    <span className="text-[#6e7b8b] text-sm">• {forfait.duration}</span>
                  </div>
                  <p className="text-[#6e7b8b] text-sm leading-relaxed">{forfait.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {forfait.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-[#2e8b57] flex-shrink-0 mt-0.5" />
                      <span className="text-[#6e7b8b] text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className={`w-full text-center py-3 px-4 rounded-lg font-medium transition-all duration-300 block text-sm ${
                    forfait.popular 
                      ? 'bg-gradient-to-r from-[#2e8b57] to-[#1f4e79] text-white hover:from-[#267a4d] hover:to-[#1a4066] shadow-lg'
                      : 'bg-gray-100 text-[#1f4e79] hover:bg-gradient-to-r hover:from-[#2e8b57] hover:to-[#1f4e79] hover:text-white'
                  }`}
                >
                  Choisir ce Forfait
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#1f4e79] mb-2">{stat.value}</div>
              <div className="text-[#6e7b8b] font-medium text-sm lg:text-base">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA - Centré parfaitement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link href="/services" className="btn-primary group inline-flex items-center">
            Découvrir Tous Nos Forfaits
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesPreview
