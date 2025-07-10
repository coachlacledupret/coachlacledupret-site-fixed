import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const blogPosts = [
  {
    title: "5 Habitudes Matinales pour Transformer Votre Journée",
    excerpt: "Découvrez comment une routine matinale bien structurée peut révolutionner votre productivité et votre bien-être.",
    date: "15 Mars 2024",
    readTime: "5 min",
    category: "Développement Personnel",
    image: "📅"
  },
  {
    title: "Comment Surmonter la Peur de l'Échec",
    excerpt: "Apprenez à transformer vos peurs en moteurs de réussite grâce à des techniques éprouvées de coaching.",
    date: "10 Mars 2024",
    readTime: "7 min",
    category: "Mindset",
    image: "💪"
  },
  {
    title: "L'Art de la Communication Assertive",
    excerpt: "Maîtrisez les clés d'une communication efficace pour améliorer vos relations personnelles et professionnelles.",
    date: "5 Mars 2024",
    readTime: "6 min",
    category: "Communication",
    image: "🗣️"
  },
  {
    title: "Gestion du Temps : Les Méthodes qui Fonctionnent",
    excerpt: "Explorez les techniques de gestion du temps les plus efficaces pour optimiser votre productivité.",
    date: "28 Février 2024",
    readTime: "8 min",
    category: "Productivité",
    image: "⏰"
  },
  {
    title: "Développer sa Confiance en Soi au Travail",
    excerpt: "Stratégies pratiques pour renforcer votre confiance et affirmer votre leadership en milieu professionnel.",
    date: "20 Février 2024",
    readTime: "6 min",
    category: "Leadership",
    image: "🌟"
  },
  {
    title: "L'Équilibre Vie Pro/Vie Perso : Mythe ou Réalité ?",
    excerpt: "Réflexions et conseils pour créer un équilibre durable entre vos aspirations professionnelles et personnelles.",
    date: "15 Février 2024",
    readTime: "9 min",
    category: "Équilibre de Vie",
    image: "⚖️"
  }
];

export default function BlogPreview() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Articles Récents
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez mes derniers articles sur le développement personnel et le coaching
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{post.image}</span>
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                  {post.title}
                </CardTitle>
                <div className="flex items-center text-sm text-gray-500 space-x-2">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime} de lecture</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {post.excerpt}
                </CardDescription>
                <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium text-sm">
                  Lire la suite →
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Voir tous les articles
          </button>
        </div>
      </div>
    </section>
  );
}