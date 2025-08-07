// ===== DONNÉES DE PRODUITS (SIMULATION) =====
const productsData = [
  {
    id: 'product-1',
    name: 'Robe Vintage Floral',
    price: 45,
    originalPrice: 60,
    category: 'femme',
    size: ['s', 'm', 'l'],
    color: 'rose',
    condition: 'excellent',
    image: 'assets/product-1.jpg',
    badges: ['new'],
    description: 'Robe vintage avec motif floral, parfaite pour l\'été'
  },
  {
    id: 'product-2',
    name: 'Chemise Oversize Vintage',
    price: 28,
    originalPrice: 35,
    category: 'femme',
    size: ['m', 'l', 'xl'],
    color: 'blanc',
    condition: 'tres-bon',
    image: 'assets/product-2.jpg',
    badges: ['sale'],
    description: 'Chemise oversize style vintage, très confortable'
  },
  {
    id: 'product-3',
    name: 'Jean Mom Fit 90s',
    price: 32,
    originalPrice: 40,
    category: 'femme',
    size: ['s', 'm', 'l'],
    color: 'bleu',
    condition: 'bon',
    image: 'assets/product-3.jpg',
    badges: [],
    description: 'Jean mom fit style années 90, coupe tendance'
  },
  {
    id: 'product-4',
    name: 'Blazer Vintage Élégant',
    price: 55,
    originalPrice: 70,
    category: 'femme',
    size: ['s', 'm'],
    color: 'noir',
    condition: 'excellent',
    image: 'assets/product-4.jpg',
    badges: [],
    description: 'Blazer vintage élégant, parfait pour les occasions'
  },
  {
    id: 'product-5',
    name: 'T-shirt Vintage Rock',
    price: 22,
    originalPrice: 30,
    category: 'homme',
    size: ['m', 'l', 'xl'],
    color: 'noir',
    condition: 'tres-bon',
    image: 'assets/product-5.jpg',
    badges: ['sale'],
    description: 'T-shirt vintage avec motif rock, style rétro'
  },
  {
    id: 'product-6',
    name: 'Veste Denim Vintage',
    price: 48,
    originalPrice: 65,
    category: 'homme',
    size: ['l', 'xl'],
    color: 'bleu',
    condition: 'excellent',
    image: 'assets/product-6.jpg',
    badges: [],
    description: 'Veste denim vintage, style intemporel'
  },
  {
    id: 'product-7',
    name: 'Sac Vintage Cuir',
    price: 65,
    originalPrice: 85,
    category: 'accessoires',
    size: ['one-size'],
    color: 'marron',
    condition: 'excellent',
    image: 'assets/product-7.jpg',
    badges: [],
    description: 'Sac vintage en cuir véritable, très élégant'
  },
  {
    id: 'product-8',
    name: 'Sneakers Vintage',
    price: 38,
    originalPrice: 50,
    category: 'chaussures',
    size: ['38', '39', '40'],
    color: 'blanc',
    condition: 'tres-bon',
    image: 'assets/product-8.jpg',
    badges: ['sale'],
    description: 'Sneakers vintage, style rétro et confortable'
  }
];

// ===== VARIABLES GLOBALES =====
let filteredProducts = [...productsData];
let currentPage = 1;
let productsPerPage = 12;
let activeFilters = {
  category: [],
  size: [],
  color: [],
  condition: [],
  priceMin: 0,
  priceMax: 200,
  search: ''
};

// ===== FONCTIONS DE FILTRAGE =====
function applyFilters() {
  filteredProducts = productsData.filter(product => {
    // Filtre par catégorie
    if (activeFilters.category.length > 0 && !activeFilters.category.includes(product.category)) {
      return false;
    }
    
    // Filtre par taille
    if (activeFilters.size.length > 0 && !product.size.some(size => activeFilters.size.includes(size))) {
      return false;
    }
    
    // Filtre par couleur
    if (activeFilters.color.length > 0 && !activeFilters.color.includes(product.color)) {
      return false;
    }
    
    // Filtre par état
    if (activeFilters.condition.length > 0 && !activeFilters.condition.includes(product.condition)) {
      return false;
    }
    
    // Filtre par prix
    if (product.price < activeFilters.priceMin || product.price > activeFilters.priceMax) {
      return false;
    }
    
    // Filtre par recherche
    if (activeFilters.search && !product.name.toLowerCase().includes(activeFilters.search.toLowerCase())) {
      return false;
    }
    
    return true;
  });
  
  currentPage = 1;
  updateProductsDisplay();
  updateProductsCount();
}

