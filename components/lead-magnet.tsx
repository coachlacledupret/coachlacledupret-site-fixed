'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LeadMagnet() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici vous pourriez intégrer avec votre service d'email marketing
    console.log('Email soumis:', email);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <section id="lead-magnet" className="py-16 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4">
        <Card className="bg-white shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900 mb-2">
              🎁 Guide Gratuit : "Les 7 Clés du Succès Personnel"
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Découvrez les stratégies éprouvées pour transformer votre vie et atteindre vos objectifs
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Ce que vous allez apprendre :</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Comment définir des objectifs clairs et réalisables
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Les techniques de motivation qui fonctionnent vraiment
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Comment surmonter les obstacles et la procrastination
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    Stratégies pour maintenir votre élan sur le long terme
                  </li>
                </ul>
              </div>
              
              <div>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Votre adresse email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                    >
                      Télécharger le Guide Gratuit
                    </button>
                    <p className="text-xs text-gray-500 text-center">
                      Pas de spam. Vous pouvez vous désabonner à tout moment.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-green-500 text-4xl mb-4">✓</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Merci pour votre inscription !
                    </h3>
                    <p className="text-gray-600">
                      Vérifiez votre boîte email, le guide vous attend !
                    </p>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}