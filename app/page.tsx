import HeroSection from './components/HeroSection'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            Nos Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Conseil Personnalisé</h3>
              <p>Accompagnement sur mesure pour votre projet immobilier</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Négociation</h3>
              <p>Négociation des meilleures conditions pour votre prêt</p>
            </div>
            <div className="text-center p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Suivi Complet</h3>
              <p>Accompagnement de A à Z jusqu'à la signature</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}