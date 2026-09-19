// Mobile Menu Toggle
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    if (menu) {
        menu.classList.toggle("active");
    }
}

// Close mobile menu when clicking any nav link
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        const menu = document.querySelector(".nav-links");
        if (menu && menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
    });
});

// Scroll Reveal Animations using Intersection Observer
const revealElements = document.querySelectorAll(".about-card, .project-card, .skill, .education-card");
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px"
    });

    revealElements.forEach(function (el) {
        el.style.opacity = "0";
        el.style.transform = "translateY(24px)";
        el.style.transition = "opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(el);
    });
}