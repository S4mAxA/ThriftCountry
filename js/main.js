// ===== VARIABLES GLOBALES =====
let cartItems = [];
let favorites = [];

// ===== FONCTIONS UTILITAIRES =====
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

function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification--${type}`;
  notification.textContent = message;
  
  // Styles pour la notification
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    z-index: 10000;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    max-width: 300px;
  `;
  
  // Couleurs selon le type
  if (type === 'success') {
    notification.style.backgroundColor = '#4caf50';
  } else if (type === 'error') {
    notification.style.backgroundColor = '#f44336';
  } else {
    notification.style.backgroundColor = '#2196f3';
  }
  
  document.body.appendChild(notification);
  
  // Animation d'entrée
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Suppression automatique
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// ===== GESTION DU PANIER =====
function addToCart(productId, productName, price, image) {
  const existingItem = cartItems.find(item => item.id === productId);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cartItems.push({
      id: productId,
      name: productName,
      price: price,
      image: image,
      quantity: 1
    });
  }
  
  updateCartCount();
  saveCartToLocalStorage();
  showNotification(`${productName} ajouté au panier`, 'success');
}

function removeFromCart(productId) {
  cartItems = cartItems.filter(item => item.id !== productId);
  updateCartCount();
  saveCartToLocalStorage();
  showNotification('Article retiré du panier', 'info');
}

function updateCartCount() {
  const cartCount = document.querySelector('.cart-count');
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  
  if (cartCount) {
    cartCount.textContent = totalItems;
    cartCount.style.display = totalItems > 0 ? 'block' : 'none';
  }
}

function saveCartToLocalStorage() {
  localStorage.setItem('thriftCountryCart', JSON.stringify(cartItems));
}

function loadCartFromLocalStorage() {
  const savedCart = localStorage.getItem('thriftCountryCart');
  if (savedCart) {
    cartItems = JSON.parse(savedCart);
    updateCartCount();
  }
}

// ===== GESTION DES FAVORIS =====
function toggleFavorite(productId, productName) {
  const index = favorites.indexOf(productId);
  
  if (index > -1) {
    favorites.splice(index, 1);
    showNotification(`${productName} retiré des favoris`, 'info');
  } else {
    favorites.push(productId);
    showNotification(`${productName} ajouté aux favoris`, 'success');
  }
  
  saveFavoritesToLocalStorage();
  updateFavoriteButtons();
}

function saveFavoritesToLocalStorage() {
  localStorage.setItem('thriftCountryFavorites', JSON.stringify(favorites));
}

function loadFavoritesFromLocalStorage() {
  const savedFavorites = localStorage.getItem('thriftCountryFavorites');
  if (savedFavorites) {
    favorites = JSON.parse(savedFavorites);
  }
}

function updateFavoriteButtons() {
  const favoriteButtons = document.querySelectorAll('.favorite-btn');
  
  favoriteButtons.forEach(button => {
    const productCard = button.closest('.product-card');
    const productId = productCard.dataset.productId;
    
    if (favorites.includes(productId)) {
      button.classList.add('favorite-btn--active');
      button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      `;
    } else {
      button.classList.remove('favorite-btn--active');
      button.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      `;
    }
  });
}

// ===== NAVIGATION MOBILE =====
function initMobileMenu() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navMenu = document.querySelector('.nav__menu');
  
  if (mobileMenuBtn && navMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('nav__menu--open');
      mobileMenuBtn.classList.toggle('mobile-menu-btn--active');
    });
    
    // Fermer le menu en cliquant sur un lien
    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('nav__menu--open');
        mobileMenuBtn.classList.remove('mobile-menu-btn--active');
      });
    });
  }
}

// ===== ANIMATIONS AU SCROLL =====
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observer les éléments à animer
  const elementsToAnimate = document.querySelectorAll('.product-card, .section__header, .hero__content');
  elementsToAnimate.forEach(el => observer.observe(el));
}

// ===== RECHERCHE =====
function initSearch() {
  const searchBtn = document.querySelector('.search-btn');
  
  if (searchBtn) {
    searchBtn.addEventListener('click', () => {
      showSearchModal();
    });
  }
}

function showSearchModal() {
  const modal = document.createElement('div');
  modal.className = 'search-modal';
  modal.innerHTML = `
    <div class="search-modal__overlay">
      <div class="search-modal__content">
        <div class="search-modal__header">
          <h3>Rechercher</h3>
          <button class="search-modal__close">&times;</button>
        </div>
        <div class="search-modal__body">
          <input type="text" placeholder="Rechercher un produit..." class="search-input">
          <div class="search-suggestions">
            <div class="suggestion-category">
              <h4>Catégories populaires</h4>
              <div class="suggestion-tags">
                <span class="tag">Robes</span>
                <span class="tag">Jeans</span>
                <span class="tag">Chemises</span>
                <span class="tag">Vestes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  
  // Styles pour le modal
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  const content = modal.querySelector('.search-modal__content');
  content.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 2rem;
    width: 90%;
    max-width: 500px;
    max-height: 80vh;
    overflow-y: auto;
  `;
  
  document.body.appendChild(modal);
  
  // Focus sur l'input
  const searchInput = modal.querySelector('.search-input');
  searchInput.focus();
  
  // Fermer le modal
  const closeBtn = modal.querySelector('.search-modal__close');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  // Fermer en cliquant sur l'overlay
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
  
  // Recherche en temps réel
  searchInput.addEventListener('input', debounce((e) => {
    const query = e.target.value.toLowerCase();
    // Ici vous pourriez implémenter la logique de recherche
    console.log('Recherche:', query);
  }, 300));
}

