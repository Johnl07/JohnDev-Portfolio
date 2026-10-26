/**
 * John Dev Portfolio - Main Logic
 * Lightweight, accessible, zero external dependencies.
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initScrollProgress();
  initMobileMenu();
  initWorksFilter();
  initActiveNav();
  initPreviewModal();
  initCopyEmail();
  initContactForm();
  initCurrentYear();
});

/**
 * Theme Toggle (Light & Dark with custom purple/lavender theme)
 */
function initTheme() {
  const toggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Retrieve saved theme or system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }

  function applyTheme(theme) {
    if (theme === 'dark') {
      root.setAttribute('data-theme', 'dark');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-label', 'Switch to light theme');
        toggleBtn.setAttribute('title', 'Switch to light theme');
      }
    } else {
      root.removeAttribute('data-theme');
      if (toggleBtn) {
        toggleBtn.setAttribute('aria-label', 'Switch to dark theme');
        toggleBtn.setAttribute('title', 'Switch to dark theme');
      }
    }
  }
}

/**
 * Reading Scroll Progress Bar
 */
function initScrollProgress() {
  const progressBar = document.querySelector('.scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

/**
 * Mobile Navigation Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Filter Works/Activities by category with count update
 */
function initWorksFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const workCards = document.querySelectorAll('.work-card');

  if (!filterButtons.length || !workCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      workCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/**
 * Highlight active navigation item on scroll
 */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 140;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { passive: true });
}

/**
 * In-Portfolio Live Preview Modal
 */
function initPreviewModal() {
  const modal = document.getElementById('preview-modal');
  const iframe = document.getElementById('preview-iframe');
  const modalTitle = document.getElementById('modal-title');
  const modalBadge = document.getElementById('modal-badge');
  const modalExternalBtn = document.getElementById('modal-external-btn');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal || !iframe) return;

  function openPreview(url, title, badge) {
    if (!url) return;
    iframe.src = url;
    if (modalTitle) modalTitle.textContent = title || 'Activity Preview';
    if (modalBadge) modalBadge.textContent = badge || 'LAB PREVIEW';
    if (modalExternalBtn) modalExternalBtn.href = url;

    modal.classList.add('active');
    document.body.classList.add('modal-open');
  }

  function closePreview() {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
    iframe.src = 'about:blank';
  }

  document.querySelectorAll('[data-preview-url]').forEach(elem => {
    elem.addEventListener('click', (e) => {
      if (e.target.closest('a') && !e.target.closest('.preview-trigger-btn')) {
        return;
      }
      e.preventDefault();
      const url = elem.getAttribute('data-preview-url');
      const title = elem.getAttribute('data-preview-title');
      const badge = elem.getAttribute('data-preview-badge');
      openPreview(url, title, badge);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closePreview);
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closePreview();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closePreview();
    }
  });
}

/**
 * 1-Click Copy Email to Clipboard
 */
function initCopyEmail() {
  const copyBtn = document.getElementById('copy-email-btn');
  if (!copyBtn) return;

  copyBtn.addEventListener('click', () => {
    const email = 'maulajohnlawrence07@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const originalText = copyBtn.innerHTML;
      copyBtn.innerHTML = '&#10003; Copied!';
      copyBtn.style.color = '#2E7D32';

      setTimeout(() => {
        copyBtn.innerHTML = originalText;
        copyBtn.style.color = '';
      }, 2500);
    }).catch(() => {
      // Fallback
      window.location.href = `mailto:${email}`;
    });
  });
}

/**
 * Accessible Contact Form Simulation / Handler
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusMsg = document.getElementById('form-status');

  if (!form || !statusMsg) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const nameInput = document.getElementById('name');
    const senderName = nameInput ? nameInput.value.trim() : 'there';

    statusMsg.textContent = `Thank you, ${senderName}! Your message has been prepared. If integrated with a live backend (such as Formspree in .env.example), it will be delivered directly.`;
    statusMsg.className = 'form-status success';
    statusMsg.style.display = 'block';

    form.reset();

    setTimeout(() => {
      statusMsg.style.display = 'none';
    }, 6000);
  });
}

/**
 * Set Dynamic Copyright Year
 */
function initCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}
