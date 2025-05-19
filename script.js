
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
   document.addEventListener('DOMContentLoaded', function() {
            // Project data
            const projects = [
                {
                    id: 1,
                    title: "NeuralMind AI Platform",
                    description: "Enterprise-grade AI solution with deep learning capabilities for complex decision-making processes.",
                    category: "ai",
                    tags: ["Deep Learning", "Predictive Analytics", "NLP"],
                    icon: "brain",
                    color: "from-purple-600 to-indigo-600",
                    year: "2023"
                },
                {
                    id: 2,
                    title: "Luxury Concierge App",
                    description: "Exclusive mobile experience for high-net-worth individuals with personalized services and AI recommendations.",
                    category: "app",
                    tags: ["iOS", "Android", "Flutter"],
                    icon: "crown",
                    color: "from-amber-600 to-yellow-500",
                    year: "2023"
                },
                {
                    id: 3,
                    title: "Smart Estate System",
                    description: "IoT-powered luxury home automation with biometric security and environmental intelligence.",
                    category: "iot",
                    tags: ["Home Automation", "Biometrics", "AI"],
                    icon: "house-signal",
                    color: "from-emerald-600 to-teal-500",
                    year: "2022"
                },
                {
                    id: 4,
                    title: "Elysium Web Platform",
                    description: "Next-generation web architecture with real-time 3D visualization and immersive interfaces.",
                    category: "web",
                    tags: ["WebGL", "Three.js", "React"],
                    icon: "globe",
                    color: "from-blue-600 to-cyan-500",
                    year: "2023"
                },
                {
                    id: 5,
                    title: "Quantum Trading AI",
                    description: "Financial markets prediction system using quantum computing principles and neural networks.",
                    category: "ai",
                    tags: ["Quantum", "Finance", "ML"],
                    icon: "chart-pie",
                    color: "from-fuchsia-600 to-pink-600",
                    year: "2024"
                },
                {
                    id: 6,
                    title: "Nebula Social",
                    description: "Private social network with end-to-end encryption and decentralized architecture.",
                    category: "blockchain",
                    tags: ["Web3", "Blockchain", "Social"],
                    icon: "user-secret",
                    color: "from-violet-600 to-purple-600",
                    year: "2023"
                },
                {
                    id: 7,
                    title: "Aether Cloud",
                    description: "Distributed cloud computing platform with quantum-resistant encryption.",
                    category: "web",
                    tags: ["Cloud", "Security", "Scalability"],
                    icon: "cloud",
                    color: "from-sky-600 to-blue-500",
                    year: "2022"
                },
                {
                    id: 8,
                    title: "Sentinel Security AI",
                    description: "Autonomous cybersecurity system with adaptive threat detection and prevention.",
                    category: "ai",
                    tags: ["Security", "AI", "Anomaly Detection"],
                    icon: "shield-halved",
                    color: "from-red-600 to-orange-500",
                    year: "2023"
                },
                {
                    id: 9,
                    title: "Chronos Blockchain",
                    description: "High-performance blockchain protocol with sub-second finality and zero-knowledge proofs.",
                    category: "blockchain",
                    tags: ["ZK Proofs", "Scalability", "Web3"],
                    icon: "link",
                    color: "from-indigo-600 to-purple-500",
                    year: "2024"
                }
            ];

            // Render projects
            function renderProjects(filter = 'all') {
                const container = document.getElementById('projects-container');
                container.innerHTML = '';
                
                const filteredProjects = filter === 'all' 
                    ? projects 
                    : projects.filter(project => project.category === filter);
                
                filteredProjects.forEach((project, index) => {
                    const projectElement = document.createElement('div');
                    projectElement.className = `project-card rounded-2xl overflow-hidden animate-fadeInUp`;
                    projectElement.style.animationDelay = `${index * 0.1}s`;
                    
                    projectElement.innerHTML = `
                        <div class="relative h-full flex flex-col">
                            <div class="absolute top-4 right-4 text-xs px-2.5 py-1 rounded-full glass">${project.year}</div>
                            <div class="p-6 flex-1">
                                <div class="flex items-center mb-5">
                                    <div class="w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center shadow-lg">
                                        <i class="fas fa-${project.icon} text-white text-xl"></i>
                                    </div>
                                    <h3 class="text-xl font-bold ml-4">${project.title}</h3>
                                </div>
                                <p class="text-gray-400 mb-5">${project.description}</p>
                                <div class="flex flex-wrap gap-2 mt-6">
                                    ${project.tags.map(tag => `
                                        <span class="project-tag text-xs px-3 py-1 rounded-full text-gray-300">${tag}</span>
                                    `).join('')}
                                </div>
                            </div>
                            <div class="px-6 py-4 border-t border-gray-800">
                                <a href="#" class="inline-flex items-center font-medium text-white hover:text-indigo-300 transition-colors">
                                    Explore project
                                    <i class="fas fa-arrow-right ml-2 text-sm"></i>
                                </a>
                            </div>
                        </div>
                    `;
                    
                    container.appendChild(projectElement);
                });
                
                // Add intersection observer for animations
                const observerOptions = {
                    threshold: 0.1
                };
                
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            entry.target.style.opacity = 1;
                            entry.target.style.transform = 'translateY(0)';
                        }
                    });
                }, observerOptions);
                
                document.querySelectorAll('.animate-fadeInUp').forEach(element => {
                    observer.observe(element);
                });
            }
            
            // Initial render
            renderProjects();
            
            // Filter buttons
            const filterButtons = document.querySelectorAll('.filter-btn');
            filterButtons.forEach(button => {
                button.addEventListener('click', function() {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    const filter = this.getAttribute('data-filter');
                    renderProjects(filter);
                });
            });
        });
          document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.testimonial-slide');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const progress = document.querySelector('.progress');
            let currentSlide = 0;
            const totalSlides = slides.length;
            
            // Initialize first slide
            showSlide(currentSlide);
            
            // Auto slide every 5 seconds
            let slideInterval = setInterval(nextSlide, 5000);
            
            // Next slide function
            function nextSlide() {
                currentSlide = (currentSlide + 1) % totalSlides;
                showSlide(currentSlide);
                resetInterval();
            }
            
            // Previous slide function
            function prevSlide() {
                currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
                showSlide(currentSlide);
                resetInterval();
            }
            
            // Show specific slide
            function showSlide(n) {
                slides.forEach(slide => slide.classList.remove('active'));
                slides[n].classList.add('active');
                
                // Update progress bar
                progress.style.width = `${((n + 1) / totalSlides) * 100}%`;
            }
            
            // Reset interval timer
            function resetInterval() {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            }
            
            // Button event listeners
            nextBtn.addEventListener('click', nextSlide);
            prevBtn.addEventListener('click', prevSlide);
            
            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowRight') {
                    nextSlide();
                } else if (e.key === 'ArrowLeft') {
                    prevSlide();
                }
            });
            
            // Add hover effects to cards
            document.querySelectorAll('.testimonial-card').forEach((card, index) => {
                card.style.animationDelay = `${index * 0.1}s`;
                
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-8px) scale(1.02)';
                    card.style.boxShadow = '0 25px 50px -12px rgba(124, 58, 237, 0.25)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = '';
                    card.style.boxShadow = '';
                });
            });
        }); 
         document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const company = document.getElementById('company').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert("Please fill in Name, Email, and Message fields.");
      return;
    }

    const subject = encodeURIComponent("New message from " + name);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nMessage:\n${message}`
    );

    window.location.href = `mailto:main.merrionsoft@gmail.com?cc=team.merrionsoft@gmail.com&subject=${subject}&body=${body}`;
  });      
