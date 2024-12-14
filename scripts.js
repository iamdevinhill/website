document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor behavior

            const target = document.querySelector(this.getAttribute('href')); // Get the target section

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });

                // Manage active state for navigation links
                document.querySelectorAll('.navbar-nav li a').forEach(link => link.classList.remove('active'));
                this.classList.add('active'); // Add 'active' class to the clicked link

                // Close mobile menu if it's open
                toggleMobileMenu(false);
            }
        });
    });

    // Mobile menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const navbarNav = document.querySelector('.navbar-nav');

    if (menuToggle && navbarNav) {
        menuToggle.addEventListener('click', function () {
            // Toggle the active class on the mobile menu
            const isActive = navbarNav.classList.contains('active');
            toggleMobileMenu(!isActive); // Toggle based on current state
        });
    }

    // Function to toggle mobile menu visibility
    function toggleMobileMenu(isOpen) {
        if (menuToggle && navbarNav) {
            menuToggle.classList.toggle('active', isOpen); // Toggle the menu button's active state
            navbarNav.classList.toggle('active', isOpen); // Toggle the mobile menu's visibility
        }
    }

    // Prevent initial scroll behavior on page load
    window.addEventListener('load', () => {
        // Reset the history to prevent automatic scroll to anchor on page load
        history.replaceState(null, null, window.location.href);
        window.scrollTo(0, 0); // Ensure the page loads at the top
    });

    // Update current year dynamically in footer
    const currentYearElement = document.querySelector('.current-year');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear(); // Display the current year
    }

    // Close mobile menu if the user clicks outside of it
    document.addEventListener('click', function (e) {
        if (!navbarNav.contains(e.target) && !menuToggle.contains(e.target)) {
            toggleMobileMenu(false); // Close the menu if the click is outside
        }
    });
});
