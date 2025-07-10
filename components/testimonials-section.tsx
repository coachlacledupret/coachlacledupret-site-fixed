import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Directrice Marketing",
    content: "Le coaching avec [Nom du Coach] a transformé ma façon d'aborder les défis professionnels. J'ai gagné en confiance et en efficacité.",
    rating: 5,
    image: "👩‍💼"
  },
  {
    name: "Pierre Martin",
    role: "Entrepreneur",
    content: "Grâce à cet accompagnement, j'ai enfin réussi à équilibrer ma vie professionnelle et personnelle. Les résultats sont remarquables.",
    rating: 5,
    image: "👨‍💻"
  },
  {
    name: "Sophie Laurent",
    role: "Manager d'équipe",
    content: "Les techniques apprises m'ont permis de mieux gérer mon stress et d'améliorer mes relations avec mon équipe. Je recommande vivement !",
    rating: 5,
    image: "👩‍💼"
  },
  {
    name: "Thomas Rousseau",
    role: "Cadre Commercial",
    content: "Un accompagnement personnalisé qui m'a aidé à dépasser mes limites et à atteindre mes objectifs de carrière plus rapidement que prévu.",
    rating: 5,
    image: "👨‍💼"
  },
  {
    name: "Isabelle Moreau",
    role: "Consultante",
    content: "L'approche bienveillante et professionnelle m'a permis de retrouver ma motivation et de clarifier mes priorités de vie.",
    rating: 5,
    image: "👩‍💻"
  },
  {
    name: "Alexandre Petit",
    role: "Chef de Projet",
    content: "Des outils concrets et une méthode efficace qui ont révolutionné ma façon de travailler et de gérer mes projets.",
    rating: 5,
    image: "👨‍💻"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ce que disent mes clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez les témoignages de personnes qui ont transformé leur vie grâce au coaching
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.image}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                
                <p className="text-gray-700 italic">
                  "{testimonial.content}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Voir plus de témoignages
          </button>
        </div>
      </div>
    </section>
  );
}