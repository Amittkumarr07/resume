// Mobile Menu Toggle
const menuBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Optional: Close the mobile menu after clicking a link
            navLinks.classList.remove('active');
        }
    });
});
