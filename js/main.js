/* ==========================================
   Jimmy Bailey - jimmybailey.com
   Main JS - nav, mobile menu, scroll reveal
   ========================================== */

(function () {
  'use strict';

  /* ---------- Nav scroll effect ---------- */
  const nav = document.getElementById('nav');

  function handleNavScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleNavScroll, { passive: true });

  /* ---------- Mobile menu toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  toggle.addEventListener('click', function () {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('active');
    toggle.setAttribute('aria-expanded', isOpen);
  });

  // Close mobile menu on link click
  links.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      links.classList.remove('open');
      toggle.classList.remove('active');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Scroll-reveal ---------- */
  // Add .reveal class to elements that should animate in
  var revealTargets = document.querySelectorAll(
    '.about-card, .shows .section-heading, .shows-placeholder, ' +
    '.booking .section-heading, .booking p, .booking-contact, ' +
    '.social-links'
  );

  revealTargets.forEach(function (el) {
    el.classList.add('reveal');
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });

  /* ---------- Smooth scroll for nav links (fallback) ---------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
})();
