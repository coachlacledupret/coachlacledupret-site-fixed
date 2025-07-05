
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Users, TrendingUp, ArrowRight, CheckCircle, Target } from 'lucide-react'

const AboutPreview = () => {
  const achievements = [
    { icon: Users, value: '500+', label: 'Clients Accompagnés' },
    { icon: TrendingUp, value: '12 000€', label: 'Économies Moyennes' },
    { icon: Award, value: '95%', label: 'Taux de Réussite' },
  ]

  const values = [
    { icon: Target, title: 'Transparence', description: 'Des tarifs clairs et des conseils objectifs' },
    { icon: Users, title: 'Pédagogie', description: 'Je vous explique tout pour que vous compreniez' },
    { icon: TrendingUp, title: 'Efficacité', description: 'Des méthodes éprouvées pour optimiser vos chances' },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image et Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl bg-gray-200">
              <Image
                src="/images/nicolas-szeferowicz-photo.png"
                alt="Nicolas SZEFEROWICZ - Coach en Financement Immobilier"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f4e79]/20 to-transparent"></div>
            </div>

            {/* Stats Cards - Responsive positioning */}
            <div className="absolute -bottom-6 -right-4 lg:-bottom-8 lg:-right-8 bg-white rounded-xl shadow-xl p-4 lg:p-6 max-w-xs w-full sm:w-auto">
              <div className="grid grid-cols-1 gap-3 lg:gap-4">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon
                  return (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#2e8b57] rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-base lg:text-lg font-bold text-[#1f4e79]">{achievement.value}</div>
                        <div className="text-xs text-[#6e7b8b]">{achievement.label}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 lg:space-y-8 order-1 lg:order-2"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1f4e79] mb-4 lg:mb-6">
                Votre Expert en Financement Immobilier
              </h2>
              <p className="text-xl lg:text-2xl text-[#6e7b8b] leading-relaxed mb-4 lg:mb-6">
                Bonjour, je suis <strong className="text-[#2e8b57]">Nicolas SZEFEROWICZ</strong>, 
                coach spécialisé en financement immobilier. Depuis plus de 10 ans, j'accompagne 
                particuliers et investisseurs dans la réussite de leurs projets immobiliers.
              </p>
              <p className="text-xl lg:text-2xl text-[#6e7b8b] leading-relaxed">
                Diplômé en finance et fort d'une expérience de 8 ans dans le secteur bancaire, 
                j'ai décidé de mettre mon expertise au service des emprunteurs pour leur faire 
                économiser en moyenne <strong className="text-[#2e8b57]">12 000€</strong> sur leur financement.
              </p>
            </div>

            {/* Valeurs */}
            <div className="space-y-3 lg:space-y-4">
              <h3 className="text-xl lg:text-2xl font-bold text-[#1f4e79] mb-3 lg:mb-4">Mes Valeurs</h3>
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3 lg:space-x-4 p-3 lg:p-4 rounded-lg hover:bg-[#f0f8f4] transition-colors"
                  >
                    <div className="w-10 h-10 lg:w-12 lg:h-12 bg-[#2e8b57] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-base lg:text-lg font-semibold text-[#1f4e79] mb-1">{value.title}</h4>
                      <p className="text-sm lg:text-base text-[#6e7b8b]">{value.description}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Différenciation */}
            <div className="bg-gradient-to-r from-[#1f4e79]/5 to-[#2e8b57]/5 rounded-xl p-4 lg:p-6">
              <h4 className="text-base lg:text-lg font-semibold text-[#1f4e79] mb-3">
                Pourquoi choisir un coach plutôt qu'un courtier ?
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#2e8b57] flex-shrink-0" />
                  <span className="text-sm lg:text-base text-[#6e7b8b]">Rémunération transparente (pas de commission bancaire)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#2e8b57] flex-shrink-0" />
                  <span className="text-sm lg:text-base text-[#6e7b8b]">Conseils 100% objectifs et dans votre intérêt</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-[#2e8b57] flex-shrink-0" />
                  <span className="text-sm lg:text-base text-[#6e7b8b]">Approche pédagogique pour votre autonomie</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link href="/a-propos" className="btn-primary group inline-flex items-center">
                En savoir plus sur mon parcours
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
