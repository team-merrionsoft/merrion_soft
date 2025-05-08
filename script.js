
        function createStars(containerId, count) {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            for (let i = 0; i < count; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Random properties
                const size = Math.random() * 3;
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const opacity = Math.random() * 0.8 + 0.2;
                const duration = Math.random() * 5 + 5;
                
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.left = `${posX}%`;
                star.style.top = `${posY}%`;
                star.style.setProperty('--opacity', opacity);
                star.style.setProperty('--duration', `${duration}s`);
                
                // Delay animation start
                star.style.animationDelay = `${Math.random() * 5}s`;
                
                container.appendChild(star);
            }
        }
        
        // Create shooting stars for different sections
        function createShootingStars(containerId, count) {
            const container = document.getElementById(containerId);
            if (!container) return;
            
            for (let i = 0; i < count; i++) {
                const star = document.createElement('div');
                star.classList.add('shooting-star');
                
                // Random properties
                const posX = Math.random() * 100;
                const posY = Math.random() * 100;
                const distanceX = Math.random() * 200 + 100;
                const distanceY = Math.random() * 200 + 100;
                const duration = Math.random() * 3 + 2;
                const delay = Math.random() * 15;
                
                star.style.left = `${posX}%`;
                star.style.top = `${posY}%`;
                star.style.setProperty('--distance-x', `${distanceX}px`);
                star.style.setProperty('--distance-y', `${distanceY}px`);
                star.style.setProperty('--duration', `${duration}s`);
                star.style.animationDelay = `${delay}s`;
                
                container.appendChild(star);
            }
        }
        
        // Initialize stars for each section
        window.addEventListener('DOMContentLoaded', () => {
            // Home section
            createStars('stars-container', 150);
            createShootingStars('shooting-stars-container', 5);
            
            // Other sections
            createStars('stars-container-about', 80);
            createStars('stars-container-services', 80);
            createStars('stars-container-team', 80);
            createStars('stars-container-portfolio', 80);
            createStars('stars-container-testimonials', 80);
            createStars('stars-container-contact', 80);
            
            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                    
                    // Update active nav link
                    document.querySelectorAll('.nav-link').forEach(link => {
                        link.classList.remove('active-nav');
                    });
                    this.classList.add('active-nav');
                });
            });
            
            // Change active nav link on scroll
            window.addEventListener('scroll', function() {
                const sections = document.querySelectorAll('section');
                const navLinks = document.querySelectorAll('.nav-link');
                
                let current = '';
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    if (pageYOffset >= (sectionTop - 100)) {
                        current = section.getAttribute('id');
                    }
                });
                
                navLinks.forEach(link => {
                    link.classList.remove('active-nav');
                    if (link.getAttribute('href') === `#${current}`) {
                        link.classList.add('active-nav');
                    }
                });
            });
            
            // Mobile menu toggle
            const mobileMenuButton = document.querySelector('.md\\:hidden');
            mobileMenuButton.addEventListener('click', function() {
                const nav = document.querySelector('nav');
                nav.classList.toggle('hidden');
                nav.classList.toggle('flex');
                nav.classList.toggle('flex-col');
                nav.classList.toggle('absolute');
                nav.classList.toggle('top-16');
                nav.classList.toggle('left-0');
                nav.classList.toggle('right-0');
                nav.classList.toggle('bg-black');
                nav.classList.toggle('p-4');
                nav.classList.toggle('space-y-4');
                nav.classList.toggle('space-x-8');
            });
        });