// ===== GESTION DES ÉVÉNEMENTS =====
function initEventListeners() {
  // Boutons "Ajouter au panier"
  document.addEventListener('click', (e) => {
    if (e.target.matches('.btn--small') && e.target.textContent.includes('Ajouter au panier')) {
      e.preventDefault();
      const productCard = e.target.closest('.product-card');
      const productId = productCard.dataset.productId || 'product-' + Math.random().toString(36).substr(2, 9);
      const productName = productCard.querySelector('h3').textContent;
      const priceText = productCard.querySelector('.product-card__price').textContent;
      const price = parseFloat(priceText.replace('€', '').trim());
      const image = productCard.querySelector('img').src;
      
      addToCart(productId, productName, price, image);
    }
  });
  
  // Boutons favoris
  document.addEventListener('click', (e) => {
    if (e.target.closest('.favorite-btn')) {
      e.preventDefault();
      const productCard = e.target.closest('.product-card');
      const productId = productCard.dataset.productId || 'product-' + Math.random().toString(36).substr(2, 9);
      const productName = productCard.querySelector('h3').textContent;
      
      toggleFavorite(productId, productName);
    }
  });
  
  // Bouton panier
  const cartBtn = document.querySelector('.cart-btn');
  if (cartBtn) {
    cartBtn.addEventListener('click', () => {
      showCartModal();
    });
  }
  
  // Navigation smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ===== MODAL PANIER =====
function showCartModal() {
  const modal = document.createElement('div');
  modal.className = 'cart-modal';
  
  let cartHTML = `
    <div class="cart-modal__overlay">
      <div class="cart-modal__content">
        <div class="cart-modal__header">
          <h3>Mon Panier (${cartItems.length} article${cartItems.length > 1 ? 's' : ''})</h3>
          <button class="cart-modal__close">&times;</button>
        </div>
        <div class="cart-modal__body">
  `;
  
  if (cartItems.length === 0) {
    cartHTML += `
      <div class="cart-empty">
        <p>Votre panier est vide</p>
        <a href="#boutique" class="btn btn--primary">Continuer mes achats</a>
      </div>
    `;
  } else {
    cartHTML += `
      <div class="cart-items">
    `;
    
    let total = 0;
    cartItems.forEach(item => {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
      
      cartHTML += `
        <div class="cart-item" data-id="${item.id}">
          <img src="${item.image}" alt="${item.name}" class="cart-item__image">
          <div class="cart-item__details">
            <h4>${item.name}</h4>
            <p class="cart-item__price">€${item.price}</p>
            <div class="cart-item__quantity">
              <button class="quantity-btn" data-action="decrease">-</button>
              <span>${item.quantity}</span>
              <button class="quantity-btn" data-action="increase">+</button>
            </div>
          </div>
          <button class="cart-item__remove">&times;</button>
        </div>
      `;
    });
    
    cartHTML += `
      </div>
      <div class="cart-summary">
        <div class="cart-total">
          <span>Total:</span>
          <span class="cart-total__amount">€${total.toFixed(2)}</span>
        </div>
        <button class="btn btn--primary cart-checkout">Passer la commande</button>
      </div>
    `;
  }
  
  cartHTML += `
        </div>
      </div>
    </div>
  `;
  
  modal.innerHTML = cartHTML;
  
  // Styles pour le modal
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  
  const content = modal.querySelector('.cart-modal__content');
  content.style.cssText = `
    background: white;
    border-radius: 12px;
    padding: 2rem;
    width: 90%;
    max-width: 600px;
    max-height: 80vh;
    overflow-y: auto;
  `;
  
  document.body.appendChild(modal);
  
  // Événements du panier
  const closeBtn = modal.querySelector('.cart-modal__close');
  closeBtn.addEventListener('click', () => {
    document.body.removeChild(modal);
  });
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      document.body.removeChild(modal);
    }
  });
  
  // Gestion des quantités et suppression
  modal.addEventListener('click', (e) => {
    if (e.target.matches('.quantity-btn')) {
      const action = e.target.dataset.action;
      const itemId = e.target.closest('.cart-item').dataset.id;
      const item = cartItems.find(item => item.id === itemId);
      
      if (action === 'increase') {
        item.quantity += 1;
      } else if (action === 'decrease' && item.quantity > 1) {
        item.quantity -= 1;
      }
      
      saveCartToLocalStorage();
      showCartModal(); // Recharger le modal
    }
    
    if (e.target.matches('.cart-item__remove')) {
      const itemId = e.target.closest('.cart-item').dataset.id;
      removeFromCart(itemId);
      showCartModal(); // Recharger le modal
    }
  });
}

// ===== INITIALISATION =====
document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Thrift Country - Site e-commerce initialisé');
  
  // Charger les données sauvegardées
  loadCartFromLocalStorage();
  loadFavoritesFromLocalStorage();
  
  // Initialiser les fonctionnalités
  initMobileMenu();
  initSearch();
  initScrollAnimations();
  initEventListeners();
  
  // Mettre à jour l'interface
  updateCartCount();
  updateFavoriteButtons();
  
  // Ajouter des data-product-id aux cartes produits
  document.querySelectorAll('.product-card').forEach((card, index) => {
    card.dataset.productId = `product-${index + 1}`;
  });
});

// ===== OBSERVATEUR DE PERFORMANCE =====
if ('performance' in window) {
  window.addEventListener('load', () => {
    setTimeout(() => {
      const perfData = performance.getEntriesByType('navigation')[0];
      console.log('📊 Performance:', {
        'Temps de chargement total': Math.round(perfData.loadEventEnd - perfData.loadEventStart) + 'ms',
        'Temps de réponse DOM': Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart) + 'ms'
      });
    }, 0);
  });
} 