/**
 * ==========================================
 * 資二丙班級資訊站 - 動畫引擎 (animations.js)
 * 使用 Anime.js v4 + Motion 實現微交互
 * ==========================================
 */

(function() {
  'use strict';

  const { animate, stagger, spring, scroll } = Motion;
  const { createTimeline, createScope, onScroll } = anime;

  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * Page Load Animation (Motion)
   */
  function initPageLoad() {
    if (prefersReducedMotion) return;

    animate('.app-container', {
      opacity: [0, 1],
      y: [16, 0]
    }, {
      duration: 0.5,
      ease: 'easeOut'
    });
  }

  /**
   * Scroll Reveal (Anime.js Scroll Observer)
   */
  function initScrollReveal() {
    if (prefersReducedMotion) return;

    const targets = document.querySelectorAll(
      '.feature-card, .announcement-card, .guide-card, .event-item, .faq-item, .rule-link-card, .reg-card, .day-group-box, .section-title, .home-quick-info'
    );

    targets.forEach(el => {
      el.classList.add('reveal');
    });

    // Use Anime.js Scroll Observer
    targets.forEach((el, i) => {
      createScope().add(() => {
        onScroll({
          target: el,
          onEnter: () => {
            animate(el, {
              opacity: [0, 1],
              y: [24, 0]
            }, {
              duration: 0.5,
              delay: (i % 4) * 0.08,
              ease: 'easeOut'
            });
          },
          onEnterBack: () => {},
          onLeave: () => {},
          onLeaveBack: () => {}
        });
      });
    });
  }

  /**
   * Card Hover Effects (Motion Spring)
   */
  function initCardHover() {
    if (prefersReducedMotion) return;

    const cards = document.querySelectorAll('.feature-card, .quick-action-card, .guide-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        animate(card, {
          y: -4,
          boxShadow: '0 12px 32px rgba(0, 0, 0, 0.08)'
        }, {
          type: spring,
          stiffness: 300,
          damping: 20
        });
      });

      card.addEventListener('mouseleave', () => {
        animate(card, {
          y: 0,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)'
        }, {
          type: spring,
          stiffness: 300,
          damping: 20
        });
      });

      card.addEventListener('mousedown', () => {
        animate(card, {
          scale: 0.98
        }, { duration: 0.1 });
      });

      card.addEventListener('mouseup', () => {
        animate(card, {
          scale: 1
        }, {
          type: spring,
          stiffness: 400,
          damping: 15
        });
      });
    });
  }

  /**
   * Icon Bounce on Hover (Motion)
   */
  function initIconBounce() {
    if (prefersReducedMotion) return;

    const cards = document.querySelectorAll('.feature-card');

    cards.forEach(card => {
      const icon = card.querySelector('.feature-icon');
      if (!icon) return;

      card.addEventListener('mouseenter', () => {
        animate(icon, {
          y: [0, -6, -3, 0]
        }, {
          duration: 0.4,
          ease: 'easeOut'
        });
      });
    });
  }

  /**
   * Ripple Effect (Motion)
   */
  function initRipple() {
    if (prefersReducedMotion) return;

    const targets = document.querySelectorAll('.feature-card, .quick-action-card, .guide-card, .tab-btn, .rule-link-card, .btn-reg-apply, .btn-go-leave');

    targets.forEach(el => {
      el.addEventListener('click', (e) => {
        const rect = el.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple';
        const size = Math.max(rect.width, rect.height) * 2;
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;
        el.appendChild(ripple);

        animate(ripple, {
          scale: [0, 4],
          opacity: [0.35, 0]
        }, {
          duration: 0.5,
          ease: 'easeOut',
          onComplete: () => ripple.remove()
        });
      });
    });
  }

  /**
   * Event Items Stagger (Anime.js Timeline)
   */
  function initEventStagger() {
    if (prefersReducedMotion) return;

    const items = document.querySelectorAll('.event-item');
    if (!items.length) return;

    const observer = new IntersectionObserver((entries) => {
      const visibleEntries = entries.filter(e => e.isIntersecting);
      if (visibleEntries.length === 0) return;

      const tl = createTimeline();
      visibleEntries.forEach(({ target }, i) => {
        tl.add(target, {
          opacity: [0, 1],
          x: [-12, 0]
        }, i * 0.06);
      });

      observer.disconnect();
    }, { threshold: 0.05 });

    items.forEach(el => observer.observe(el));
  }

  /**
   * FAQ Accordion (Motion)
   */
  function initFaqAccordion() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('.faq-question-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const item = btn.closest('.faq-item');
        const panel = item.querySelector('.faq-answer-panel');
        const isActive = item.classList.contains('active');

        if (!isActive) {
          item.classList.add('active');
          panel.style.display = 'block';
          animate(panel, {
            maxHeight: ['0px', '600px'],
            opacity: [0, 1]
          }, {
            duration: 0.3,
            ease: 'easeOut'
          });
        } else {
          animate(panel, {
            maxHeight: ['600px', '0px'],
            opacity: [1, 0]
          }, {
            duration: 0.3,
            ease: 'easeIn',
            onComplete: () => {
              item.classList.remove('active');
              panel.style.display = '';
            }
          });
        }
      });
    });
  }

  /**
   * Badge Pulse (Motion)
   */
  function initBadgePulse() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('.ann-date').forEach(badge => {
      badge.addEventListener('mouseenter', () => {
        animate(badge, {
          scale: [1, 1.08, 1]
        }, {
          duration: 0.6,
          ease: 'easeInOut'
        });
      });
    });
  }

  /**
   * Tab Switcher Underline (Motion)
   */
  function initTabSwitcher() {
    if (prefersReducedMotion) return;

    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const underline = btn.querySelector('::after') || btn;
        animate(btn, {
          '--tab-width': ['0%', '60%']
        }, {
          duration: 0.3,
          ease: 'easeOut'
        });
      });
    });
  }

  /**
   * Toast Notifications (Motion)
   */
  function initToast() {
    if (prefersReducedMotion) return;

    const style = document.createElement('style');
    style.textContent = `
      .toast { animation: none !important; }
    `;
    document.head.appendChild(style);

    window.showToast = function(message, type = 'info') {
      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.textContent = message;
      document.body.appendChild(toast);

      animate(toast, {
        opacity: [0, 1],
        y: [20, 0]
      }, {
        duration: 0.35,
        ease: 'easeOut'
      });

      setTimeout(() => {
        animate(toast, {
          opacity: [1, 0],
          y: [0, 20]
        }, {
          duration: 0.3,
          ease: 'easeIn',
          onComplete: () => toast.remove()
        });
      }, 3000);
    };
  }

  /**
   * Title Shimmer (Motion)
   */
  function initTitleShimmer() {
    if (prefersReducedMotion) return;

    const title = document.querySelector('.header-main-title');
    if (!title) return;

    animate(title, {
      backgroundPosition: ['200% center', '-200% center']
    }, {
      duration: 3,
      repeat: Infinity,
      ease: 'linear'
    });
  }

  /**
   * Skeleton Shimmer (Motion)
   */
  function initSkeletonShimmer() {
    const skeletons = document.querySelectorAll('.skeleton');
    if (!skeletons.length) return;

    skeletons.forEach(el => {
      animate(el, {
        backgroundPosition: ['200% 0', '-200% 0']
      }, {
        duration: 1.5,
        repeat: Infinity,
        ease: 'linear'
      });
    });
  }

  /**
   * Back to Top Button (Motion)
   */
  function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.innerHTML = '↑';
    btn.setAttribute('aria-label', '回到頂部');
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

  /**
   * Initialize All Animations
   */
  function initAllAnimations() {
    initPageLoad();
    initScrollReveal();
    initCardHover();
    initIconBounce();
    initRipple();
    initEventStagger();
    initFaqAccordion();
    initBadgePulse();
    initTabSwitcher();
    initToast();
    initTitleShimmer();
    initSkeletonShimmer();
    initBackToTop();
  }

  // Expose for external use
  window.initAllAnimations = initAllAnimations;

  // Auto-init when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllAnimations);
  } else {
    initAllAnimations();
  }

})();
