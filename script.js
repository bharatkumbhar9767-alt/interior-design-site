/* ========================================
   THE SPATIAL EDIT — Interactions
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* ---- Scroll Reveal (IntersectionObserver) ---- */
    const reveals = document.querySelectorAll(
        '.hero__left, .hero__right, .arch-card, .difference__left, .difference__footer'
    );

    const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                io.unobserve(e.target);        // fire once
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

    reveals.forEach(el => io.observe(el));

    /* ---- Navbar shadow on scroll ---- */
    const nav = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        nav.style.boxShadow = window.scrollY > 50
            ? '0 2px 24px rgba(42,36,24,0.06)'
            : 'none';
    }, { passive: true });

    /* ---- Smooth anchor scroll ---- */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const t = document.querySelector(a.getAttribute('href'));
            if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });

    /* ---- Subtle parallax on hero image ---- */
    const heroImg = document.querySelector('.hero__img');
    if (heroImg) {
        window.addEventListener('scroll', () => {
            const y = window.scrollY;
            if (y < window.innerHeight) {
                heroImg.style.transform =
                    `scale(${1 + y * 0.00015}) translateY(${y * 0.04}px)`;
            }
        }, { passive: true });
    }

    /* ---- Diamond rotation on scroll ---- */
    const diamond = document.querySelector('.diamond-accent svg');
    if (diamond) {
        window.addEventListener('scroll', () => {
            diamond.style.transform = `rotate(${window.scrollY * 0.12}deg)`;
        }, { passive: true });
    }

});
