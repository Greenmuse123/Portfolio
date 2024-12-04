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
                    techStack: ["HTML", "CSS", "JavaScript", "Responsive Design", "SVG Graphics"],
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
            this.accessToken = 'bc3d3c60e5ab50daf73bd7e31f2e855f';
            this.limit = 12;
        }

        async loadPhotos() {
            try {
                const response = await fetch(
                    `https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url&limit=${this.limit}&access_token=${this.accessToken}`
                );
                const data = await response.json();
                return data.data.filter(item => item.media_type === 'IMAGE');
            } catch (error) {
                console.error('Error fetching Instagram photos:', error);
                return [];
            }
        }

        createGalleryHTML(photos) {
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

        createLoadingHTML() {
            return `
                <div class="gallery-loading">
                    <div class="gallery-spinner"></div>
                    <p>Loading photos from Instagram...</p>
                </div>
            `;
        }

        createErrorHTML() {
            return `
                <div class="gallery-error">
                    <i class="fas fa-exclamation-circle"></i>
                    <p>Couldn't load photos from Instagram. Please try again later.</p>
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
        const gallery = new InstagramGallery();
        popupImage.innerHTML = gallery.createLoadingHTML();
        
        gallery.loadPhotos()
            .then(photos => {
                popupImage.innerHTML = photos.length ? 
                    gallery.createGalleryHTML(photos) : 
                    gallery.createErrorHTML();
            })
            .catch(() => {
                popupImage.innerHTML = gallery.createErrorHTML();
            });
            
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
        this.radius = 400;
        
        this.init();
        this.setupControls();
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
        slide.style.transform = `
            rotateY(${angle}deg) 
            translateZ(${this.radius}px)`;
    }

    setupControls() {
        document.querySelector('.showcase-btn.prev').onclick = () => this.rotate('left');
        document.querySelector('.showcase-btn.next').onclick = () => this.rotate('right');
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.rotate('left');
            if (e.key === 'ArrowRight') this.rotate('right');
        });

        // Simplified click handling
        this.slides.forEach((slide, index) => {
            slide.addEventListener('click', () => {
                const stepsToRotate = this.calculateStepsToFront(index);
                if (stepsToRotate !== 0) {
                    this.currentRotation += (stepsToRotate * (360 / this.totalSlides));
                    this.updateCarousel();
                }
            });
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
            
            // Calculate visibility
            const angleFromFront = Math.abs(((normalizedAngle + 180) % 360) - 180);
            const opacity = Math.cos(angleFromFront * Math.PI / 180);
            slide.style.opacity = Math.max(0.3, (opacity + 1) / 2);
            
            // Make all slides clickable but highlight the front one
            const isFront = angleFromFront < 45;
            slide.classList.toggle('active', isFront);
            
            // Keep cards facing front
            const projectCard = slide.querySelector('.project-card');
            if (projectCard) {
                projectCard.style.transform = `rotateY(${-baseAngle - this.currentRotation}deg)`;
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new ProjectsShowcase();
});