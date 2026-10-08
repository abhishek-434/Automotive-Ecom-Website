/**
 * ANTIXORCAR.COM - Search & Advanced Multi-Filter Engine
 * Powers the homepage search hero panel and the full inventory filter on cars.html.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeroSearchPanel();
  initInventoryPageFilters();
});

/* ==========================================================================
   1. HERO SEARCH / DISCOVERY PANEL (Homepage)
   ========================================================================== */
function initHeroSearchPanel() {
  const searchForm = document.getElementById('hero-search-form');
  const makeSelect = document.getElementById('hero-filter-make');
  const modelSelect = document.getElementById('hero-filter-model');
  const tabBuy = document.getElementById('hero-tab-buy');
  const tabSell = document.getElementById('hero-tab-sell');

  // Handle Tab Switch
  if (tabBuy && tabSell) {
    tabBuy.addEventListener('click', () => {
      tabBuy.classList.add('bg-[#F4511E]', 'text-white');
      tabBuy.classList.remove('text-gray-600', 'hover:text-black');
      tabSell.classList.remove('bg-[#F4511E]', 'text-white');
      tabSell.classList.add('text-gray-600', 'hover:text-black');
      if (searchForm) searchForm.dataset.mode = 'buy';
    });

    tabSell.addEventListener('click', () => {
      window.location.href = 'sell-car.html';
    });
  }

  // Populate models when make changes
  if (makeSelect && modelSelect) {
    const makeModels = {
      'Mercedes-Benz': ['GLE 350', 'C-Class', 'S-Class', 'G-Wagon'],
      'Porsche': ['911 Carrera', 'Taycan 4S', 'Panamera', 'Cayenne'],
      'BMW': ['5 Series', 'M8 Competition', 'X5', '3 Series'],
      'Range Rover': ['Evoque', 'Velar', 'Sport', 'Defender'],
      'Audi': ['RS7 Sportback', 'Q8', 'e-tron GT', 'A6'],
      'Toyota': ['Land Cruiser 300', 'Supra', 'RAV4', 'Camry'],
      'Ford': ['F-150 Raptor', 'Mustang Mach-E', 'Bronco'],
      'Lexus': ['LC 500', 'RX 350', 'GX 550']
    };

    makeSelect.addEventListener('change', () => {
      const selectedMake = makeSelect.value;
      modelSelect.innerHTML = '<option value="">Any Model</option>';
      if (makeModels[selectedMake]) {
        makeModels[selectedMake].forEach(m => {
          const opt = document.createElement('option');
          opt.value = m;
          opt.textContent = m;
          modelSelect.appendChild(opt);
        });
      }
    });
  }

  // Search submission
  if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const make = makeSelect ? makeSelect.value : '';
      const model = modelSelect ? modelSelect.value : '';
      const price = document.getElementById('hero-filter-price') ? document.getElementById('hero-filter-price').value : '';
      const location = document.getElementById('hero-filter-location') ? document.getElementById('hero-filter-location').value : '';

      const queryParams = new URLSearchParams();
      if (make) queryParams.set('make', make);
      if (model) queryParams.set('model', model);
      if (price) queryParams.set('maxPrice', price);
      if (location) queryParams.set('location', location);

      window.location.href = `cars.html?${queryParams.toString()}`;
    });
  }
}

/* ==========================================================================
   2. INVENTORY CARS PAGE FILTERS (cars.html)
   ========================================================================== */
