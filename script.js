// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle and close functionality
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

const toggleMobileMenu = () => {
    if (hamburger && navMenu) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
};

const closeMobileMenu = () => {
    if (hamburger && navMenu) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
};

if (hamburger) {
    hamburger.addEventListener('click', toggleMobileMenu);
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Scroll animation configuration
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Initialize scroll animations on page load
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll(
        '.service-card, .why-card, .step, .service-module, .method-card, .blog-card, .stat-item'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Terminal typing effect
window.addEventListener('load', () => {
    const terminalLines = document.querySelectorAll('.terminal-line');
    if (terminalLines.length === 0) return;

    const linesToType = [
        { el: terminalLines[0], text: '$ Penetration Testing', delay: 1000 },
        { el: terminalLines[1], text: '$ Vulnerability Management', delay: 3000 },
        { el: terminalLines[2], text: '$ Validation Testing', delay: 3000 },
        { el: terminalLines[3], text: '$ Threat Intelligence Consultancy', delay: 3000 }
    ];

    function typeWriter(element, text, callback) {
        let i = 0;
        element.textContent = '';
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
                if (callback) callback();
            }
        }, 30);
    }

    let totalDelay = 0;
    linesToType.forEach(line => {
        totalDelay += line.delay;
        setTimeout(() => typeWriter(line.el, line.text), totalDelay);
    });
});

// EmailJS Configuration and Form Handler
document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS with public key
    if (typeof emailjs !== 'undefined') {
        emailjs.init('1gyCZUzw2pgcF1dJ');
    }
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Validate form inputs
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Prepare template parameters
            const templateParams = {
                name: name,
                email: email,
                message: message,
                email_to: 'bogacirfancan@gmail.com'
            };
            
            try {
                const response = await emailjs.send(
                    'service_jqt31lf',
                    'template_wr1xiq',
                    templateParams
                );
                
                if (response.status === 200) {
                    alert('Message sent successfully! I will get back to you soon.');
                    contactForm.reset();
                }
            } catch (error) {
                console.error('EmailJS Error:', error);
                alert('Failed to send message. Please try again later.');
            }
        });
    }
});

// Particles.js Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Check if particles library is loaded
    if (typeof particlesJS === 'undefined') return;

    // Default particle configuration for hero sections
    const defaultConfig = {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: '#DC143C' },
            shape: { type: 'circle' },
            opacity: { value: 0.5 },
            size: { value: 3, random: true },
            move: { enable: true, speed: 2, direction: 'none', random: true }
        },
        interactivity: { events: { onhover: { enable: true, mode: 'repulse' } } }
    };

    // Lighter configuration for contact pages
    const contactConfig = {
        particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: '#DC143C' },
            shape: { type: 'circle' },
            opacity: { value: 0.3 },
            size: { value: 2, random: true },
            move: { enable: true, speed: 1.5, direction: 'none', random: true }
        },
        interactivity: { events: { onhover: { enable: true, mode: 'repulse' } } }
    };

    // Elements that use default configuration
    const defaultIds = [
        'particles-js-home', 'particles-js-home-why', 'particles-js-home-stats',
        'particles-js-services-hero', 'particles-js', 'particles-js-services-methodology',
        'particles-js-services-certifications', 'particles-js-blog-hero', 'particles-js-blog-grid'
    ];

    // Elements that use contact (lighter) configuration
    const contactIds = [
        'particles-js-contact-hero', 'particles-js-contact-process', 'particles-js-contact-skills'
    ];

    // Initialize particles for default elements
    defaultIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            particlesJS(id, defaultConfig);
        }
    });

    // Initialize particles for contact elements
    contactIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            particlesJS(id, contactConfig);
        }
    });
});