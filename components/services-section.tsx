import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    title: "Coaching Personnel",
    description: "Accompagnement individuel pour atteindre vos objectifs personnels et professionnels.",
    icon: "🎯"
  },
  {
    title: "Coaching d'Équipe",
    description: "Développement de la cohésion et de la performance collective.",
    icon: "👥"
  },
  {
    title: "Formation Leadership",
    description: "Développez vos compétences de leadership et votre influence positive.",
    icon: "🌟"
  },
  {
    title: "Gestion du Stress",
    description: "Techniques et stratégies pour mieux gérer le stress et l'anxiété.",
    icon: "🧘"
  },
  {
    title: "Développement Personnel",
    description: "Explorez votre potentiel et créez la vie que vous désirez.",
    icon: "🚀"
  },
  {
    title: "Coaching Carrière",
    description: "Orientation et accompagnement dans votre évolution professionnelle.",
    icon: "💼"
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mes Services de Coaching
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment je peux vous accompagner dans votre développement personnel et professionnel
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-4xl mb-2">{service.icon}</div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Découvrir tous mes services
          </button>
        </div>
      </div>
    </section>
  );
}