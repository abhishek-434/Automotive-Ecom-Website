/**
 * ANTIXORCAR.COM - Main Application Logic
 * Global utilities, Navigation, Auth State, Toast Notifications,
 * Wishlist/Favorites, Stats Counter, and Interactive Modals.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initAuthState();
  initWishlistBadge();
  initStatsCounter();
  initVideoModal();
  initValuationWidget();
});

/* ==========================================================================
   1. NAVBAR SCROLL EFFECT
   ========================================================================== */
function initNavbar() {
  const navbar = document.getElementById('main-navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. MOBILE NAVIGATION MENU
   ========================================================================== */
function initMobileMenu() {
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu-dropdown');
  const closeBtn = document.getElementById('mobile-menu-close');

  if (!mobileToggle || !mobileMenu) return;

  const toggleMenu = () => {
    const isHidden = mobileMenu.classList.contains('hidden');
    if (isHidden) {
      mobileMenu.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  mobileToggle.addEventListener('click', toggleMenu);
  if (closeBtn) closeBtn.addEventListener('click', toggleMenu);

  // Close when clicking any nav link
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.style.overflow = '';
    });
  });
}

/* ==========================================================================
   3. AUTHENTICATION STATE SIMULATION
   ========================================================================== */
function initAuthState() {
  const userAccountContainer = document.getElementById('user-nav-account');
  const loggedUser = JSON.parse(localStorage.getItem('antixor_user') || 'null');

  if (!userAccountContainer) return;

  if (loggedUser && loggedUser.isLoggedIn) {
    userAccountContainer.innerHTML = `
      <div class="relative group">
        <button id="user-profile-btn" class="flex items-center gap-2 p-1.5 rounded-full hover:bg-white/10 transition-colors focus:outline-none" aria-label="User Account">
          <div class="w-8 h-8 rounded-full bg-[#F4511E] text-white flex items-center justify-center font-bold text-xs uppercase shadow-md">
            ${loggedUser.name ? loggedUser.name.charAt(0) : 'U'}
          </div>
          <span class="text-xs font-medium text-white hidden md:inline-block max-w-[90px] truncate">${loggedUser.name || 'Account'}</span>
          <i class="fa-solid fa-chevron-down text-[10px] text-gray-400 hidden md:inline-block"></i>
        </button>
        <div class="absolute right-0 top-full mt-2 w-52 bg-[#071A2B] border border-white/10 rounded-xl shadow-2xl py-2 hidden group-hover:block transition-all z-50">
          <div class="px-4 py-2 border-b border-white/10">
            <p class="text-xs text-gray-400">Signed in as</p>
            <p class="text-sm font-semibold text-white truncate">${loggedUser.email}</p>
          </div>
          <a href="cars.html" class="flex items-center gap-2 px-4 py-2.5 text-xs text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
            <i class="fa-solid fa-car text-[#F4511E]"></i> Browse Inventory
          </a>
          <a href="javascript:void(0)" onclick="openSavedCarsModal()" class="flex items-center gap-2 px-4 py-2.5 text-xs text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
            <i class="fa-solid fa-heart text-[#F4511E]"></i> Saved Cars (<span class="saved-count-badge">0</span>)
          </a>
          <a href="sell-car.html" class="flex items-center gap-2 px-4 py-2.5 text-xs text-gray-300 hover:text-white hover:bg-white/5 transition-colors">
            <i class="fa-solid fa-tag text-[#F4511E]"></i> Sell My Vehicle
          </a>
          <div class="border-t border-white/10 my-1"></div>
          <button onclick="handleLogout()" class="w-full text-left flex items-center gap-2 px-4 py-2.5 text-xs text-red-400 hover:text-red-300 hover:bg-white/5 transition-colors">
            <i class="fa-solid fa-arrow-right-from-bracket"></i> Sign Out
          </button>
        </div>
      </div>
    `;
  } else {
    userAccountContainer.innerHTML = `
      <a href="login.html" class="p-2 text-gray-300 hover:text-white transition-colors" title="Sign In" aria-label="Sign In">
        <i class="fa-regular fa-user text-base"></i>
      </a>
    `;
  }
}

window.handleLogout = function() {
  localStorage.removeItem('antixor_user');
  showToast('You have been signed out.', 'info');
  setTimeout(() => {
    window.location.reload();
  }, 600);
};

/* ==========================================================================
   4. WISHLIST / FAVORITES SYSTEM
   ========================================================================== */
function getFavorites() {
  return JSON.parse(localStorage.getItem('antixor_favorites') || '[]');
}

window.toggleFavorite = function(carId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  let favorites = getFavorites();
  const index = favorites.indexOf(carId);
  let added = false;

  if (index > -1) {
    favorites.splice(index, 1);
    showToast('Removed from saved cars', 'info');
  } else {
    favorites.push(carId);
    showToast('Saved to your favorites!', 'success');
    added = true;
  }

  localStorage.setItem('antixor_favorites', JSON.stringify(favorites));
  updateFavoriteIcons();
  initWishlistBadge();
  return added;
};

window.isFavorite = function(carId) {
  return getFavorites().includes(carId);
};

function initWishlistBadge() {
  const favorites = getFavorites();
  document.querySelectorAll('.saved-count-badge').forEach(badge => {
    badge.textContent = favorites.length;
  });
}