function updateProductsCount() {
  const countElement = document.getElementById('products-count');
  if (countElement) {
    countElement.textContent = filteredProducts.length;
  }
}

// ===== GÉNÉRATION DES PRODUITS =====
function generateProductCard(product) {
  const hasSale = product.originalPrice && product.originalPrice > product.price;
  const discount = hasSale ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) : 0;
  
  return `
    <div class="product-card" data-product-id="${product.id}">
      <div class="product-card__image">
        <img src="${product.image}" alt="${product.name}" onerror="this.src='assets/placeholder.jpg'">
        <button class="favorite-btn" aria-label="Ajouter aux favoris">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <div class="product-card__badges">
          ${product.badges.includes('new') ? '<span class="badge badge--new">Nouveau</span>' : ''}
          ${hasSale ? `<span class="badge badge--sale">-${discount}%</span>` : ''}
        </div>
      </div>
      <div class="product-card__content">
        <h3>${product.name}</h3>
        <p class="product-card__price">
          ${hasSale ? `<span class="price--old">€${product.originalPrice}</span>` : ''}
          <span class="price--new">€${product.price}</span>
        </p>
        <div class="product-card__details">
          <span class="product-size">Tailles: ${product.size.join(', ').toUpperCase()}</span>
          <span class="product-condition">État: ${getConditionLabel(product.condition)}</span>
        </div>
        <div class="product-card__actions">
          <button class="btn btn--small">Ajouter au panier</button>
        </div>
      </div>
    </div>
  `;
}

function getConditionLabel(condition) {
  const labels = {
    'excellent': 'Excellent',
    'tres-bon': 'Très bon',
    'bon': 'Bon'
  };
  return labels[condition] || condition;
}

function updateProductsDisplay() {
  const productsGrid = document.getElementById('products-grid');
  if (!productsGrid) return;
  
  // Calculer les produits à afficher pour la page courante
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = filteredProducts.slice(startIndex, endIndex);
  
  // Générer le HTML des produits
  const productsHTML = productsToShow.map(product => generateProductCard(product)).join('');
  
  // Mettre à jour l'affichage
  productsGrid.innerHTML = productsHTML;
  
  // Réinitialiser les événements
  initProductEvents();
  updateFavoriteButtons();
  updatePagination();
}

// ===== GESTION DES FILTRES =====
function initFilters() {
  // Filtres de catégorie
  document.querySelectorAll('input[name="category"]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        activeFilters.category.push(e.target.value);
      } else {
        activeFilters.category = activeFilters.category.filter(cat => cat !== e.target.value);
      }
      applyFilters();
    });
  });
  
  // Filtres de taille
  document.querySelectorAll('input[name="size"]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        activeFilters.size.push(e.target.value);
      } else {
        activeFilters.size = activeFilters.size.filter(size => size !== e.target.value);
      }
      applyFilters();
    });
  });
  
  // Filtres d'état
  document.querySelectorAll('input[name="condition"]').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      if (e.target.checked) {
        activeFilters.condition.push(e.target.value);
      } else {
        activeFilters.condition = activeFilters.condition.filter(cond => cond !== e.target.value);
      }
      applyFilters();
    });
  });
  
  // Filtres de couleur
  document.querySelectorAll('.color-filter').forEach(button => {
    button.addEventListener('click', () => {
      const color = button.dataset.color;
      if (button.classList.contains('color-filter--active')) {
        button.classList.remove('color-filter--active');
        activeFilters.color = activeFilters.color.filter(c => c !== color);
      } else {
        button.classList.add('color-filter--active');
        activeFilters.color.push(color);
      }
      applyFilters();
    });
  });
  
  // Filtres de prix
  const priceMinSlider = document.getElementById('price-min');
  const priceMaxSlider = document.getElementById('price-max');
  const priceMinInput = document.getElementById('price-min-input');
  const priceMaxInput = document.getElementById('price-max-input');
  
  if (priceMinSlider && priceMaxSlider) {
    priceMinSlider.addEventListener('input', (e) => {
      activeFilters.priceMin = parseInt(e.target.value);
      if (priceMinInput) priceMinInput.value = e.target.value;
      applyFilters();
    });
    
    priceMaxSlider.addEventListener('input', (e) => {
      activeFilters.priceMax = parseInt(e.target.value);
      if (priceMaxInput) priceMaxInput.value = e.target.value;
      applyFilters();
    });
  }
  
  if (priceMinInput && priceMaxInput) {
    priceMinInput.addEventListener('input', (e) => {
      activeFilters.priceMin = parseInt(e.target.value) || 0;
      if (priceMinSlider) priceMinSlider.value = e.target.value;
      applyFilters();
    });
    
    priceMaxInput.addEventListener('input', (e) => {
      activeFilters.priceMax = parseInt(e.target.value) || 200;
      if (priceMaxSlider) priceMaxSlider.value = e.target.value;
      applyFilters();
    });
  }
  
  // Recherche
  const searchInput = document.querySelector('.search-input');
  if (searchInput) {
    searchInput.addEventListener('input', debounce((e) => {
      activeFilters.search = e.target.value;
      applyFilters();
    }, 300));
  }
  
  // Effacer tous les filtres
  const clearFiltersBtn = document.querySelector('.filters__clear');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      clearAllFilters();
    });
  }
  
  // Tri
  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      sortProducts(e.target.value);
    });
  }
}