async function initInventoryPageFilters() {
  const inventoryGrid = document.getElementById('inventory-cars-grid');
  if (!inventoryGrid) return;

  const cars = await fetchCarsData();
  const urlParams = new URLSearchParams(window.location.search);

  // Filter Elements
  const keywordInput = document.getElementById('filter-keyword');
  const makeSelect = document.getElementById('filter-make');
  const modelSelect = document.getElementById('filter-model');
  const bodyTypeSelect = document.getElementById('filter-body');
  const fuelSelect = document.getElementById('filter-fuel');
  const transmissionSelect = document.getElementById('filter-transmission');
  const conditionSelect = document.getElementById('filter-condition');
  const priceRange = document.getElementById('filter-price-range');
  const priceDisplay = document.getElementById('filter-price-val');
  const sortSelect = document.getElementById('inventory-sort');
  const resetBtn = document.getElementById('filter-reset-btn');
  const resultsCounter = document.getElementById('inventory-count');

  // Pre-fill from URL params
  if (urlParams.get('make') && makeSelect) makeSelect.value = urlParams.get('make');
  if (urlParams.get('category') && bodyTypeSelect) bodyTypeSelect.value = urlParams.get('category');
  if (urlParams.get('maxPrice') && priceRange) {
    priceRange.value = urlParams.get('maxPrice');
    if (priceDisplay) priceDisplay.textContent = `$${parseInt(priceRange.value, 10).toLocaleString()}`;
  }

  // Price slider event
  if (priceRange && priceDisplay) {
    priceRange.addEventListener('input', () => {
      priceDisplay.textContent = `$${parseInt(priceRange.value, 10).toLocaleString()}`;
      applyFilters();
    });
  }

  // Quick filter tags (Pills)
  document.querySelectorAll('[data-filter-pill]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-filter-pill]').forEach(b => {
        b.classList.remove('bg-[#F4511E]', 'text-white');
        b.classList.add('bg-white', 'text-gray-700');
      });
      btn.classList.add('bg-[#F4511E]', 'text-white');
      btn.classList.remove('bg-white', 'text-gray-700');

      const pillType = btn.getAttribute('data-filter-pill');
      if (bodyTypeSelect) {
        bodyTypeSelect.value = pillType === 'all' ? '' : pillType;
      }
      applyFilters();
    });
  });

  // Event Listeners for inputs
  [keywordInput, makeSelect, modelSelect, bodyTypeSelect, fuelSelect, transmissionSelect, conditionSelect, sortSelect].forEach(el => {
    if (el) el.addEventListener('change', applyFilters);
    if (el === keywordInput) el.addEventListener('input', applyFilters);
  });

  // Reset Button
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      if (keywordInput) keywordInput.value = '';
      if (makeSelect) makeSelect.value = '';
      if (modelSelect) modelSelect.value = '';
      if (bodyTypeSelect) bodyTypeSelect.value = '';
      if (fuelSelect) fuelSelect.value = '';
      if (transmissionSelect) transmissionSelect.value = '';
      if (conditionSelect) conditionSelect.value = '';
      if (priceRange) {
        priceRange.value = 300000;
        if (priceDisplay) priceDisplay.textContent = '$300,000';
      }
      if (sortSelect) sortSelect.value = 'recommended';

      // Reset pill buttons
      document.querySelectorAll('[data-filter-pill]').forEach((b, idx) => {
        if (idx === 0) {
          b.classList.add('bg-[#F4511E]', 'text-white');
          b.classList.remove('bg-white', 'text-gray-700');
        } else {
          b.classList.remove('bg-[#F4511E]', 'text-white');
          b.classList.add('bg-white', 'text-gray-700');
        }
      });

      applyFilters();
    });
  }

  function applyFilters() {
    let filtered = [...cars];

    // Filter by Favorites (if user opened from saved cars)
    if (urlParams.get('favorites') === 'true') {
      const favs = window.getFavorites ? window.getFavorites() : JSON.parse(localStorage.getItem('antixor_favorites') || '[]');
      filtered = filtered.filter(c => favs.includes(c.id));
    }

    // Keyword
    const kw = keywordInput ? keywordInput.value.toLowerCase().trim() : '';
    if (kw) {
      filtered = filtered.filter(c => 
        c.make.toLowerCase().includes(kw) || 
        c.model.toLowerCase().includes(kw) || 
        c.location.toLowerCase().includes(kw) ||
        c.bodyType.toLowerCase().includes(kw)
      );
    }

    // Make
    const selectedMake = makeSelect ? makeSelect.value : '';
    if (selectedMake) {
      filtered = filtered.filter(c => c.make === selectedMake);
    }

    // Model
    const selectedModel = modelSelect ? modelSelect.value : '';
    if (selectedModel) {
      filtered = filtered.filter(c => c.model.toLowerCase().includes(selectedModel.toLowerCase()));
    }

    // Body Type
    const selectedBody = bodyTypeSelect ? bodyTypeSelect.value : '';
    if (selectedBody) {
      filtered = filtered.filter(c => c.bodyType.toLowerCase() === selectedBody.toLowerCase());
    }

    // Fuel
    const selectedFuel = fuelSelect ? fuelSelect.value : '';
    if (selectedFuel) {
      filtered = filtered.filter(c => c.fuelType.toLowerCase() === selectedFuel.toLowerCase());
    }

    // Transmission
    const selectedTrans = transmissionSelect ? transmissionSelect.value : '';
    if (selectedTrans) {
      filtered = filtered.filter(c => c.transmission.toLowerCase() === selectedTrans.toLowerCase());
    }

    // Condition
    const selectedCond = conditionSelect ? conditionSelect.value : '';
    if (selectedCond) {
      filtered = filtered.filter(c => c.condition.toLowerCase() === selectedCond.toLowerCase());
    }

    // Price Max
    const maxP = priceRange ? parseInt(priceRange.value, 10) : 300000;
    filtered = filtered.filter(c => c.price <= maxP);

    // Sorting
    const sortVal = sortSelect ? sortSelect.value : 'recommended';
    if (sortVal === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (sortVal === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (sortVal === 'newest') {
      filtered.sort((a, b) => b.year - a.year);
    } else if (sortVal === 'mileage') {
      filtered.sort((a, b) => a.mileage - b.mileage);
    }

    // Update Counter
    if (resultsCounter) {
      resultsCounter.textContent = `${filtered.length} Verified Cars`;
    }

    // Render Cards
    if (filtered.length === 0) {
      inventoryGrid.innerHTML = `
        <div class="col-span-full py-16 text-center bg-white rounded-3xl p-8 border border-gray-100">
          <div class="w-16 h-16 rounded-full bg-orange-50 text-[#F4511E] flex items-center justify-center mx-auto mb-4 text-2xl">
            <i class="fa-solid fa-car-burst"></i>
          </div>
          <h3 class="text-xl font-bold text-[#071A2B] mb-2">No Vehicles Match Your Search</h3>
          <p class="text-gray-500 text-sm max-w-md mx-auto mb-6">Try adjusting your filters, expanding your budget range, or clearing specific options.</p>
          <button onclick="document.getElementById('filter-reset-btn').click()" class="btn-primary px-6 py-2.5 rounded-xl text-xs uppercase tracking-wider font-bold">
            Reset All Filters
          </button>
        </div>
      `;
    } else {
      inventoryGrid.innerHTML = filtered.map(c => createCarCardHTML(c, false)).join('');
    }
  }

  // Initial execution
  applyFilters();
}
