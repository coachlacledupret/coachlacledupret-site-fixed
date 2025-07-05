
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, TrendingUp, Clock, Euro } from 'lucide-react'

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Marie et Thomas Dubois',
      situation: 'Primo-accédants, 32 et 35 ans',
      project: 'Achat résidence principale 280 000€',
      content: 'Nous étions perdus face à toutes les démarches bancaires. Nicolas nous a accompagnés de A à Z. Grâce à ses conseils, nous avons obtenu un taux à 3,2% au lieu des 3,8% initialement proposés par notre banque. Son audit de notre profil emprunteur nous a permis d\'optimiser notre dossier et d\'économiser plus de 8 000€ sur la durée du prêt. Un accompagnement professionnel et rassurant !',
      result: 'Économie de 8 000€, taux négocié à 3,2%',
      rating: 5,
    },
    {
      name: 'Julien Martin',
      situation: 'Investisseur débutant, 29 ans',
      project: 'Premier investissement locatif 180 000€',
      content: 'En tant que débutant dans l\'investissement locatif, j\'avais besoin d\'être rassuré sur le montage financier. Nicolas m\'a expliqué toutes les subtilités du financement investisseur et m\'a aidé à structurer mon dossier pour maximiser mes chances. Résultat : prêt obtenu sans apport personnel et avec une assurance optimisée qui me fait économiser 45€/mois. Je recommande vivement ses services !',
      result: 'Financement à 100%, économie de 540€/an',
      rating: 5,
    },
    {
      name: 'Sophie Leroy',
      situation: 'Divorcée, 41 ans, profession libérale',
      project: 'Rachat de soulte + travaux 320 000€',
      content: 'Après mon divorce, je devais racheter la part de mon ex-conjoint et financer des travaux. Ma situation de profession libérale compliquait les choses. Nicolas a su présenter mon dossier de manière optimale et négocier avec plusieurs banques. J\'ai obtenu un financement global incluant les travaux, avec un taux très correct malgré ma situation particulière. Son expertise m\'a fait gagner un temps précieux.',
      result: 'Financement global obtenu, délai réduit de 2 mois',
      rating: 5,
    },
    {
      name: 'Claire et David Rousseau',
      situation: 'Couple, 38 et 42 ans, fonctionnaires',
      project: 'Construction maison individuelle 350 000€',
      content: 'Le financement d\'une construction est complexe avec les déblocages progressifs. Nicolas nous a expliqué toutes les étapes et nous a aidés à choisir la meilleure banque pour ce type de projet. Son suivi pendant toute la construction nous a évité bien des stress. Nous avons même pu renégocier notre taux en cours de construction grâce à ses conseils. Un vrai professionnel !',
      result: 'Financement construction sécurisé, renégociation réussie',
      rating: 5,
    },
    {
      name: 'Antoine Mercier',
      situation: 'Entrepreneur, 35 ans',
      project: 'Achat résidence principale 420 000€',
      content: 'Avec mes revenus d\'entrepreneur variables, les banques étaient réticentes. Nicolas a su mettre en valeur la solidité de mon entreprise et présenter mes revenus de manière optimale. Il a trouvé une banque spécialisée dans le financement des entrepreneurs. Non seulement j\'ai obtenu mon prêt, mais en plus avec des conditions très favorables. Son réseau bancaire fait vraiment la différence !',
      result: 'Prêt obtenu malgré revenus variables, taux préférentiel',
      rating: 5,
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1f4e79] mb-6">
            Témoignages Clients
          </h2>
          <p className="text-xl text-[#6e7b8b] max-w-3xl mx-auto">
            Découvrez comment mes clients ont optimisé leur financement immobilier 
            et réalisé des économies significatives grâce à mon accompagnement.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Background décoratif */}
          <div className="absolute inset-0 z-0 opacity-5 bg-gradient-to-br from-[#1f4e79] to-[#2e8b57] rounded-xl"></div>

          {/* Testimonial Card */}
          <div className="relative z-10 bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-[#2e8b57] mb-6" />

                {/* Rating */}
                <div className="flex items-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-lg text-[#6e7b8b] leading-relaxed mb-8 italic">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Result Highlight */}
                <div className="bg-gradient-to-r from-[#2e8b57]/10 to-[#1f4e79]/10 rounded-lg p-4 mb-8">
                  <div className="flex items-center text-[#2e8b57] font-semibold">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    <span>Résultat obtenu : {testimonials[currentTestimonial].result}</span>
                  </div>
                </div>

                {/* Client Info */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-xl font-bold text-[#1f4e79] mb-2">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-[#6e7b8b] mb-1">
                    {testimonials[currentTestimonial].situation}
                  </p>
                  <p className="text-sm text-[#2e8b57] font-medium">
                    {testimonials[currentTestimonial].project}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-3 rounded-full bg-[#1f4e79] text-white hover:bg-[#1a4066] transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-[#2e8b57]' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="p-3 rounded-full bg-[#1f4e79] text-white hover:bg-[#1a4066] transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="w-16 h-16 bg-[#2e8b57] rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#1f4e79] mb-2">95%</div>
            <div className="text-[#6e7b8b]">Taux de réussite</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#2e8b57] rounded-full flex items-center justify-center mx-auto mb-4">
              <Euro className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#1f4e79] mb-2">12 000€</div>
            <div className="text-[#6e7b8b]">Économies moyennes</div>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-[#2e8b57] rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-3xl font-bold text-[#1f4e79] mb-2">3 sem.</div>
            <div className="text-[#6e7b8b]">Délai moyen d'obtention</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TestimonialsSection
