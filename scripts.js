// =====================================
// HOR SABLE - Cosmic Futuristic Experience
// Enhanced Interactivity & Animations
// =====================================

document.addEventListener('DOMContentLoaded', () => {
    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const isLowPowerDevice =
        (typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4) ||
        (typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 4) ||
        reduceMotionQuery.matches;

    if (isLowPowerDevice) {
        document.body.classList.add('low-power-mode');
    }

    // ===== Scroll-based Animations =====
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply fade-in animations
    document.querySelectorAll('.knowledge-card, .team-member, .podcast-container').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(el);
    });
    
    // ===== Mouse parallax effect on hero =====
    const heroSection = document.querySelector('.hero-section');
    if (heroSection && !isLowPowerDevice) {
        let rafId = null;
        let latestMouseX = 0;
        let latestMouseY = 0;

        document.addEventListener('mousemove', (e) => {
            latestMouseX = e.clientX;
            latestMouseY = e.clientY;

            if (rafId) return;
            rafId = window.requestAnimationFrame(() => {
                rafId = null;
                const xPos = (latestMouseX / window.innerWidth - 0.5) * 2;
                const yPos = (latestMouseY / window.innerHeight - 0.5) * 2;
                
                if (heroSection.offsetHeight < window.innerHeight * 2) {
                    heroSection.style.transform = `translate(${xPos * 6}px, ${yPos * 6}px)`;
                }
            });
        }, { passive: true });
    }

    // ===== Dynamically add CSS for animations =====
    if (!document.querySelector('style[data-cosmic]')) {
        const style = document.createElement('style');
        style.setAttribute('data-cosmic', '');
        style.textContent = `
            @keyframes shimmer {
                0% { background-position: -1000px 0; }
                100% { background-position: 1000px 0; }
            }
            
            @keyframes gradient-shift {
                0%, 100% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
            }
            
            .section-title {
                background-size: 200% 200%;
                animation: gradient-shift 6s ease infinite;
            }
        `;
        document.head.appendChild(style);
    }
    
    // ===== Scroll indicator =====
    const scrollIndicator = document.querySelector('[data-scroll-indicator]');
    let scrollRaf = null;
    window.addEventListener('scroll', () => {
        if (!scrollIndicator) return;
        if (scrollRaf) return;
        scrollRaf = window.requestAnimationFrame(() => {
            scrollRaf = null;
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            scrollIndicator.style.width = scrolled + '%';
        });
    }, { passive: true });
    
    // ===== Viewport fade effect (creates depth) =====
    if (!isLowPowerDevice) {
        const sections = document.querySelectorAll('section');
        const pageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                }
            });
        }, { threshold: 0.05 });
        
        sections.forEach(section => {
            section.style.opacity = '0.95';
            pageObserver.observe(section);
        });
    }

    // ===== Smooth scroll anchor navigation =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // ===== Enhanced card interaction =====
    document.querySelectorAll('.knowledge-card').forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.zIndex = 10;
        });
        card.addEventListener('mouseleave', function() {
            this.style.zIndex = 1;
        });
    });
    
});
