/**
 * ==========================================
 * 資二丙班級資訊站 - 動畫引擎 (animations.js)
 * CSS-only animations — no Anime.js / Motion libraries
 * ==========================================
 */
(function() {
  'use strict';

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // --- Scroll Reveal via IntersectionObserver (CSS transitions handle the rest) ---
  function initScrollReveal() {
    if (prefersReducedMotion) return;
    const targets = document.querySelectorAll(
      '.feature-card, .announcement-card, .guide-card, .event-item, .faq-item, .rule-link-card, .reg-card, .day-group-box, .section-title, .home-quick-info'
    );
    targets.forEach(el => el.classList.add('reveal'));

    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.05 });

    targets.forEach(el => observer.observe(el));
  }

  // --- Ripple Effect (CSS animation) ---
  function initRipple() {
    const targets = document.querySelectorAll('.feature-card, .quick-action-card, .guide-card, .tab-btn, .rule-link-card, .btn-reg-apply, .btn-go-leave');
    targets.forEach(el => {
      el.addEventListener('click', (e) => {
        const rect = el.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const size = Math.max(rect.width, rect.height) * 2;
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = (e.clientX - rect.left - size / 2) + 'px';
        ripple.style.top = (e.clientY - rect.top - size / 2) + 'px';
        el.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  // --- Toast Notifications (CSS animation) ---
  function initToast() {
    window.showToast = function(message, type = 'info') {
      const toast = document.createElement('div');
      toast.className = 'toast toast-' + type;
      toast.textContent = message;
      document.body.appendChild(toast);
      setTimeout(() => toast.remove(), 3000);
    };
  }

  // --- Back to Top Button ---
  function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '\u2191';
    btn.setAttribute('aria-label', '\u56de\u5230\u9802\u90e8');
    btn.setAttribute('type', 'button');
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        btn.classList.add('visible');
      } else {
        btn.classList.remove('visible');
      }
    });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  function initAllAnimations() {
    initScrollReveal();
    initRipple();
    initToast();
    initBackToTop();
  }

  window.initAllAnimations = initAllAnimations;

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllAnimations);
  } else {
    initAllAnimations();
  }
})();