/**
 * ANTIXORCAR.COM - Responsive Testimonial & Showcase Carousel
 * Smooth transitions, touch swipe support for mobile, and bullet navigation.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTestimonialsCarousel();
});

function initTestimonialsCarousel() {
  const container = document.getElementById('testimonials-carousel');
  const track = document.getElementById('testimonials-track');
  const prevBtn = document.getElementById('testimonial-prev');
  const nextBtn = document.getElementById('testimonial-next');
  const dotsContainer = document.getElementById('testimonial-dots');

  if (!track) return;

  const slides = track.children;
  const totalSlides = slides.length;
  let currentIndex = 0;
  let autoPlayTimer = null;

  // Determine how many slides are visible at once based on window width
  function getVisibleSlidesCount() {
    if (window.innerWidth >= 1024) return 3;
    if (window.innerWidth >= 640) return 2;
    return 1;
  }

  function getMaxIndex() {
    const visibleCount = getVisibleSlidesCount();
    return Math.max(0, totalSlides - visibleCount);
  }

  function updateCarousel() {
    const maxIdx = getMaxIndex();
    if (currentIndex > maxIdx) currentIndex = maxIdx;
    if (currentIndex < 0) currentIndex = 0;

    const visibleCount = getVisibleSlidesCount();
    const slideWidthPercentage = 100 / visibleCount;
    const offset = currentIndex * slideWidthPercentage;

    track.style.transform = `translateX(-${offset}%)`;

    // Update Dots if present
    if (dotsContainer) {
      dotsContainer.querySelectorAll('button').forEach((dot, idx) => {
        if (idx === currentIndex) {
          dot.classList.add('bg-[#F4511E]', 'w-8');
          dot.classList.remove('bg-gray-300', 'w-2.5');
        } else {
          dot.classList.remove('bg-[#F4511E]', 'w-8');
          dot.classList.add('bg-gray-300', 'w-2.5');
        }
      });
    }

    // Toggle button state
    if (prevBtn) {
      prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
    }
    if (nextBtn) {
      nextBtn.style.opacity = currentIndex >= maxIdx ? '0.5' : '1';
    }
  }

  function nextSlide() {
    const maxIdx = getMaxIndex();
    if (currentIndex < maxIdx) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  }

  function prevSlide() {
    const maxIdx = getMaxIndex();
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = maxIdx;
    }
    updateCarousel();
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); resetAutoplay(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); resetAutoplay(); });

  // Touch Swipe for Mobile
  let startX = 0;
  let currentX = 0;
  let isSwiping = false;

  track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isSwiping = true;
    clearInterval(autoPlayTimer);
  }, { passive: true });

  track.addEventListener('touchmove', (e) => {
    if (!isSwiping) return;
    currentX = e.touches[0].clientX;
  }, { passive: true });

  track.addEventListener('touchend', () => {
    if (!isSwiping) return;
    const diff = startX - currentX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
    isSwiping = false;
    resetAutoplay();
  });

  // Autoplay
  function startAutoplay() {
    autoPlayTimer = setInterval(nextSlide, 6500);
  }

  function resetAutoplay() {
    clearInterval(autoPlayTimer);
    startAutoplay();
  }

  if (container) {
    container.addEventListener('mouseenter', () => clearInterval(autoPlayTimer));
    container.addEventListener('mouseleave', () => startAutoplay());
  }

  window.addEventListener('resize', updateCarousel);

  // Initialize
  updateCarousel();
  startAutoplay();
}