function updateFavoriteIcons() {
  const favorites = getFavorites();
  document.querySelectorAll('[data-fav-id]').forEach(btn => {
    const id = btn.getAttribute('data-fav-id');
    const icon = btn.querySelector('i');
    if (favorites.includes(id)) {
      btn.classList.add('text-[#F4511E]');
      btn.classList.remove('text-gray-400');
      if (icon) {
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
      }
    } else {
      btn.classList.remove('text-[#F4511E]');
      btn.classList.add('text-gray-400');
      if (icon) {
        icon.classList.add('fa-regular');
        icon.classList.remove('fa-solid');
      }
    }
  });
}

window.openSavedCarsModal = function() {
  const favorites = getFavorites();
  if (favorites.length === 0) {
    showToast('You haven\'t saved any cars yet. Browse cars to add favorites!', 'info');
    return;
  }
  window.location.href = `cars.html?favorites=true`;
};

/* ==========================================================================
   5. TOAST NOTIFICATION UTILITY
   ========================================================================== */
window.showToast = function(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-msg';

  let iconHtml = '<i class="fa-solid fa-circle-info text-[#F4511E] text-base"></i>';
  if (type === 'success') {
    iconHtml = '<i class="fa-solid fa-circle-check text-emerald-400 text-base"></i>';
  } else if (type === 'warning') {
    iconHtml = '<i class="fa-solid fa-triangle-exclamation text-amber-400 text-base"></i>';
  }

  toast.innerHTML = `
    ${iconHtml}
    <span class="text-xs font-medium tracking-wide">${message}</span>
    <button class="ml-auto text-gray-400 hover:text-white pl-2 focus:outline-none" onclick="this.parentElement.remove()">
      <i class="fa-solid fa-xmark text-xs"></i>
    </button>
  `;

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 350);
  }, 3500);
};

/* ==========================================================================
   6. STATS COUNTER ANIMATION (Intersection Observer)
   ========================================================================== */
function initStatsCounter() {
  const statElements = document.querySelectorAll('[data-counter]');
  if (!statElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const targetValue = parseFloat(el.getAttribute('data-counter'));
        const suffix = el.getAttribute('data-suffix') || '';
        const decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
        animateCounter(el, 0, targetValue, 1800, suffix, decimals);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statElements.forEach(el => observer.observe(el));
}

function animateCounter(element, start, end, duration, suffix, decimals) {
  const startTime = performance.now();
  const step = (currentTime) => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const easeOutProgress = 1 - Math.pow(1 - progress, 3);
    const currentValue = start + (end - start) * easeOutProgress;

    element.textContent = (decimals > 0 ? currentValue.toFixed(decimals) : Math.floor(currentValue).toLocaleString()) + suffix;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      element.textContent = (decimals > 0 ? end.toFixed(decimals) : end.toLocaleString()) + suffix;
    }
  };
  requestAnimationFrame(step);
}

/* ==========================================================================
   7. VIDEO MODAL (Hero "Watch Video")
   ========================================================================== */
function initVideoModal() {
  const trigger = document.getElementById('hero-watch-video-btn');
  const modal = document.getElementById('video-modal');
  const closeBtn = document.getElementById('video-modal-close');
  const iframe = document.getElementById('video-modal-iframe');

  if (!trigger || !modal) return;

  const videoUrl = "https://www.youtube-nocookie.com/embed/Pjh7jK2B96Q?autoplay=1&mute=0&rel=0";

  trigger.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (iframe) iframe.src = videoUrl;
  });

  const closeModal = () => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (iframe) iframe.src = '';
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}

/* ==========================================================================
   8. MINI VALUATION WIDGET ("Get Your Car Valued in 2 Minutes")
   ========================================================================== */
function initValuationWidget() {
  const form = document.getElementById('mini-valuation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('valuation-car-model');
    const model = input ? input.value.trim() : '';

    if (!model) {
      showToast('Please enter your car make and model', 'warning');
      return;
    }

    // Generate realistic estimated valuation range
    const baseVal = Math.floor(Math.random() * 25000) + 35000;
    const highVal = baseVal + 7500;

    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay';
    modal.innerHTML = `
      <div class="bg-[#071A2B] border border-white/10 rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative animate-float">
        <button class="absolute top-4 right-4 text-gray-400 hover:text-white" onclick="this.closest('.fixed').remove()">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
        <div class="w-12 h-12 rounded-xl bg-[#F4511E]/15 border border-[#F4511E]/30 flex items-center justify-center text-[#F4511E] mb-4">
          <i class="fa-solid fa-chart-line text-xl"></i>
        </div>
        <p class="text-xs uppercase font-semibold text-[#F4511E] tracking-wider mb-1">Instant Market Estimate</p>
        <h3 class="text-xl font-bold text-white mb-2">${model}</h3>
        <p class="text-gray-300 text-xs mb-4">Based on real-time market data from over 10,000 verified sales across our dealer network:</p>
        <div class="bg-[#0B2638] rounded-xl p-4 border border-white/5 mb-6 text-center">
          <p class="text-xs text-gray-400 mb-1">Estimated Private & Dealer Value</p>
          <p class="text-3xl font-extrabold text-[#F4511E]">$${baseVal.toLocaleString()} - $${highVal.toLocaleString()}</p>
          <span class="inline-block mt-2 text-[10px] text-emerald-400 bg-emerald-400/10 px-2.5 py-0.5 rounded-full font-medium">High Demand Vehicle</span>
        </div>
        <div class="flex flex-col gap-2.5">
          <a href="sell-car.html?model=${encodeURIComponent(model)}" class="w-full text-center py-3 rounded-xl btn-primary text-xs uppercase tracking-wider font-bold">
            List Your Car at This Price →
          </a>
          <button onclick="this.closest('.fixed').remove()" class="w-full text-center py-2.5 text-xs text-gray-400 hover:text-white">
            Close
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  });
}
