/**
 * ANTIXORCAR.COM - Financing & Auto Loan Calculator
 * Calculates precise amortization, monthly installments, interest breakdown,
 * and synchronized dual inputs (sliders + text fields).
 */

document.addEventListener('DOMContentLoaded', () => {
  initFinancingCalculator();
});

function initFinancingCalculator() {
  const calcForm = document.getElementById('financing-calculator-form');
  if (!calcForm) return;

  // Elements
  const priceInput = document.getElementById('calc-price');
  const priceSlider = document.getElementById('calc-price-slider');

  const downInput = document.getElementById('calc-down');
  const downSlider = document.getElementById('calc-down-slider');
  const downPercentBadge = document.getElementById('calc-down-percent');

  const termSelect = document.getElementById('calc-term');
  const rateInput = document.getElementById('calc-rate');
  const rateSlider = document.getElementById('calc-rate-slider');

  // Outputs
  const monthlyDisplay = document.getElementById('calc-monthly-payment');
  const principalDisplay = document.getElementById('calc-total-principal');
  const interestDisplay = document.getElementById('calc-total-interest');
  const totalAmountDisplay = document.getElementById('calc-total-amount');

  // Visual breakdown bar
  const barPrincipal = document.getElementById('calc-bar-principal');
  const barInterest = document.getElementById('calc-bar-interest');

  // Check URL params for pre-filling vehicle price
  const urlParams = new URLSearchParams(window.location.search);
  const paramPrice = urlParams.get('price');
  if (paramPrice && priceInput && priceSlider) {
    const val = parseInt(paramPrice, 10);
    if (!isNaN(val)) {
      priceInput.value = val;
      priceSlider.value = val;
      // Default down payment to 20%
      if (downInput && downSlider) {
        const dVal = Math.round(val * 0.2);
        downInput.value = dVal;
        downSlider.max = val;
        downSlider.value = dVal;
      }
    }
  }

  // Sync Price
  if (priceInput && priceSlider) {
    priceInput.addEventListener('input', () => {
      let val = parseFloat(priceInput.value) || 0;
      priceSlider.value = val;
      if (downSlider) downSlider.max = val;
      calculateLoan();
    });
    priceSlider.addEventListener('input', () => {
      priceInput.value = priceSlider.value;
      if (downSlider) downSlider.max = priceSlider.value;
      calculateLoan();
    });
  }

  // Sync Down Payment
  if (downInput && downSlider) {
    downInput.addEventListener('input', () => {
      downSlider.value = downInput.value || 0;
      calculateLoan();
    });
    downSlider.addEventListener('input', () => {
      downInput.value = downSlider.value;
      calculateLoan();
    });
  }

  // Sync Interest Rate
  if (rateInput && rateSlider) {
    rateInput.addEventListener('input', () => {
      rateSlider.value = rateInput.value || 0;
      calculateLoan();
    });
    rateSlider.addEventListener('input', () => {
      rateInput.value = rateSlider.value;
      calculateLoan();
    });
  }

  // Term
  if (termSelect) {
    termSelect.addEventListener('change', calculateLoan);
  }

  // Term Button Pills (if using pill selector)
  document.querySelectorAll('[data-term-months]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-term-months]').forEach(b => {
        b.classList.remove('bg-[#F4511E]', 'text-white');
        b.classList.add('bg-white', 'text-gray-700');
      });
      btn.classList.add('bg-[#F4511E]', 'text-white');
      btn.classList.remove('bg-white', 'text-gray-700');

      if (termSelect) {
        termSelect.value = btn.getAttribute('data-term-months');
      }
      calculateLoan();
    });
  });

  function calculateLoan() {
    const price = parseFloat(priceInput.value) || 0;
    const down = Math.min(parseFloat(downInput.value) || 0, price);
    const principal = Math.max(0, price - down);
    const months = parseInt(termSelect ? termSelect.value : 60, 10) || 60;
    const annualRate = (parseFloat(rateInput.value) || 5.9) / 100;
    const monthlyRate = annualRate / 12;

    // Down payment percent badge
    if (downPercentBadge && price > 0) {
      const pct = Math.round((down / price) * 100);
      downPercentBadge.textContent = `${pct}%`;
    }

    let monthlyPayment = 0;
    let totalInterest = 0;
    let totalPayment = 0;

    if (principal > 0) {
      if (monthlyRate === 0) {
        monthlyPayment = principal / months;
        totalPayment = principal;
        totalInterest = 0;
      } else {
        monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
        totalPayment = monthlyPayment * months;
        totalInterest = totalPayment - principal;
      }
    }

    // Update Outputs
    if (monthlyDisplay) {
      monthlyDisplay.textContent = `$${Math.round(monthlyPayment).toLocaleString()}`;
    }
    if (principalDisplay) {
      principalDisplay.textContent = `$${Math.round(principal).toLocaleString()}`;
    }
    if (interestDisplay) {
      interestDisplay.textContent = `$${Math.round(totalInterest).toLocaleString()}`;
    }
    if (totalAmountDisplay) {
      totalAmountDisplay.textContent = `$${Math.round(totalPayment).toLocaleString()}`;
    }

    // Visual breakdown bar
    if (barPrincipal && barInterest && totalPayment > 0) {
      const principalPct = (principal / totalPayment) * 100;
      const interestPct = (totalInterest / totalPayment) * 100;
      barPrincipal.style.width = `${principalPct}%`;
      barInterest.style.width = `${interestPct}%`;
    }
  }

  // Pre-calculate on load
  calculateLoan();
}

// Financing Application Form Submission Handler
window.handleFinancingApplication = function(e) {
  e.preventDefault();
  window.showToast('Your financing pre-approval application has been received! Our loan specialists will contact you within 2 hours.', 'success');
  e.target.reset();
};
