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

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1'; // Make it a one-shot animation
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.service-card, .why-card, .step, .service-module, .method-card, .blog-card, .stat-item');
    
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
    if (terminalLines.length > 0) {
        const linesToType = [
            { el: terminalLines[0], text: '$ Penetration Testing', delay: 1000 },
            { el: terminalLines[1], text: '$ Vulnerability Management', delay: 3000 },
            { el: terminalLines[2], text: '$ Validation Testing', delay: 3000 },
            { el: terminalLines[3], text: '$ Threat Intelligence Consultancy', delay: 3000 }
        ];

        function typeWriter(element, text, callback) {
            let i = 0;
            element.textContent = '';
            function type() {
                if (i < text.length) {
                    element.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, 30);
                } else if (callback) {
                    callback();
                }
            }
            type();
        }

        let totalDelay = 0;
        linesToType.forEach(line => {
            totalDelay += line.delay;
            setTimeout(() => typeWriter(line.el, line.text), totalDelay);
        });
    }
});

// EmailJS Configuration and Form Handler
document.addEventListener('DOMContentLoaded', () => {
    // Initialize EmailJS
    emailjs.init('1gyCZUzw2pgcF1dJ');
    
    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Prepare template parameters
            const templateParams = {
                name: name,
                email: email,
                message: message,
                email_to: 'bogacirfancan@gmail.com'
            };
            
            try {
                // Send email using EmailJS
                const response = await emailjs.send(
                    'service_jqt31lf',      // Service ID
                    'template_wr1xiq',      // Template ID
                    templateParams
                );
                
                if (response.status === 200) {
                    // Show success message
                    alert('Message sent successfully! I will get back to you soon.');
                    contactForm.reset();
                } else {
                    alert('Failed to send message. Please try again.');
                }
            } catch (error) {
                console.error('EmailJS error:', error);
                alert('An error occurred while sending your message. Please try again.');
            }
        });
    }
});

// Particles.js Initialization
// NOTE: The 'particleConfigs' variable is expected to be defined. It was created in a previous step but is missing from the current context.
document.addEventListener('DOMContentLoaded', () => {
    if (typeof particlesJS !== 'undefined' && typeof particleConfigs !== 'undefined') {
    // Home & Services IDs (Default Config)
    const defaultIds = [
        'particles-js-home', 'particles-js-home-why', 'particles-js-home-stats',
        'particles-js-services-hero', 'particles-js', 'particles-js-services-methodology', 'particles-js-services-certifications',
        'particles-js-blog-hero', 'particles-js-blog-grid'
    ];

    // Contact IDs (Contact Config - slightly lighter)
    const contactIds = [
        'particles-js-contact-hero', 'particles-js-contact-process', 'particles-js-contact-skills'
    ];

    defaultIds.forEach(id => {
        if (document.getElementById(id)) particlesJS(id, particleConfigs.default);
    });

    contactIds.forEach(id => {
        if (document.getElementById(id)) particlesJS(id, particleConfigs.contact);
    });
    }
});