# 🛍️ Thrift Country - Site E-commerce

Un site e-commerce moderne et éthique spécialisé dans la vente de vêtements de seconde main, conçu avec une identité visuelle basée sur le logo Thrift Country.

## 🎨 Identité Visuelle

Le design est entièrement basé sur l'identité visuelle du logo Thrift Country :

- **Palette de couleurs** : Noir (#000000) et Off-white/Cream (#f5f5dc) comme couleurs principales
- **Typographie** : Montserrat pour les titres (comme "THRIFT" et "COUNTRY"), Inter pour le texte
- **Style** : Vintage, rétro, avec des éléments arrondis et une ambiance chaleureuse
- **Accents** : Or subtil (#d4af37) pour les éléments interactifs

## 🚀 Fonctionnalités

### Pages Principales
- **Page d'accueil** : Hero section, produits vedettes, mission de la marque
- **Page boutique** : Grille de produits avec filtres avancés
- **Système de panier** : Ajout/suppression, gestion des quantités
- **Favoris** : Système de wishlist
- **Recherche** : Recherche en temps réel avec suggestions

### Fonctionnalités Interactives
- ✅ **Filtres dynamiques** : Catégorie, taille, couleur, prix, état
- ✅ **Tri des produits** : Par prix, popularité, date
- ✅ **Pagination** : Navigation fluide entre les pages
- ✅ **Responsive design** : Optimisé mobile et desktop
- ✅ **Animations** : Transitions douces et micro-interactions
- ✅ **Accessibilité** : Navigation clavier, focus visible
- ✅ **Performance** : Chargement optimisé, lazy loading

### Système de Panier
- Ajout/suppression d'articles
- Gestion des quantités
- Sauvegarde locale (localStorage)
- Modal de panier interactif
- Calcul automatique du total

## 📁 Structure du Projet

```
thrift-country/
├── index.html              # Page d'accueil
├── boutique.html           # Page boutique avec filtres
├── styles/
│   ├── main.css           # Styles principaux
│   └── boutique.css       # Styles spécifiques boutique
├── js/
│   ├── main.js            # JavaScript principal
│   └── boutique.js        # JavaScript boutique
├── assets/                # Images et ressources
└── README.md              # Documentation
```

## 🎯 Cible Utilisateur

- **Âge** : 18-35 ans
- **Intérêts** : Mode éthique, seconde main, style personnel
- **Valeurs** : Durabilité, authenticité, style unique
- **Comportement** : Sensible aux tendances, recherche de pièces uniques

## 🛠️ Technologies Utilisées

- **HTML5** : Structure sémantique
- **CSS3** : Variables CSS, Grid, Flexbox, animations
- **JavaScript ES6+** : Modules, async/await, localStorage
- **Google Fonts** : Montserrat et Inter
- **Responsive Design** : Mobile-first approach

## 🚀 Installation et Utilisation

1. **Cloner le projet**
   ```bash
   git clone [url-du-repo]
   cd thrift-country
   ```

2. **Ouvrir le projet**
   - Ouvrir `index.html` dans un navigateur
   - Ou utiliser un serveur local :
   ```bash
   python -m http.server 8000
   # Puis ouvrir http://localhost:8000
   ```

3. **Structure des fichiers**
   - `index.html` : Page d'accueil
   - `boutique.html` : Page boutique avec filtres
   - `styles/main.css` : Styles globaux
   - `js/main.js` : Fonctionnalités principales

## 🎨 Design System

### Couleurs
```css
--color-primary: #000000;      /* Noir du logo */
--color-secondary: #f5f5dc;    /* Off-white/cream */
--color-accent: #d4af37;       /* Or subtil */
--color-text: #1a1a1a;         /* Noir pour le texte */
--color-text-light: #666666;   /* Gris pour le texte secondaire */
```

### Typographie
```css
--font-primary: 'Montserrat', sans-serif;    /* Titres */
--font-secondary: 'Inter', sans-serif;       /* Texte */
```

### Espacements
```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-xxl: 3rem;
```

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints :

- **Desktop** : > 1024px
- **Tablet** : 768px - 1024px
- **Mobile** : < 768px
- **Small Mobile** : < 480px

## 🔧 Fonctionnalités JavaScript

### Gestion du Panier
```javascript
// Ajouter au panier
addToCart(productId, productName, price, image);

// Retirer du panier
removeFromCart(productId);

// Mettre à jour le compteur
updateCartCount();
```

### Filtres de Produits
```javascript
// Appliquer les filtres
applyFilters();

// Trier les produits
sortProducts(sortType);

// Effacer tous les filtres
clearAllFilters();
```

### Système de Favoris
```javascript
// Toggle favori
toggleFavorite(productId, productName);

// Sauvegarder les favoris
saveFavoritesToLocalStorage();
```

## 🎯 Optimisations SEO

- **Meta tags** optimisés pour chaque page
- **Structure HTML** sémantique
- **Images** avec attributs alt
- **Performance** : Chargement optimisé
- **Accessibilité** : Navigation clavier, ARIA labels

## 🚀 Recommandations Marketing

### Stratégie de Contenu
- **Blog mode** : Conseils style, guides des tailles
- **Stories Instagram** : Behind-the-scenes, styling
- **Influenceurs** : Collaboration avec micro-influenceurs
- **User-generated content** : Photos clients, avis

### Campagnes d'Acquisition
- **Google Ads** : Mots-clés "seconde main", "vintage"
- **Facebook/Instagram Ads** : Lookalike audiences
- **Email marketing** : Newsletter avec nouveautés
- **SEO local** : Optimisation pour les recherches locales

### Fidélisation
- **Programme de fidélité** : Points, réductions
- **Personnalisation** : Recommandations basées sur l'historique
- **Communauté** : Groupe Facebook, événements
- **Service client** : Chat en ligne, support réactif

## 🔮 Évolutions Futures

### Fonctionnalités à Ajouter
- [ ] **Système de compte utilisateur**
- [ ] **Historique des achats**
- [ ] **Système de vente** (comme Vinted)
- [ ] **Chat en ligne**
- [ ] **Mode sombre**
- [ ] **Application mobile**
- [ ] **Paiement en ligne**
- [ ] **Système de livraison**

### Améliorations Techniques
- [ ] **PWA** (Progressive Web App)
- [ ] **API backend** (Node.js/Express)
- [ ] **Base de données** (MongoDB/PostgreSQL)
- [ ] **Authentification** (JWT, OAuth)
- [ ] **Paiements** (Stripe, PayPal)
- [ ] **Analytics** (Google Analytics, Hotjar)

## 📞 Contact

Pour toute question ou suggestion concernant le projet Thrift Country :

- **Email** : contact@thriftcountry.com
- **Instagram** : @thriftcountry
- **Site web** : www.thriftcountry.com

---

**Thrift Country** - Mode éthique, style unique, impact positif 🌱 