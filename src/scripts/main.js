// Фильтрация портфолио
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

function filterPortfolio(filter) {
  portfolioItems.forEach(item => {
    if (filter === 'all' || item.classList.contains(filter)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const filter = this.getAttribute('data-filter');
      filterPortfolio(filter);
    });
  });
}

// Модальное окно для формы
const contactForm = document.getElementById('contactForm');
const modal = document.getElementById('contactModal');
const modalClose = document.getElementById('modalClose');
const modalOkBtn = document.getElementById('modalOkBtn');

function closeModal() {
  if (modal) modal.style.display = 'none';
}

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    // Отправка через Netlify Forms произойдёт автоматически благодаря атрибуту data-netlify="true"
    // Показываем модалку
    if (modal) modal.style.display = 'flex';
    contactForm.reset();
  });
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modalOkBtn) modalOkBtn.addEventListener('click', closeModal);
if (modal) window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

// Smooth scroll для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
    }
  });
});

// Header смена стиля при скролле
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  if (window.scrollY > 100) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// Мобильное меню
const mobileToggle = document.getElementById('mobileToggle');
const navLinks = document.getElementById('navLinks');
if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = mobileToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  });
}