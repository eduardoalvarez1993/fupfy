// DOM Elements
const modalOverlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const leadForm = document.getElementById('lead-form');
const successMessage = document.getElementById('success-message');

// Buttons that open modal
const btnComecar = document.getElementById('btn-comecar');
const btnComeceGratis = document.getElementById('btn-comece-gratis');
const btnFooterCta = document.getElementById('btn-footer-cta');

const btnEssencial = document.getElementById('btn-plan-comecar');
const btnCrescer = document.getElementById('btn-plan-crescer');
const btnPro = document.getElementById('btn-plan-evoluir');



// Mobile menu elements
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// FAQ elements
const faqItems = document.querySelectorAll('.faq-item');

// Modal Functions
function openModal() {
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset form and hide success message
    setTimeout(() => {
        leadForm.style.display = 'block';
        successMessage.style.display = 'none';
        leadForm.reset();
    }, 300);
}

function showSuccessMessage() {
    leadForm.style.display = 'none';
    successMessage.style.display = 'block';
    
    // Auto close modal after 3 seconds
    setTimeout(() => {
        closeModal();
    }, 3000);
}

// Event Listeners for Modal
btnComecar.addEventListener('click', openModal);
btnComeceGratis.addEventListener('click', openModal);
btnFooterCta.addEventListener('click', openModal);

btnEssencial.addEventListener('click', openModal);
btnCrescer.addEventListener('click', openModal);
btnPro.addEventListener('click', openModal);

modalClose.addEventListener('click', closeModal);

// Close modal when clicking outside
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
        closeModal();
    }
});

// Form Submission
leadForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(leadForm);
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const empresa = document.getElementById('empresa').value;
    
    // Simple validation
    if (!nome || !email || !telefone) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    // Simulate form submission (since we're not saving anywhere)
    console.log('Lead Data:', {
        nome,
        email,
        telefone,
        empresa
    });
    
    // Show success message
    showSuccessMessage();
});

// Mobile Menu Toggle
mobileMenuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    mobileMenuToggle.classList.toggle('active');
});

// FAQ Accordion
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        // Close all FAQ items
        faqItems.forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            item.classList.add('active');
        }
    });
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// Button Hover Effects (Enhanced)
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline').forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Pricing Card Hover Effects
document.querySelectorAll('.pricing-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        if (!this.classList.contains('featured')) {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        if (!this.classList.contains('featured')) {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    });
});

// Testimonial Cards Animation
document.querySelectorAll('.testimonial').forEach(testimonial => {
    testimonial.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
    });
    
    testimonial.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.step, .benefit, .pricing-card, .testimonial').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form Input Focus Effects
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});

// Loading Animation for Form Submission
function showLoadingState(button) {
    const originalText = button.textContent;
    button.textContent = 'Enviando...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
    }, 2000);
}

// Enhanced Form Submission with Loading
const originalSubmitHandler = leadForm.onsubmit;
leadForm.addEventListener('submit', (e) => {
    const submitButton = leadForm.querySelector('button[type="submit"]');
    showLoadingState(submitButton);
});

// Add ripple effect to buttons
function createRipple(event) {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add('ripple');
    
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
        ripple.remove();
    }
    
    button.appendChild(circle);
}

// Add ripple effect to all buttons
document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline').forEach(button => {
    button.addEventListener('click', createRipple);
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn-primary, .btn-secondary, .btn-outline {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    .nav-menu.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        padding: 1rem;
        gap: 1rem;
    }
    
    .mobile-menu-toggle.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }
    
    .mobile-menu-toggle.active span:nth-child(2) {
        opacity: 0;
    }
    
    .mobile-menu-toggle.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }
    
    @media (max-width: 768px) {
        .navbar {
            position: relative;
        }
        
        .nav-menu {
            display: none;
        }
    }
`;
document.head.appendChild(style);

console.log('FUPFY Landing Page JavaScript loaded successfully!');

