// =====================================
// HOR SABLE - Cosmic Futuristic Experience
// Enhanced Interactivity & Animations
// =====================================

document.addEventListener('DOMContentLoaded', () => {
    // ===== Audio Player Setup =====
    const playBtn = document.getElementById('playBtn');
    const audioFile = document.getElementById('audioFile');
    const progressBar = document.querySelector('.progress-bar');
    const progressFill = document.getElementById('progressFill');
    const timeDisplay = document.querySelector('.time-display');
    
    let isPlaying = false;
    
    function formatTime(seconds) {
        if (!isFinite(seconds)) return '0:00';
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    }
    
    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            audioFile.pause();
            playBtn.textContent = '▶';
            playBtn.style.animation = 'none';
            isPlaying = false;
        } else {
            if (!audioFile.src) {
                alert('Veuillez ajouter un fichier audio. Remplacez le src dans le HTML avec le chemin de votre fichier audio.');
                return;
            }
            audioFile.play().catch(err => {
                console.log('Lecture non disponible:', err.message);
            });
            playBtn.textContent = '⏸';
            playBtn.style.animation = 'pulse-glow 1s ease-in-out infinite';
            isPlaying = true;
        }
    });
    
    audioFile.addEventListener('timeupdate', () => {
        const percent = (audioFile.currentTime / audioFile.duration) * 100;
        progressFill.style.width = percent + '%';
        updateTimeDisplay();
    });
    
    function updateTimeDisplay() {
        const current = formatTime(audioFile.currentTime);
        const duration = formatTime(audioFile.duration);
        timeDisplay.textContent = `${current} / ${duration}`;
    }
    
    progressBar.addEventListener('click', (e) => {
        if (!audioFile.duration) return;
        const rect = progressBar.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audioFile.currentTime = percent * audioFile.duration;
    });
    
    audioFile.addEventListener('ended', () => {
        playBtn.textContent = '▶';
        isPlaying = false;
        playBtn.style.animation = 'none';
        progressFill.style.width = '0%';
        audioFile.currentTime = 0;
        updateTimeDisplay();
    });
    
    audioFile.addEventListener('error', () => {
        console.log('Erreur: Fichier audio non trouvé ou inaccessible');
        timeDisplay.textContent = '-- / --';
    });
    
    updateTimeDisplay();
    
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
    if (heroSection) {
        document.addEventListener('mousemove', (e) => {
            const xPos = (e.clientX / window.innerWidth - 0.5) * 2;
            const yPos = (e.clientY / window.innerHeight - 0.5) * 2;
            
            if (heroSection.offsetHeight < window.innerHeight * 2) {
                heroSection.style.transform = `translate(${xPos * 10}px, ${yPos * 10}px)`;
            }
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
    
    // ===== Dynamically add CSS for animations =====
    if (!document.querySelector('style[data-cosmic]')) {
        const style = document.createElement('style');
        style.setAttribute('data-cosmic', '');
        style.textContent = `
            @keyframes pulse-glow {
                0%, 100% { 
                    box-shadow: 0 0 20px rgba(167, 139, 250, 0.3), 0 8px 24px rgba(167, 139, 250, 0.2);
                }
                50% { 
                    box-shadow: 0 0 40px rgba(167, 139, 250, 0.6), 0 12px 32px rgba(167, 139, 250, 0.4);
                }
            }
            
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
    window.addEventListener('scroll', () => {
        const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        const scrollIndicator = document.querySelector('[data-scroll-indicator]');
        if (scrollIndicator) {
            scrollIndicator.style.width = scrolled + '%';
        }
    });
    
    // ===== Viewport fade effect (creates depth) =====
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
});
