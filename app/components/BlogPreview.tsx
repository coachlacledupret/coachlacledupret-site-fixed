
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'

const BlogPreview = () => {
  const articles = [
    {
      title: 'Les 5 Erreurs Qui Peuvent Faire Échouer Votre Demande de Prêt Immobilier',
      excerpt: 'Découvrez les erreurs les plus courantes commises par les emprunteurs et comment les éviter pour maximiser vos chances de succès.',
      date: '15 Mai 2025',
      readTime: '8 min',
      category: 'Conseils',
      slug: 'erreurs-demande-pret-immobilier',
    },
    {
      title: 'Comment Négocier Efficacement Votre Taux de Prêt Immobilier en 2025',
      excerpt: 'Guide complet sur les techniques de négociation bancaire pour obtenir les meilleures conditions de financement.',
      date: '10 Mai 2025',
      readTime: '12 min',
      category: 'Négociation',
      slug: 'negocier-taux-pret-immobilier-2025',
    },
    {
      title: 'Prêt Immobilier : Faut-il Choisir un Taux Fixe ou Variable en 2025 ?',
      excerpt: 'Analyse comparative approfondie pour vous aider à choisir le type de taux le plus adapté à votre situation.',
      date: '5 Mai 2025',
      readTime: '10 min',
      category: 'Analyse',
      slug: 'taux-fixe-variable-2025',
    },
  ]

  return (
    <section className="section-padding bg-white">
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
            Conseils d'Expert
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg lg:text-xl text-[#6e7b8b] leading-relaxed"
          >
            Découvrez mes derniers articles sur le financement immobilier. 
            Conseils pratiques, analyses de marché et astuces pour optimiser votre prêt.
          </motion.p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
          {articles.map((article, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl p-5 lg:p-6 card-hover"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-[#2e8b57] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {article.category}
                </span>
                <div className="flex items-center text-sm text-[#6e7b8b]">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h3 className="text-lg lg:text-xl font-bold text-[#1f4e79] mb-3 leading-tight">
                {article.title}
              </h3>

              <p className="text-[#6e7b8b] mb-4 leading-relaxed text-sm lg:text-base">
                {article.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-[#6e7b8b]">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{article.date}</span>
                </div>
                <Link 
                  href={`/blog/${article.slug}`}
                  className="inline-flex items-center text-[#2e8b57] hover:text-[#267a4d] font-semibold group text-sm lg:text-base"
                >
                  Lire
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1f4e79]/5 to-[#2e8b57]/5 rounded-xl p-6 lg:p-8 mb-6 lg:mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 text-center">
            <div>
              <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8 text-[#2e8b57] mx-auto mb-3" />
              <div className="text-xl lg:text-2xl font-bold text-[#1f4e79] mb-1">50+</div>
              <div className="text-[#6e7b8b] text-sm lg:text-base">Articles Publiés</div>
            </div>
            <div>
              <Calendar className="w-6 h-6 lg:w-8 lg:h-8 text-[#2e8b57] mx-auto mb-3" />
              <div className="text-xl lg:text-2xl font-bold text-[#1f4e79] mb-1">Hebdomadaire</div>
              <div className="text-[#6e7b8b] text-sm lg:text-base">Nouveaux Contenus</div>
            </div>
            <div>
              <Calendar className="w-6 h-6 lg:w-8 lg:h-8 text-[#2e8b57] mx-auto mb-3" />
              <div className="text-xl lg:text-2xl font-bold text-[#1f4e79] mb-1">10 min</div>
              <div className="text-[#6e7b8b] text-sm lg:text-base">Lecture Moyenne</div>
            </div>
          </div>
        </motion.div>

        {/* CTA - Centré parfaitement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Link href="/blog" className="btn-primary group inline-flex items-center">
            Voir Tous les Articles
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default BlogPreview
