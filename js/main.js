// Portfolio Carousel Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.portfolio-slide');
    const dotsContainer = document.querySelector('.portfolio-dots');
    const prevBtn = document.querySelector('.nav-prev');
    const nextBtn = document.querySelector('.nav-next');
    
    let currentSlide = 0;
    let slideInterval;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    // Initialize autoplay
    startSlideshow();

    // Navigation functions
    function showSlide(index) {
        slides.forEach(slide => {
            slide.classList.remove('active', 'slide-in');
            slide.style.display = 'none';
        });
        dots.forEach(dot => dot.classList.remove('active'));

        slides[index].style.display = 'block';
        setTimeout(() => {
            slides[index].classList.add('active', 'slide-in');
        }, 0);
        dots[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    function goToSlide(index) {
        currentSlide = index;
        showSlide(currentSlide);
        resetTimer();
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetTimer() {
        clearInterval(slideInterval);
        startSlideshow();
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetTimer();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetTimer();
    });

    // Modal Content
    const projectDetails = {
        1: {
            title: "3D Product E-Commerce Website",
            description: `
                <h4>Project Overview</h4>
                <p>An innovative 3D product e-commerce platform that offers an interactive and immersive shopping experience. Customers can view, rotate, and customize products in real-time before making a purchase.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Interactive 3D product visualization with customizable options</li>
                    <li>User-friendly interface for browsing and selecting products</li>
                    <li>Responsive design for seamless performance across devices</li>
                    <li>Optimized loading of 3D models for enhanced performance</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <ul>
                    <li>HTML for structure and content layout</li>
                    <li>CSS for styling and responsive design</li>
                    <li>JavaScript for dynamic interactions and functionality</li>
                    <li><code>&lt;model-viewer&gt;</code> for rendering and interacting with 3D product models</li>
                    <li>Efficient handling of 3D assets with lazy loading techniques</li>
                </ul>`,
        },
        2: {
            title: "NASA Chatbot",
            description: `
                <h4>Project Overview</h4>
                <p>An intelligent chatbot designed to provide real-time information about NASA missions, space exploration, and astronomical events. The chatbot delivers an engaging and educational experience for users of all ages.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Instant answers to queries about NASA missions and space science</li>
                    <li>Interactive conversation with natural language understanding</li>
                    <li>Real-time updates on upcoming space events and launches</li>
                    <li>Educational resources, facts, and trivia about space</li>
                    <li>Multi-platform accessibility (web and mobile)</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <ul>
                    <li>HTML for creating the chatbot interface</li>
                    <li>CSS for styling and responsive design</li>
                    <li>JavaScript for implementing chatbot interactions</li>
                    <li>Integration with NASA’s public APIs for fetching real-time data</li>
                    <li>Basic AI and NLP using third-party libraries or APIs</li>
                </ul>`,
        },
        3: {
            title: "Movie Ticket Booking System",
            description: `
                <h4>Project Overview</h4>
                <p>A user-friendly movie ticket booking platform that provides real-time showtimes, seat selection, and secure payment options, offering a seamless and hassle-free booking experience.</p>
                
                <h4>Key Features</h4>
                <ul>
                    <li>Real-time movie showtimes and availability</li>
                    <li>Seat selection and booking confirmation</li>
                    <li>Multiple secure payment gateway options</li>
                    <li>Instant booking confirmation and notifications</li>
                    <li>User-friendly interface for easy navigation</li>
                </ul>
                
                <h4>Technical Implementation</h4>
                <ul>
                    <li>HTML, CSS, and JavaScript for front-end development</li>
                    <li>Node.js backend for handling requests and payment processing</li>
                    <li>Database integration for movie data and booking management</li>
                    <li>Integration with payment gateways for secure transactions</li>
                    <li>Responsive design for seamless use on all devices</li>
                </ul>`,
        }
    };        

    // Modal handling
    const portfolioModal = document.getElementById('portfolioModal');
    portfolioModal.addEventListener('show.bs.modal', function(event) {
        const button = event.relatedTarget;
        const projectId = button.getAttribute('data-project');
        const project = projectDetails[projectId];
        
        const modalTitle = this.querySelector('.modal-title');
        const modalBody = this.querySelector('.modal-body');
        
        modalTitle.textContent = project.title;
        modalBody.innerHTML = project.description;
    });

    // Pause autoplay when modal is open
    portfolioModal.addEventListener('show.bs.modal', () => {
        clearInterval(slideInterval);
    });

    // Resume autoplay when modal is closed
    portfolioModal.addEventListener('hidden.bs.modal', () => {
        startSlideshow();
    });

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
            resetTimer();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
            resetTimer();
        }
    });

    // Pause autoplay on hover
    slides.forEach(slide => {
        slide.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        
        slide.addEventListener('mouseleave', () => {
            startSlideshow();
        });
    });
});

