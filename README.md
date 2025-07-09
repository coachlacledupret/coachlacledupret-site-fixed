# Coach La Clé du Prêt - Site Web

## 🎯 Description

Site web professionnel pour Nicolas SZEFEROWICZ, coach expert en financement immobilier. Le site présente ses services d'accompagnement pour l'obtention de prêts immobiliers et la négociation des meilleures conditions.

## ✨ Fonctionnalités

### 🏠 Site Complet
- **Design moderne et responsive** - Optimisé pour tous les appareils
- **Performance optimisée** - Chargement rapide et SEO-friendly
- **Interface intuitive** - Navigation fluide et expérience utilisateur soignée

### 📋 Fonctionnalités Principales
- **Hero Section** avec CTA et statistiques de performance
- **Section À propos** avec photo professionnelle et expertise
- **Services détaillés** avec tarifs transparents
- **Lead Magnet** - Capture d'emails avec guide PDF gratuit
- **Blog intégré** avec articles SEO optimisés
- **Formulaire de contact** fonctionnel
- **Bannière cookies RGPD** conforme

### 🔧 Fonctionnalités Techniques
- **Next.js 14** - Framework React moderne
- **TypeScript** - Code typé et maintenable
- **Tailwind CSS** - Styling moderne et responsive
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes
- **API Routes** - Téléchargement de fichiers et capture d'emails

### 📄 Pages Légales
- Mentions légales complètes
- Conditions Générales de Vente (CGV)
- Politique de confidentialité RGPD

### 📱 SEO & Marketing
- **Balises meta optimisées** pour le référencement
- **Google Search Console** intégré
- **Capture d'emails** avec lead magnet
- **Blog SEO-friendly** pour le content marketing
- **Schema markup** pour les moteurs de recherche

## 🚀 Déploiement sur Vercel

### Étapes de déploiement :

1. **Connecter le dépôt à Vercel**
   - Aller sur [vercel.com](https://vercel.com)
   - Cliquer sur "New Project"
   - Importer depuis GitHub : `coachlacledupret/coachlacledupret-site-fixed`

2. **Configuration du build**
   - **Framework Preset** : Next.js
   - **Build Command** : `npm run build`
   - **Output Directory** : `.next` (détection automatique)
   - **Install Command** : `npm install`

3. **Variables d'environnement** (optionnelles)
   ```
   NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
   ```

4. **Déploiement**
   - Cliquer sur "Deploy"
   - Vercel détectera automatiquement Next.js et configurera le build

### ⚙️ Configuration recommandée

- **Node.js Version** : 18.x ou supérieur
- **Build Command** : `npm run build`
- **Dev Command** : `npm run dev`
- **Output Directory** : `.next`

## 📁 Structure du Projet

```
/
├── app/                    # App Router Next.js 14
│   ├── api/               # API Routes
│   │   ├── download-guide/
│   │   └── lead-magnet/
│   ├── blog/              # Articles de blog
│   ├── contact/           # Page contact
│   ├── cgv/               # Conditions générales
│   ├── mentions-legales/  # Mentions légales
│   ├── politique-confidentialite/
│   ├── globals.css        # Styles globaux
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Page d'accueil
├── components/            # Composants React
│   ├── ui/               # Composants UI réutilisables
│   ├── header.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── services-section.tsx
│   ├── lead-magnet.tsx
│   ├── testimonials-section.tsx
│   ├── blog-preview.tsx
│   ├── contact-section.tsx
│   └── cookie-banner.tsx
├── lib/                   # Utilitaires
├── public/               # Assets statiques
│   ├── images/           # Images et logos
│   └── guides/           # Fichiers PDF
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Design & Branding

### Couleurs principales
- **Bleu principal** : `#005f9e`
- **Vert accent** : `#2e8b57`
- **Jaune CTA** : `#fbbf24`
- **Gris texte** : `#6e7b8b`

### Typographie
- **Police principale** : Inter (Google Fonts)
- **Hiérarchie** : H1-H6 avec tailles responsives

## 📞 Contact & Support

**Nicolas SZEFEROWICZ**
- 📧 Email : coach.lacledupret@gmail.com
- 📱 Téléphone : 06 18 46 10 94
- 🌐 Site : [La Clé du Prêt](https://coachlacledupret.fr)
- 📅 Calendly : [Prendre RDV](https://calendly.com/contact-coachlacledupret)

## 📄 Informations Légales

- **SIRET** : 751 600 081
- **Statut** : Entrepreneur individuel
- **Zone d'intervention** : Partout en France (visioconférence)

---

## 🚀 Prêt pour le déploiement !

Ce site est entièrement fonctionnel et prêt à être déployé sur Vercel. Toutes les fonctionnalités sont implémentées et testées :

✅ Configuration Next.js optimisée
✅ Design responsive et moderne  
✅ SEO et performance optimisés
✅ Fonctionnalités de capture d'emails
✅ Pages légales conformes RGPD
✅ Blog intégré pour le content marketing
✅ Formulaires de contact fonctionnels

**Déployez maintenant sur Vercel pour mettre votre site en ligne !**