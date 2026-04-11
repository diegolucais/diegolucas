(function () {
    // Sticky navigation
    const nav = document.getElementById('mainNav');
    window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 20));

    // Scroll animations
    const animated = document.querySelectorAll('.animate-on-scroll');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.15 });
    animated.forEach(el => observer.observe(el));

    // Hero cover rotation with smooth crossfade + subtle zoom
    const heroImg = document.getElementById('heroCoverImg');
    const enCover = 'assets/images/The%20Scarabs%20of%20Seth.jpg';
    const ptCover = 'assets/images/Os%20Escaravelhos%20de%20Seth.jpg';
    let isEnglishCover = true;

    function rotateCover() {
        // Fade out and slightly scale down
        heroImg.classList.add('fade-out');

        setTimeout(() => {
            // Swap image
            heroImg.src = isEnglishCover ? ptCover : enCover;
            heroImg.alt = isEnglishCover ? 'Os Escaravelhos de Seth' : 'The Scarabs of Seth';
            isEnglishCover = !isEnglishCover;

            // Remove the class to fade back in
            heroImg.classList.remove('fade-out');
        }, 400); // matches the CSS transition duration
    }

    setInterval(rotateCover, 4500); // a bit longer to appreciate the animation

    // Smooth scroll
    document.querySelectorAll('.nav-links a, .footer-links a[href="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const href = a.getAttribute('href');
            if (href === "#") { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
            else if (href.startsWith('#')) {
                e.preventDefault();
                document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Modals
    const privacyLink = document.getElementById('privacyLink');
    const termsLink = document.getElementById('termsLink');
    const privacyModal = document.getElementById('privacyModal');
    const termsModal = document.getElementById('termsModal');

    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    function closeModal(modalId) {
        document.getElementById(modalId).classList.remove('active');
        document.body.style.overflow = '';
    }

    privacyLink.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation(); openModal(privacyModal);
    });
    termsLink.addEventListener('click', (e) => {
        e.preventDefault(); e.stopPropagation(); openModal(termsModal);
    });
    window.closeModal = (modalId) => closeModal(modalId);
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Make already visible elements appear
    setTimeout(() => {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add('visible');
        });
    }, 100);
})();