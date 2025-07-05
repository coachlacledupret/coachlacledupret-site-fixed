
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Phone, CheckCircle, Clock, Euro } from 'lucide-react'

const CTASection = () => {
  const benefits = [
    { icon: CheckCircle, text: 'Premier entretien gratuit de 15 minutes' },
    { icon: Clock, text: 'Réponse sous 24h maximum' },
    { icon: Euro, text: 'Économies moyennes de 12 000€' },
  ]

  return (
    <section className="section-padding bg-gradient-to-r from-[#1f4e79] to-[#2e8b57] text-white">
      <div className="container-max">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Prêt à Optimiser Votre Financement ?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-blue-100 leading-relaxed mb-8"
          >
            Rejoignez les 500+ clients qui ont déjà optimisé leur financement immobilier 
            et économisé en moyenne 12 000€ grâce à mon accompagnement expert.
          </motion.p>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="flex items-center justify-center space-x-3">
                  <Icon className="w-6 h-6 text-yellow-400" />
                  <span className="text-blue-100">{benefit.text}</span>
                </div>
              )
            })}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/contact" className="btn-secondary group">
              Consultation Gratuite
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="tel:0618461094" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:bg-white hover:text-[#1f4e79] text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 min-h-[44px] group flex items-center justify-center"
            >
              <Phone className="w-5 h-5 mr-2" />
              06 18 46 10 94
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-blue-100 text-sm mt-6"
          >
            Aucun engagement • Conseils objectifs • Tarifs transparents
          </motion.p>
        </div>
      </div>
    </section>
  )
}

export default CTASection
