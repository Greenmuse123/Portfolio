document.addEventListener("DOMContentLoaded", () => {
    // Preloader
    const loader = document.getElementById("loader");
    window.addEventListener("load", () => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });

    // Smooth Scroll Navigation
    const navLinks = document.querySelectorAll(".navbar a");
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href").slice(1);
            const targetSection = document.getElementById(targetId);
            targetSection.scrollIntoView({ behavior: "smooth" });
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Form Handler
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", event => {
            event.preventDefault();
            alert("Thank you for reaching out! I'll get back to you soon.");
            contactForm.reset();
        });
    }

    // Initialize Particles.js
    particlesJS("particles-js", {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: {
                type: "circle",
                stroke: { width: 0, color: "#000000" },
                polygon: { nb_sides: 5 },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
                value: 3,
                random: true,
                anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: "#ffffff",
                opacity: 0.4,
                width: 1,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: false,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "grab" },
                onclick: { enable: true, mode: "push" },
                resize: true,
            },
            modes: {
                grab: { distance: 140, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8 },
                repulse: { distance: 200, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 },
            },
        },
        retina_detect: true,
    });


    const youtubeScript = document.createElement('script');
    youtubeScript.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(youtubeScript);

    // Projects Data
    const projectsData = {
        webdev: {
            title: "Web Development Projects",
            projects: [
                {
                    title: "FOV Calculator",
                    description: "A professional FOV (Field of View) calculator tool developed for CTUS. This web application helps users calculate perfect camera positioning and field of view for security installations across different camera models and scenarios.",
                    image: "images/FOVcalc1.png",
                    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design","AWS", "SVG Graphics"],
                    demoLink: "https://tools.ctus.live/fovcalc/",
                    githubLink: null
                },
                {
                    title: "Green Valley AI Solutions",
                    description: "A comprehensive tech consulting firm website offering end-to-end solutions for businesses. Services include custom web development, workflow automation, AI integration, and digital transformation consulting.",
                    image: "images/gvai.png",
                    techStack: ["React", "Node.js", "Responsive Design", "UI/UX Design", "Content Management", "SEO Optimization"],
                    demoLink: "https://greenvalleyai.net",
                    githubLink: null
                },
                {
                    title: "Jedo - Travel Guide",
                    description: "An innovative travel guide application designed specifically for Lebanon. Jedo helps travelers discover hidden gems, local attractions, and authentic experiences throughout the country.",
                    image: "images/jedo.png",
                    techStack: ["React", "Node.js", "Progressive Web App", "Location Services", "Interactive Maps", "Mobile-First Design"],
                    demoLink: "https://web.archive.org/web/20240601050840/https://jedo.app/",
                    githubLink: null
                },
                {
                    title: "CineWorks",
                    description: "A professional videography company website based in Las Vegas. The site showcases high-end video production services, portfolio work, and cinematography packages for various events and commercial projects.",
                    image: "images/cineworks.png",
                    techStack: ["HTML", "JS", "CSS", "Responsive Design", "Video Integration", "Animation"],
                    demoLink: "https://cineworks.co",
                    githubLink: null
                }
            ]
        },
        photography: {
            title: "Photography Portfolio",
            description: "Visual storytelling through my lens",
            fullDescription: "A curated collection of photographs capturing moments and perspectives, showcasing my journey through photography.",
            instagramUsername: "CaughtByHabibi",
            techStack: ["Canon M50 Mark II", "Adobe Lightroom", "Street Photography", "Portrait Photography", "Composition", "Color Theory"],
            galleryLayout: true
        },
        music: {
              title: "Music Performances",
        description: "Performances at various venues and jazz festivals.",
        fullDescription: "A collection of jazz performances showcasing original compositions and classic standards. Featured performances include appearances at local venues and jazz festivals.",
        videoId: "_jZh5d--3KY",
        startTime: 6402, // 1:46:42 in seconds
        techStack: ["Tenor Saxophone", "Bassoon", "Clarinet", "Flute", "Jazz Theory", "Composition", "Ensemble Performance"],
        images: ["images/music1.jpg"], // Fallback image
        demoLink: null,
        githubLink: null
        },
        gamedev: {
            title: "Game Development Projects",
            projects: [
                {
                    title: "Slot Machine",
                description: "A basic slot machine game developed using C++ and the SFML (Simple and Fast Multimedia Library) framework. The game features spinning reel animations, win/loss detection, a clickable 'Spin' button, and a responsive, stylized UI.",
                image: "images/slotmachine.jpg",
                techStack: ["C++", "SFML", "Sprite animations", "Game logic and mechanics"],
                demoLink: null,
                githubLink: "https://github.com/Greenmuse123/Slot-Machine-SFML-C-"
            },
            {
                title: "Tetris",
                description: "This is a recreation of the classic Tetris game, developed using C++ and the SFML (Simple and Fast Multimedia Library) framework. It features challenging 2D gameplay, precise controls for Tetromino movement and rotation, unique mechanics like line clearing and score tracking, and progressive difficulty as the game progresses. Players can navigate through the intricately designed game levels, collecting points and facing increasingly challenging scenarios as they strive for a high score.",
                image: "images/tetris.png",
                techStack: ["C++", "SFML", "2D Animation", "Level Design", "Pixel Art"],
                demoLink: null,
                githubLink: "https://github.com/Greenmuse123/Tetris-Recreation"
                },
            {
                title: "2048 Game",
                description: "A web-based implementation of the popular 2048 puzzle game. Players combine numbered tiles strategically to reach the 2048 tile. Features smooth animations, score tracking, best score storage, and responsive design that works on both desktop and mobile devices.",
                image: "images/2048.jpg", // You'll need to add this image to your project
                techStack: ["HTML", "CSS", "JavaScript", "Game Logic", "Local Storage", "Responsive Design", "Animation"],
                demoLink: null, // Live demo link
                githubLink: "https://github.com/Greenmuse123/2048-HTML-Game-Dev"
            }
                // You can add more game projects here
            ]
        }
    };

    // Carousel Management
    class ProjectCarousel {
        constructor(projects) {
            this.projects = projects;
            this.currentSlide = 0;
            this.setupCarousel();
        }

        setupCarousel() {
            const container = document.querySelector('.project-popup-image');
            container.innerHTML = `
                <div class="carousel-container">
                    <div class="carousel-slides"></div>
                    <button class="carousel-btn prev">‹</button>
                    <button class="carousel-btn next">›</button>
                    <div class="carousel-dots"></div>
                </div>
            `;
            
            this.slidesContainer = document.querySelector('.carousel-slides');
            this.createSlides();
            this.createDots();
            this.setupControls();
            this.updateContent(0);
        }

        createSlides() {
            this.slidesContainer.innerHTML = this.projects.map(project => `
                <div class="carousel-slide">
                    <img src="${project.image}" alt="${project.title}">
                </div>
            `).join('');
        }

        createDots() {
            const dotsContainer = document.querySelector('.carousel-dots');
            dotsContainer.innerHTML = this.projects.map((_, index) => `
                <div class="carousel-dot ${index === 0 ? 'active' : ''}" data-index="${index}"></div>
            `).join('');
            
            dotsContainer.addEventListener('click', (e) => {
                if (e.target.classList.contains('carousel-dot')) {
                    this.goToSlide(parseInt(e.target.dataset.index));
                }
            });
        }

        setupControls() {
            document.querySelector('.carousel-btn.prev').addEventListener('click', () => this.prevSlide());
            document.querySelector('.carousel-btn.next').addEventListener('click', () => this.nextSlide());
        }

        updateContent(index) {
            const project = this.projects[index];
            
            // Update project details
            document.querySelector('.popup-title').textContent = project.title;
            document.querySelector('.popup-description').textContent = project.description;
            document.querySelector('.popup-tech-stack').innerHTML = 
                project.techStack.map(tech => `<span>${tech}</span>`).join('');
    
            // Update links
            const demoLink = document.querySelector('.live-demo');
            const githubLink = document.querySelector('.github-repo');
            
            demoLink.style.display = project.demoLink ? 'inline-block' : 'none';
            if (project.demoLink) demoLink.href = project.demoLink;
            
            githubLink.style.display = project.githubLink ? 'inline-block' : 'none';
            if (project.githubLink) githubLink.href = project.githubLink;
    
            // Update carousel
            this.slidesContainer.style.transform = `translateX(-${index * 100}%)`;
            document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
        }

        goToSlide(index) {
            this.currentSlide = index;
            this.updateContent(index);
        }

        prevSlide() {
            this.currentSlide = (this.currentSlide - 1 + this.projects.length) % this.projects.length;
            this.updateContent(this.currentSlide);
        }

        nextSlide() {
            this.currentSlide = (this.currentSlide + 1) % this.projects.length;
            this.updateContent(this.currentSlide);
        }
    }

    // Instagram Gallery
    class InstagramGallery {
        constructor() {
            this.accessToken = '4d76e7e6bd6490c243284791c569b2c0';
            this.limit = 12;
        }

        async loadPhotos() {
            try {
                const response = await fetch(
                    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&limit=${this.limit}&access_token=${this.accessToken}`
                );
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                return data.data.filter(item => item.media_type === 'IMAGE');
            } catch (error) {
                console.error('Error fetching Instagram photos:', error);
                // Return null to trigger fallback
                return null;
            }
        }
    
        createGalleryHTML(photos) {
            // If we have Instagram photos, use them
            if (photos) {
                return `
                    <div class="gallery-grid">
                        ${photos.map(photo => `
                            <div class="gallery-item">
                                <img src="${photo.media_url}" alt="${photo.caption || 'Instagram photo'}" loading="lazy">
                                <div class="gallery-item-overlay">
                                    <a href="${photo.permalink}" target="_blank" class="gallery-item-link">
                                        <i class="fab fa-instagram"></i>
                                        View on Instagram
                                    </a>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                `;
            }
            
            // Fallback to local images
            return `
                <div class="gallery-grid">
                    ${this.fallbackImages.map(imgPath => `
                        <div class="gallery-item">
                            <img src="${imgPath}" alt="Photography portfolio" loading="lazy">
                            <div class="gallery-item-overlay">
                                <span class="gallery-item-text">Portfolio Image</span>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="instagram-notice">
                    <p>Visit my Instagram <a href="https://www.instagram.com/CaughtByHabibi" target="_blank">@CaughtByHabibi</a> to see more photos!</p>
                </div>
            `;
        }
    
        createLoadingHTML() {
            return `
                <div class="gallery-loading">
                    <div class="gallery-spinner"></div>
                    <p>Loading portfolio...</p>
                </div>
            `;
        }
    }

    // Project opener function
window.openProject = function(projectId) {
    const popup = document.getElementById('project-popup-overlay');
    const project = projectsData[projectId];
    
    if (!project) return;

    const popupImage = document.querySelector('.project-popup-image');
    const linksContainer = document.querySelector('.popup-links');
    popupImage.innerHTML = '';
    linksContainer.style.display = 'flex';

    // Handle projects with carousel (webdev and gamedev)
    if (projectId === 'webdev' || projectId === 'gamedev') {
        new ProjectCarousel(project.projects);
        
        // Update links for first project initially
        const demoLink = document.querySelector('.live-demo');
        const githubLink = document.querySelector('.github-repo');
        
        if (demoLink) {
            demoLink.style.display = project.projects[0].demoLink ? 'inline-block' : 'none';
            if (project.projects[0].demoLink) demoLink.href = project.projects[0].demoLink;
        }
        
        if (githubLink) {
            githubLink.style.display = project.projects[0].githubLink ? 'inline-block' : 'none';
            if (project.projects[0].githubLink) githubLink.href = project.projects[0].githubLink;
        }

        // Update content for carousel projects
        document.querySelector('.popup-title').textContent = project.projects[0].title;
        document.querySelector('.popup-description').textContent = project.projects[0].description;
        document.querySelector('.popup-tech-stack').innerHTML = 
            project.projects[0].techStack.map(tech => `<span>${tech}</span>`).join('');
    }
    // Handle music project
    else if (projectId === 'music' && project.videoId) {
        popupImage.innerHTML = `
            <iframe 
                id="youtube-player"
                src="https://www.youtube.com/embed/${project.videoId}?start=${project.startTime}&autoplay=1&modestbranding=1&rel=0"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                style="width: 100%; height: 100%; position: absolute; top: 0; left: 0;"
            ></iframe>
        `;
        
        // Update links and content for music project
        const demoLink = document.querySelector('.live-demo');
        const githubLink = document.querySelector('.github-repo');
        demoLink.style.display = 'none';
        githubLink.style.display = 'none';
        
        document.querySelector('.popup-title').textContent = project.title;
        document.querySelector('.popup-description').textContent = project.fullDescription;
        document.querySelector('.popup-tech-stack').innerHTML = 
            project.techStack.map(tech => `<span>${tech}</span>`).join('');
    }
    // Handle photography project
    else if (projectId === 'photography') {
        popupImage.innerHTML = `
            <div class="instagram-embed-container">
                <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/caughtbyhabibi/?utm_source=ig_embed&utm_campaign=loading" 
                    data-instgrm-version="14" 
                    style="background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); 
                    margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);">
                    <div style="padding:16px;">
                        <a href="https://www.instagram.com/caughtbyhabibi/?utm_source=ig_embed&utm_campaign=loading" 
                            style="background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank">
                            <div style="display: flex; flex-direction: row; align-items: center;">
                                <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div>
                                <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;">
                                    <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div>
                                    <div style="background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div>
                                </div>
                            </div>
                            <div style="padding: 19% 0;"></div>
                        </a>
                    </div>
                </blockquote>
            </div>
            <script async src="//www.instagram.com/embed.js"></script>
        `;
        
        // Load Instagram embed script
        if (!document.getElementById('instagram-embed-script')) {
            const script = document.createElement('script');
            script.id = 'instagram-embed-script';
            script.async = true;
            script.src = "//www.instagram.com/embed.js";
            document.body.appendChild(script);
        }
                
        // Update links and content for photography project
        const demoLink = document.querySelector('.live-demo');
        const githubLink = document.querySelector('.github-repo');
        demoLink.style.display = 'none';
        githubLink.style.display = 'none';
        
        document.querySelector('.popup-title').textContent = project.title;
        document.querySelector('.popup-description').textContent = project.fullDescription;
        document.querySelector('.popup-tech-stack').innerHTML = 
            project.techStack.map(tech => `<span>${tech}</span>`).join('');
    }

    // Show popup
    popup.classList.remove('hidden');
    setTimeout(() => popup.classList.add('active'), 10);
};

// Single close project function
window.closeProject = function() {
    const popup = document.getElementById('project-popup-overlay');
    const youtubePlayer = document.getElementById('youtube-player');
    
    // Stop YouTube video if it exists
    if (youtubePlayer) {
        youtubePlayer.remove();
    }
    
    popup.classList.remove('active');
    setTimeout(() => popup.classList.add('hidden'), 300);
};

    // Close popup when clicking outside
    document.getElementById('project-popup-overlay').addEventListener('click', (e) => {
        if (e.target.id === 'project-popup-overlay') {
            closeProject();
        }
    });

    // Close popup with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeProject();
        }
    });
});

// Add this to your scripts.js file
class ProjectsShowcase {
    constructor() {
        this.container = document.querySelector('.showcase-slides');
        this.slides = document.querySelectorAll('.showcase-slide');
        this.totalSlides = this.slides.length;
        this.currentRotation = 0;
        this.radius = 600; // Distance of cards from the center
        this.autoRotateInterval = null;
        
        this.init();
        this.setupControls();
        this.startAutoRotate();
    }

    init() {
        const angleStep = 360 / this.totalSlides;
        
        this.slides.forEach((slide, index) => {
            const angle = angleStep * index;
            slide.dataset.baseAngle = angle;
            this.updateSlidePosition(slide, angle);
        });

        this.updateCarousel();
    }

    updateSlidePosition(slide, angle) {
        const radians = angle * Math.PI / 180;
        const z = this.radius * Math.cos(radians);
        const x = this.radius * Math.sin(radians);
        
        slide.style.transform = `
            translate3d(${x}px, 0, ${z}px)
            rotateY(${angle}deg)
        `;
    }

    setupControls() {
        // Button controls
        document.querySelector('.showcase-btn.prev').onclick = () => {
            this.stopAutoRotate();
            this.rotate('left');
        };
        
        document.querySelector('.showcase-btn.next').onclick = () => {
            this.stopAutoRotate();
            this.rotate('right');
        };
        
        // Keyboard controls
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.stopAutoRotate();
                this.rotate('left');
            }
            if (e.key === 'ArrowRight') {
                this.stopAutoRotate();
                this.rotate('right');
            }
        });

        // Click on card to rotate to it
        this.slides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                this.stopAutoRotate();
                const stepsToRotate = this.calculateStepsToFront(index);
                if (stepsToRotate !== 0) {
                    this.currentRotation += (stepsToRotate * (360 / this.totalSlides));
                    this.updateCarousel();
                }
            });
        });

        // Restart auto-rotation when mouse leaves the carousel
        this.container.parentElement.addEventListener('mouseleave', () => {
            this.startAutoRotate();
        });
    }

    calculateStepsToFront(clickedIndex) {
        const currentIndex = Math.round(-this.currentRotation / (360 / this.totalSlides)) % this.totalSlides;
        let steps = clickedIndex - currentIndex;
        
        // Take the shortest path
        if (Math.abs(steps) > this.totalSlides / 2) {
            steps = steps > 0 ? steps - this.totalSlides : steps + this.totalSlides;
        }
        
        return steps;
    }

    rotate(direction) {
        const rotationAngle = 360 / this.totalSlides;
        this.currentRotation += direction === 'left' ? rotationAngle : -rotationAngle;
        this.updateCarousel();
    }

    updateCarousel() {
        this.container.style.transform = `rotateY(${this.currentRotation}deg)`;
        
        this.slides.forEach((slide, index) => {
            const baseAngle = parseInt(slide.dataset.baseAngle);
            const totalAngle = baseAngle + this.currentRotation;
            const normalizedAngle = ((totalAngle % 360) + 360) % 360;
            
            // Update slide position
            this.updateSlidePosition(slide, baseAngle);
            
            // Calculate visibility based on position
            const angleFromFront = Math.abs(((normalizedAngle + 180) % 360) - 180);
            const opacity = Math.cos(angleFromFront * Math.PI / 180);
            slide.style.opacity = Math.max(0.3, (opacity + 1) / 2);
            
            // Update active state
            const isFront = angleFromFront < 45;
            slide.classList.toggle('active', isFront);
            
            // Keep project cards facing forward
            const projectCard = slide.querySelector('.project-card');
            if (projectCard) {
                projectCard.style.transform = `rotateY(${-baseAngle - this.currentRotation}deg)`;
            }
        });
    }

    startAutoRotate() {
        if (!this.autoRotateInterval) {
            this.autoRotateInterval = setInterval(() => {
                this.rotate('right');
            }, 8000);
        }
    }

    stopAutoRotate() {
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
            this.autoRotateInterval = null;
        }
    }
}

// Initialize the carousel when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new ProjectsShowcase();
});

// Fun Facts Popup Handler
document.addEventListener('DOMContentLoaded', () => {
    const factContent = {
        musician: {
            title: "Musical Journey",
            icon: "🎷",
            content: `Music has been an integral part of my life, shaping my creative expression and problem-solving abilities. 
            From the complex harmonies of jazz to the structured beauty of classical music, I've explored various musical 
            landscapes that have enriched my perspective.`,
            highlights: [
                "Multi-instrumentalist: Saxophone, Bassoon, Clarinet, Flute",
                "2019 Jazz Downbeat Award",
                "Passionate about both classical and jazz genres"
            ],
            visualFeature: {
                type: 'wave',
                color: '#1abc9c'
            }
        },
        'gamer-tech': {
            title: "Gaming & Technology Passion",
            icon: "🎮",
            content: `My fascination with gaming and technology goes beyond mere entertainment - it's a gateway to understanding 
            user experience, digital innovation, and the future of interactive media. This passion drives me to stay at the 
            forefront of technological advancements and their practical applications.`,
            highlights: [
                "Active in gaming communities and development",
                "Hardware enthusiast and custom PC builder",
                "Exploring VR/AR technologies"
            ],
            visualFeature: {
                type: 'matrix',
                color: '#1abc9c'
            }
        },
        photography: {
            title: "Through the Lens",
            icon: "📷",
            content: `Photography is my way of capturing moments and telling stories without words. With my Canon M50 Mark II, 
            I explore the world through different perspectives, finding beauty in both grand landscapes and subtle details. 
            This visual art form has taught me valuable lessons about composition, timing, and the power of visual communication.`,
            highlights: [
                "Street and portrait photography specialist",
                "Adobe Lightroom & Photoshop workflow",
                "Event photography experience"
            ],
            visualFeature: {
                type: 'aperture',
                color: '#1abc9c'
            }
        },
        developer: {
            title: "Development Journey",
            icon: "💻",
            content: `My development journey is a perfect blend of logic and creativity. Whether it's crafting responsive 
            websites or building immersive games, I'm constantly pushing the boundaries of what's possible in digital spaces. 
            This passion for creation drives me to learn new technologies and explore innovative solutions.`,
            highlights: [
                "Full-stack web development expertise",
                "Game development with Unity and SFML",
                "UI/UX design enthusiast"
            ],
            visualFeature: {
                type: 'code',
                color: '#1abc9c'
            }
        }
    };

    function createVisualFeature(type) {
        const canvas = document.createElement('canvas');
        canvas.className = 'popup-visual';
        const ctx = canvas.getContext('2d');
        let animationFrame;
        
        switch(type) {
            case 'wave':
                // Audio waveform animation
                let phase = 0;
                function drawWave() {
                    ctx.fillStyle = 'rgba(26, 27, 31, 0.2)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    ctx.beginPath();
                    ctx.strokeStyle = '#1abc9c';
                    ctx.lineWidth = 2;
                    
                    for(let x = 0; x < canvas.width; x++) {
                        const y = canvas.height/2 + Math.sin(x/30 + phase) * 30;
                        ctx.lineTo(x, y);
                    }
                    
                    ctx.stroke();
                    phase += 0.1;
                    animationFrame = requestAnimationFrame(drawWave);
                }
                drawWave();
                break;

            case 'matrix':
                // Matrix-style falling characters
                const chars = "ABCDEF0123456789";
                const drops = [];
                
                for(let i = 0; i < canvas.width/20; i++) {
                    drops[i] = 1;
                }
                
                function drawMatrix() {
                    ctx.fillStyle = 'rgba(26, 27, 31, 0.1)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    ctx.fillStyle = '#1abc9c';
                    ctx.font = '15px monospace';
                    
                    for(let i = 0; i < drops.length; i++) {
                        const text = chars[Math.floor(Math.random() * chars.length)];
                        ctx.fillText(text, i*20, drops[i]*20);
                        
                        if(drops[i]*20 > canvas.height && Math.random() > 0.975)
                            drops[i] = 0;
                        
                        drops[i]++;
                    }
                    animationFrame = requestAnimationFrame(drawMatrix);
                }
                drawMatrix();
                break;

                case 'aperture':
                    // Camera aperture animation with camera body
                    let rotation = 0;
                    const bladeCount = 8;
                    const radius = 40;
                    
                    function drawCamera() {
                        // Clear canvas
                        ctx.fillStyle = 'rgba(26, 27, 31, 0.3)';
                        ctx.fillRect(0, 0, canvas.width, canvas.height);
                        
                        // Center position
                        const centerX = canvas.width/2;
                        const centerY = canvas.height/2;
                        
                        // Draw camera body
                        ctx.save();
                        ctx.beginPath();
                        ctx.roundRect(centerX - 100, centerY - 60, 200, 120, 10);
                        ctx.fillStyle = '#2c2c2c';
                        ctx.fill();
                        ctx.strokeStyle = '#1abc9c';
                        ctx.lineWidth = 2;
                        ctx.stroke();
                
                        // Draw lens barrel (behind aperture)
                        ctx.beginPath();
                        ctx.arc(centerX, centerY, radius + 15, 0, Math.PI * 2);
                        ctx.fillStyle = '#222';
                        ctx.fill();
                        ctx.strokeStyle = '#1abc9c';
                        ctx.lineWidth = 1;
                        ctx.stroke();
                        
                        // Draw camera details
                        // Viewfinder
                        ctx.fillStyle = '#222';
                        ctx.fillRect(centerX + 40, centerY - 50, 40, 30);
                        ctx.strokeStyle = '#1abc9c';
                        ctx.strokeRect(centerX + 40, centerY - 50, 40, 30);
                        
                        // Top LCD
                        ctx.fillStyle = '#1c1c1c';
                        ctx.fillRect(centerX - 30, centerY - 50, 50, 20);
                        ctx.strokeStyle = '#1abc9c40';
                        ctx.strokeRect(centerX - 30, centerY - 50, 50, 20);
                        
                        // Draw aperture blades
                        ctx.save();
                        ctx.translate(centerX, centerY);
                        ctx.rotate(rotation);
                        
                        for(let i = 0; i < bladeCount; i++) {
                            ctx.save();
                            ctx.rotate((Math.PI * 2 / bladeCount) * i);
                            
                            ctx.beginPath();
                            ctx.moveTo(0, 0);
                            ctx.arc(0, 0, radius, 0, Math.PI/bladeCount);
                            
                            const gradient = ctx.createLinearGradient(0, 0, radius, 0);
                            gradient.addColorStop(0, '#1abc9c');
                            gradient.addColorStop(0.5, '#1abc9c80');
                            gradient.addColorStop(1, '#1abc9c40');
                            
                            ctx.fillStyle = gradient;
                            ctx.fill();
                            
                            ctx.strokeStyle = '#1abc9c';
                            ctx.lineWidth = 0.5;
                            ctx.stroke();
                            
                            ctx.restore();
                        }
                        
                        // Draw lens rim
                        ctx.beginPath();
                        ctx.arc(0, 0, radius + 5, 0, Math.PI * 2);
                        ctx.strokeStyle = '#1abc9c';
                        ctx.lineWidth = 2;
                        ctx.stroke();
                        
                        // Center point
                        ctx.beginPath();
                        ctx.arc(0, 0, 3, 0, Math.PI * 2);
                        ctx.fillStyle = '#1abc9c';
                        ctx.fill();
                        
                        ctx.restore();
                        
                        // Add some subtle reflections/highlights
                        ctx.beginPath();
                        ctx.moveTo(centerX - 90, centerY - 50);
                        ctx.lineTo(centerX - 80, centerY - 40);
                        ctx.strokeStyle = '#1abc9c20';
                        ctx.lineWidth = 10;
                        ctx.stroke();
                        
                        rotation += 0.01;
                        animationFrame = requestAnimationFrame(drawCamera);
                    }
                    drawCamera();
                    break;

            case 'code':
                // Floating code particles
                const particles = [];
                for(let i = 0; i < 50; i++) {
                    particles.push({
                        x: Math.random() * canvas.width,
                        y: Math.random() * canvas.height,
                        size: Math.random() * 3 + 1,
                        speedX: Math.random() * 2 - 1,
                        speedY: Math.random() * 2 - 1
                    });
                }
                
                function drawParticles() {
                    ctx.fillStyle = 'rgba(26, 27, 31, 0.2)';
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    
                    ctx.fillStyle = '#1abc9c';
                    particles.forEach(p => {
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                        ctx.fill();
                        
                        p.x += p.speedX;
                        p.y += p.speedY;
                        
                        if(p.x < 0 || p.x > canvas.width) p.speedX *= -1;
                        if(p.y < 0 || p.y > canvas.height) p.speedY *= -1;
                    });
                    
                    animationFrame = requestAnimationFrame(drawParticles);
                }
                drawParticles();
                break;
        }

        return {
            element: canvas,
            cleanup: () => cancelAnimationFrame(animationFrame)
        };
    }

    function showPopup(type) {
        const content = factContent[type];
        if (!content) return;

        // Remove any existing popup
        const existingPopup = document.querySelector('.fact-popup');
        if (existingPopup) {
            existingPopup.remove();
        }

        const popupHTML = `
            <div class="fact-popup">
                <div class="popup-content">
                    <div class="popup-header">
                        <div class="header-content">
                            <span class="popup-icon">${content.icon}</span>
                            <h2>${content.title}</h2>
                        </div>
                        <button class="close-popup">×</button>
                    </div>
                    <div class="popup-body">
                        <div class="visual-container"></div>
                        <div class="content-text">
                            <p>${content.content}</p>
                            <div class="highlights">
                                ${content.highlights.map(h => `<div class="highlight-item">${h}</div>`).join('')}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', popupHTML);

        const popup = document.querySelector('.fact-popup');
        const visualContainer = popup.querySelector('.visual-container');
        
        // Add visual feature
        const { element, cleanup } = createVisualFeature(content.visualFeature.type);
        visualContainer.appendChild(element);

        // Fade in effect
        requestAnimationFrame(() => {
            popup.classList.add('active');
        });

        // Close handlers
        function closePopup() {
            popup.classList.remove('active');
            cleanup();
            setTimeout(() => popup.remove(), 300);
        }

        popup.querySelector('.close-popup').addEventListener('click', closePopup);
        popup.addEventListener('click', e => {
            if (e.target === popup) closePopup();
        });
        
        document.addEventListener('keydown', function escHandler(e) {
            if (e.key === 'Escape') {
                closePopup();
                document.removeEventListener('keydown', escHandler);
            }
        });
    }

    // Attach click handlers to fact cards
    document.querySelectorAll('.fact-card').forEach(card => {
        card.addEventListener('click', () => {
            const factType = card.getAttribute('data-fact');
            showPopup(factType);
        });
    });
});
