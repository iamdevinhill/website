// Smooth scrolling and active link management
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default action of the link (e.g., jumping to the anchor)

        const target = document.querySelector(this.getAttribute('href')); // Get the target section using the href attribute

        if (target) {
            // Smoothly scroll to the target section
            target.scrollIntoView({
                behavior: 'smooth', // Specify smooth scrolling
                block: 'start' // Align the target section to the top of the viewport
            });

            // Manage active state on navigation links
            document.querySelectorAll('.navbar-nav li a').forEach(link => link.classList.remove('active')); // Remove 'active' class from all links
            this.classList.add('active'); // Add 'active' class to the clicked link

            // Close mobile menu if it's open
            const navbarNav = document.querySelector('.navbar-nav'); // Select the mobile menu
            const menuToggle = document.querySelector('.menu-toggle'); // Select the menu toggle button

            // If the navbar is active (open), remove the 'active' class to close it
            if (navbarNav.classList.contains('active')) {
                navbarNav.classList.remove('active'); // Close the mobile menu
                menuToggle.classList.remove('active'); // Remove 'active' state from the toggle button
            }
        }
    });
});

// Mobile menu toggle functionality
const menuToggle = document.querySelector('.menu-toggle'); // Select the menu toggle button
const navbarNav = document.querySelector('.navbar-nav'); // Select the mobile navigation menu

if (menuToggle && navbarNav) {
    // Toggle the active state for the mobile menu
    menuToggle.addEventListener('click', function () {
        this.classList.toggle('active'); // Toggle the 'active' class on the menu toggle button
        navbarNav.classList.toggle('active'); // Toggle the 'active' class on the mobile menu (shows or hides it)
    });
}

// Update the current year dynamically
const currentYearElement = document.querySelector('.current-year'); // Select the element that should display the current year

if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear(); // Set the text content to the current year
}
