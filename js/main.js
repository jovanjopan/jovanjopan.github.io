/* ==========================================================
   Portfolio — Jovan Faizan Ardiansyah
   Vanilla JS — no dependencies
   ========================================================== */

(function () {
    'use strict';

    // ── DOM References ──
    const nav       = document.getElementById('nav');
    const navToggle = document.getElementById('navToggle');
    const navLinks  = document.getElementById('navLinks');
    const hero      = document.getElementById('hero');

    // ── 1. Navigation: solid background on scroll ──
    if (hero && nav) {
        const navObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    nav.classList.toggle('nav--scrolled', !entry.isIntersecting);
                });
            },
            { threshold: 0.15 }
        );
        navObserver.observe(hero);
    }

    // ── 2. Mobile hamburger toggle ──
    if (navToggle) {
        navToggle.addEventListener('click', function () {
            var isOpen = nav.classList.toggle('nav--open');
            navToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close mobile menu when a link is clicked
        if (navLinks) {
            navLinks.querySelectorAll('a').forEach(function (link) {
                link.addEventListener('click', function () {
                    nav.classList.remove('nav--open');
                    navToggle.setAttribute('aria-expanded', 'false');
                });
            });
        }
    }

    // ── 3. Scroll-reveal animation ──
    var revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length > 0 && 'IntersectionObserver' in window) {
        var revealObserver = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Stop observing once revealed
                        revealObserver.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.12,
                rootMargin: '0px 0px -40px 0px'
            }
        );

        revealElements.forEach(function (el) {
            revealObserver.observe(el);
        });
    } else {
        // Fallback: just show everything immediately
        revealElements.forEach(function (el) {
            el.classList.add('visible');
        });
    }

    // ── 4. Smooth scroll for internal links (fallback for older browsers) ──
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;

            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // ── 5. Gallery carousel ──
    document.querySelectorAll('.project-gallery-wrapper').forEach(function (wrapper) {
        var gallery = wrapper.querySelector('.project-gallery');
        var prevBtn = wrapper.querySelector('.gallery-nav--prev');
        var nextBtn = wrapper.querySelector('.gallery-nav--next');
        var dotsContainer = wrapper.querySelector('.gallery-dots');
        var items = gallery.querySelectorAll('.project-gallery__item');

        if (items.length === 0) return;

        // Build dot indicators
        var dots = [];
        items.forEach(function (_, i) {
            var dot = document.createElement('button');
            dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Gambar ' + (i + 1));
            dot.addEventListener('click', function () {
                items[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            });
            dotsContainer.appendChild(dot);
            dots.push(dot);
        });

        // Get current visible index
        function getCurrentIndex() {
            var galleryRect = gallery.getBoundingClientRect();
            var center = galleryRect.left + galleryRect.width / 2;
            var closest = 0;
            var closestDist = Infinity;

            items.forEach(function (item, i) {
                var rect = item.getBoundingClientRect();
                var itemCenter = rect.left + rect.width / 2;
                var dist = Math.abs(itemCenter - center);
                if (dist < closestDist) {
                    closestDist = dist;
                    closest = i;
                }
            });

            return closest;
        }

        // Update active dot
        function updateDots() {
            var idx = getCurrentIndex();
            dots.forEach(function (dot, i) {
                dot.classList.toggle('active', i === idx);
            });
        }

        // Arrow buttons
        if (prevBtn) {
            prevBtn.addEventListener('click', function () {
                var idx = getCurrentIndex();
                if (idx > 0) {
                    items[idx - 1].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', function () {
                var idx = getCurrentIndex();
                if (idx < items.length - 1) {
                    items[idx + 1].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                }
            });
        }

        // Sync dots on scroll
        var scrollTimeout;
        gallery.addEventListener('scroll', function () {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(updateDots, 80);
        });
    });

})();
