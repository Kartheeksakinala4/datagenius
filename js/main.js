/* ============================================================
   DataGenius – Main JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── 1. Mobile Nav Toggle ─────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow =
        mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      }
    });

    // Close on nav link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  /* ── 2. Navbar Scroll Shadow ──────────────────────────── */
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ── 3. Smooth Scrolling for Anchor Links ─────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── 4. Active Nav Link Highlighting ──────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── 5. Product Filter Functionality ──────────────────── */
  const filterTabs    = document.querySelectorAll('.filter-tab');
  const productCards  = document.querySelectorAll('.product-card[data-category]');

  if (filterTabs.length && productCards.length) {
    filterTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Update active tab
        filterTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');

        const category = tab.dataset.filter;

        productCards.forEach(card => {
          const match =
            category === 'all' || card.dataset.category === category;

          if (match) {
            card.style.display = '';
            // Re-trigger reveal
            card.classList.remove('visible');
            setTimeout(() => card.classList.add('visible'), 50);
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  /* ── 6. Contact Form Validation & Submission ──────────── */
  const contactForm = document.getElementById('contactForm');

  if (contactForm) {
    const fields = {
      name    : { el: document.getElementById('name'),    rule: v => v.trim().length >= 2,   msg: 'Please enter your full name.' },
      email   : { el: document.getElementById('email'),   rule: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), msg: 'Please enter a valid email address.' },
      subject : { el: document.getElementById('subject'), rule: v => v !== '',               msg: 'Please select a subject.' },
      message : { el: document.getElementById('message'), rule: v => v.trim().length >= 10,  msg: 'Message must be at least 10 characters.' },
    };

    const validate = (key) => {
      const { el, rule, msg } = fields[key];
      if (!el) return true;
      const group = el.closest('.form-group');
      const errEl = group.querySelector('.error-msg');
      const valid = rule(el.value);
      group.classList.toggle('error', !valid);
      if (errEl) errEl.textContent = valid ? '' : msg;
      return valid;
    };

    // Live validation on blur
    Object.keys(fields).forEach(key => {
      const el = fields[key].el;
      if (el) el.addEventListener('blur', () => validate(key));
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const allValid = Object.keys(fields).map(validate).every(Boolean);

      if (allValid) {
        // Simulate submission
        const submitBtn = contactForm.querySelector('[type="submit"]');
        const successMsg = document.getElementById('formSuccess');

        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
          contactForm.reset();

          // Remove error states
          contactForm.querySelectorAll('.form-group').forEach(g =>
            g.classList.remove('error')
          );

          if (successMsg) {
            successMsg.style.display = 'block';
            setTimeout(() => { successMsg.style.display = 'none'; }, 5000);
          }
        }, 1500);
      }
    });
  }

  /* ── 7. Newsletter Form ───────────────────────────────── */
  document.querySelectorAll('.newsletter-form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input  = form.querySelector('input[type="email"]');
      const btn    = form.querySelector('button');

      if (!input || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
        input.style.borderColor = '#EF4444';
        setTimeout(() => { input.style.borderColor = ''; }, 2000);
        return;
      }

      const original = btn.textContent;
      btn.textContent = 'Subscribed!';
      btn.disabled = true;
      input.value = '';

      setTimeout(() => {
        btn.textContent = original;
        btn.disabled = false;
      }, 3000);
    });
  });

  /* ── 8. Scroll Reveal Animations ─────────────────────── */
  const revealEls = document.querySelectorAll('.reveal');

  if (revealEls.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealEls.forEach(el => observer.observe(el));
  }

  /* ── 9. FAQ Accordion ────────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const isOpen   = btn.classList.contains('open');
      const answer   = btn.nextElementSibling;
      const allBtns  = document.querySelectorAll('.faq-question');

      // Close all
      allBtns.forEach(b => {
        b.classList.remove('open');
        b.nextElementSibling.style.maxHeight = null;
      });

      // Open clicked (unless it was already open)
      if (!isOpen) {
        btn.classList.add('open');
        answer.style.maxHeight = answer.scrollHeight + 'px';
      }
    });
  });

  /* ── 10. Stats Counter Animation ────────────────────── */
  const statNums = document.querySelectorAll('.stat-num[data-target]');

  if (statNums.length) {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNums.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const suffix   = el.dataset.suffix || '';
    const duration = 1500;
    const start    = performance.now();

    const update = (now) => {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      el.textContent = Math.floor(eased * target) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  }

});