function clearAllFilters() {
  // Réinitialiser les filtres
  activeFilters = {
    category: [],
    size: [],
    color: [],
    condition: [],
    priceMin: 0,
    priceMax: 200,
    search: ''
  };
  
  // Réinitialiser l'interface
  document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
    checkbox.checked = false;
  });
  
  document.querySelectorAll('.color-filter').forEach(button => {
    button.classList.remove('color-filter--active');
  });
  
  const priceMinSlider = document.getElementById('price-min');
  const priceMaxSlider = document.getElementById('price-max');
  const priceMinInput = document.getElementById('price-min-input');
  const priceMaxInput = document.getElementById('price-max-input');
  
  if (priceMinSlider) priceMinSlider.value = 0;
  if (priceMaxSlider) priceMaxSlider.value = 200;
  if (priceMinInput) priceMinInput.value = '';
  if (priceMaxInput) priceMaxInput.value = '';
  
  const searchInput = document.querySelector('.search-input');
  if (searchInput) searchInput.value = '';
  
  // Réappliquer les filtres
  applyFilters();
}

function sortProducts(sortType) {
  switch (sortType) {
    case 'price-low':
      filteredProducts.sort((a, b) => a.price - b.price);
      break;
    case 'price-high':
      filteredProducts.sort((a, b) => b.price - a.price);
      break;
    case 'newest':
      filteredProducts.sort((a, b) => b.id.localeCompare(a.id));
      break;
    case 'oldest':
      filteredProducts.sort((a, b) => a.id.localeCompare(b.id));
      break;
    default:
      // Popularité (par défaut, tri par ID)
      filteredProducts.sort((a, b) => a.id.localeCompare(b.id));
  }
  
  currentPage = 1;
  updateProductsDisplay();
}

// ===== PAGINATION =====
function updatePagination() {
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const paginationContainer = document.querySelector('.pagination');
  
  if (!paginationContainer) return;
  
  let paginationHTML = `
    <button class="pagination__btn pagination__btn--prev" ${currentPage === 1 ? 'disabled' : ''}>
      Précédent
    </button>
    <div class="pagination__pages">
  `;
  
  // Générer les pages
  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      paginationHTML += `
        <button class="pagination__page ${i === currentPage ? 'pagination__page--active' : ''}" data-page="${i}">
          ${i}
        </button>
      `;
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      paginationHTML += '<span class="pagination__dots">...</span>';
    }
  }
  
  paginationHTML += `
    </div>
    <button class="pagination__btn pagination__btn--next" ${currentPage === totalPages ? 'disabled' : ''}>
      Suivant
    </button>
  `;
  
  paginationContainer.innerHTML = paginationHTML;
  
  // Ajouter les événements
  initPaginationEvents();
}

function initPaginationEvents() {
  document.querySelectorAll('.pagination__page').forEach(button => {
    button.addEventListener('click', () => {
      currentPage = parseInt(button.dataset.page);
      updateProductsDisplay();
    });
  });
  
  document.querySelector('.pagination__btn--prev').addEventListener('click', () => {
    if (currentPage > 1) {
      currentPage--;
      updateProductsDisplay();
    }
  });
  
  document.querySelector('.pagination__btn--next').addEventListener('click', () => {
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      updateProductsDisplay();
    }
  });
}

// ===== ÉVÉNEMENTS DES PRODUITS =====
function initProductEvents() {
  // Les événements sont déjà gérés dans main.js via event delegation
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('🛍️ Page boutique initialisée');
  
  // Initialiser les filtres
  initFilters();
  
  // Afficher les produits
  updateProductsDisplay();
  
  // Initialiser la pagination
  updatePagination();
});

// ===== FONCTION UTILITAIRE =====
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
} 