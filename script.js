 // Smooth scrolling and form submission
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu if open
        document.querySelector('.navbar-nav').classList.remove('active');
        document.querySelector('.menu-toggle').classList.remove('active');
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