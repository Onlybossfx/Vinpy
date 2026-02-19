// script.js - Vinpy Hotels - Professional Interactions

// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: true,
  offset: 50
});

// ===== MOBILE MENU =====
const mobileBtn = document.getElementById('mobileMenuBtn');
const mainNav = document.getElementById('mainNav');

function toggleMobileMenu() {
  mainNav.classList.toggle('open');
  const icon = mobileBtn.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-times');
}

if (mobileBtn) {
  mobileBtn.addEventListener('click', toggleMobileMenu);
}

// Close mobile menu when clicking a link
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    if (mainNav.classList.contains('open')) {
      toggleMobileMenu();
    }
  });
});

// ===== HERO SLIDER (no controls, live background) =====
const heroSlider = new Swiper('#heroSlider', {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  }
  // No pagination, no navigation buttons
});

// ===== ROOMS SLIDER (with controls) =====
const roomsSlider = new Swiper('#roomsSlider', {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

// ===== PHOTOSWIPE LIGHTBOX FOR GALLERY =====
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: '.gallery-item',
  pswpModule: PhotoSwipe
});
lightbox.init();

// Add click event to gallery items
document.querySelectorAll('.gallery-item').forEach((item, index) => {
  item.addEventListener('click', (e) => {
    lightbox.loadAndOpen(index);
  });
});

// ===== CONTACT FORM (demo) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry! Our team will respond within 24 hours.');
    contactForm.reset();
  });
}

// ===== SCROLL INDICATOR =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
  scrollIndicator.addEventListener('click', () => {
    document.getElementById('rooms').scrollIntoView({ behavior: 'smooth' });
  });
}

// ===== ACTIVE NAVIGATION HIGHLIGHT =====
const sections = document.querySelectorAll('section[id]');

function highlightActiveNav() {
  const scrollY = window.scrollY + 100; // offset for header

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.main-nav a[href="#${sectionId}"]`);

    if (navLink) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLink.classList.add('active');
      } else {
        navLink.classList.remove('active');
      }
    }
  });
}

window.addEventListener('scroll', highlightActiveNav);
window.addEventListener('load', highlightActiveNav);

// ===== DEMO BOOKING BUTTONS =====
document.querySelectorAll('.btn-primary, .btn-outline').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (btn.closest('form')) return; // ignore form submit buttons
    e.preventDefault();
    alert('✨ Vinpy Hotels demo — thank you for your interest. Our team would be honored to welcome you.');
  });
});