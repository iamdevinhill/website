// Smooth scrolling and form submission
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        
        // Smoothly scroll to the section
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        // Add active state to clicked menu item
        document.querySelectorAll('.navbar-nav li a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        // Close mobile menu if open
        const navbarNav = document.querySelector('.navbar-nav');
        const menuToggle = document.querySelector('.menu-toggle');
        
        if (navbarNav.classList.contains('active')) {
            navbarNav.classList.remove('active');
            menuToggle.classList.remove('active');
        }
    });
});

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.navbar-nav').classList.toggle('active');
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent. Connecting to digital realm...');
    this.reset();
});
