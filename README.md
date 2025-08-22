# Thrift Country - UK Streetwear E-commerce

Un site e-commerce moderne et cinématique pour Thrift Country, spécialisé dans le streetwear UK authentique pour la Gen-Z.

## 🚀 Fonctionnalités

- **Design Cinématique** : Interface noir et blanc avec des références 3D/space inspirées du logo Jupiter
- **Hero 3D** : Planète Jupiter interactive avec Three.js et anneaux animés
- **E-commerce Complet** : Panier, favoris, filtres de collections, modales produits
- **Animations Fluides** : GSAP pour les transitions et micro-interactions
- **Responsive Design** : Optimisé pour tous les appareils
- **Performance** : Chargement rapide avec lazy loading et optimisations
- **Accessibilité** : Conforme aux standards WCAG
- **PWA Ready** : Service Worker et manifest pour l'installation mobile

## 🛠️ Technologies

- **Frontend** : HTML5, CSS3, JavaScript ES6+
- **3D Graphics** : Three.js avec shaders personnalisés
- **Animations** : GSAP + ScrollTrigger
- **Build Tool** : Aucun (vanilla JS)
- **Deployment** : GitHub Pages
- **E-commerce** : Shopify Storefront API (optionnel)

## 📁 Structure du Projet

```
thrift-country/
├── index.html              # Page principale
├── styles/
│   └── main.css           # Styles principaux
├── scripts/
│   ├── main.js            # Logique principale
│   ├── three-planet.js    # Scène 3D Jupiter
│   └── animations.js      # Animations GSAP
├── data/
│   └── products.json      # Données produits
├── assets/                # Images et ressources
├── .github/workflows/     # CI/CD
└── docs/                  # Documentation
```

## 🚀 Installation

### Prérequis

- Node.js 18+ (pour le développement)
- Git

### Installation Locale

1. **Cloner le repository**
   ```bash
   git clone https://github.com/votre-username/thrift-country.git
   cd thrift-country
   ```

2. **Ouvrir le projet**
   ```bash
   # Ouvrir avec un serveur local
   python -m http.server 8000
   # ou
   npx serve .
   ```

3. **Accéder au site**
   ```
   http://localhost:8000
   ```

### Déploiement

Le site se déploie automatiquement sur GitHub Pages via les GitHub Actions.

## 🎨 Design System

### Palette de Couleurs
- **Noir** : `#000000`
- **Blanc** : `#ffffff`
- **Gris** : Échelle de 50 à 900

### Typographie
- **Primaire** : Inter (sans-serif)
- **Monospace** : JetBrains Mono

### Espacement
- Système d'espacement cohérent avec des variables CSS
- Breakpoints responsives : 768px, 480px

## 🛍️ Fonctionnalités E-commerce

### Panier
- Ajout/suppression de produits
- Modification des quantités
- Persistance localStorage
- Calcul automatique du total

### Favoris
- Liste de souhaits persistante
- Compteur en temps réel
- Synchronisation cross-device

### Filtres
- Collections : Monochrome, Techwear, 90s Sports, UK Street
- Filtrage en temps réel
- Animations de transition

### Produits
- Galerie d'images avec thumbnails
- Informations détaillées (condition, taille, année)
- Badges "Nouveau" et "Réduction"
- Actions rapides (ajouter au panier, favoris)

## 🎭 Animations

### Hero Section
- Planète Jupiter 3D avec rotation
- Anneaux animés avec shaders
- Champ d'étoiles parallax
- Animations d'entrée séquentielles

### Scroll Animations
- Fade-in des sections
- Parallax effects
- Animations des cartes produits
- Transitions fluides

### Micro-interactions
- Hover effects sur les boutons
- Animations des filtres
- Transitions modales
- Notifications toast

## 📱 Responsive Design

### Breakpoints
- **Desktop** : > 768px
- **Tablet** : 768px - 480px
- **Mobile** : < 480px

### Adaptations
- Navigation hamburger sur mobile
- Grille produits adaptative
- Modales full-screen sur mobile
- Optimisation des images

## 🔧 Configuration

### Variables CSS
```css
:root {
  --color-black: #000000;
  --color-white: #ffffff;
  --font-primary: 'Inter', sans-serif;
  --container-max-width: 1200px;
  /* ... */
}
```

### Configuration Three.js
```javascript
// Dans three-planet.js
const planetConfig = {
  radius: 2,
  segments: 64,
  rotationSpeed: 0.005
};
```

### Configuration GSAP
```javascript
// Dans animations.js
const animationConfig = {
  duration: 1,
  ease: "power3.out",
  stagger: 0.1
};
```

## 🚀 Performance

### Optimisations
- Lazy loading des images
- Minification CSS/JS
- Compression des assets
- Service Worker pour le cache
- Preload des ressources critiques

### Métriques
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Cumulative Layout Shift < 0.1
- First Input Delay < 100ms

## 🔒 Sécurité

- Validation côté client
- Sanitisation des inputs
- HTTPS obligatoire
- Headers de sécurité
- CSP (Content Security Policy)

## ♿ Accessibilité

### Standards
- WCAG 2.1 AA
- Navigation au clavier
- Screen reader friendly
- Contrast ratios appropriés
- Alt text pour les images

### Fonctionnalités
- Skip links
- Focus indicators
- ARIA labels
- Semantic HTML
- Reduced motion support

## 🧪 Tests

### Tests Manuels
- [ ] Navigation responsive
- [ ] Fonctionnalités panier
- [ ] Animations et transitions
- [ ] Accessibilité clavier
- [ ] Performance mobile

### Tests Automatisés
```bash
# Linting
npm run lint

# Tests unitaires
npm run test

# Tests E2E
npm run test:e2e
```

## 📈 Analytics

### Métriques Trackées
- Pages vues
- Temps de session
- Taux de conversion
- Produits vus
- Actions utilisateur

### Intégrations
- Google Analytics 4
- Facebook Pixel
- Hotjar (optionnel)

## 🔄 CI/CD

### GitHub Actions
- Build automatique
- Tests automatisés
- Déploiement GitHub Pages
- Preview pour les PR

### Workflow
1. Push sur `main` → Déploiement production
2. Pull Request → Preview automatique
3. Merge → Déploiement automatique

## 🤝 Contribution

### Guidelines
1. Fork le projet
2. Créer une branche feature
3. Commiter les changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

### Standards de Code
- ESLint + Prettier
- Conventional Commits
- Tests requis
- Documentation mise à jour

## 📄 Licence

MIT License - voir [LICENSE](LICENSE) pour plus de détails.

## 👥 Équipe

- **Design** : [Nom]
- **Développement** : [Nom]
- **Product** : [Nom]

## 📞 Support

- **Email** : hello@thriftcountry.com
- **Issues** : [GitHub Issues](https://github.com/votre-username/thrift-country/issues)
- **Documentation** : [Wiki](https://github.com/votre-username/thrift-country/wiki)

## 🗺️ Roadmap

### Phase 1 (Actuel)
- [x] Site de base
- [x] Panier fonctionnel
- [x] Animations 3D
- [x] Responsive design

### Phase 2 (Prochain)
- [ ] Intégration Shopify
- [ ] Système de recherche
- [ ] Filtres avancés
- [ ] Wishlist partagée

### Phase 3 (Futur)
- [ ] Application mobile
- [ ] AR try-on
- [ ] IA recommandations
- [ ] Marketplace

---

**Thrift Country** - Streetwear UK authentique pour Gen-Z 🚀
