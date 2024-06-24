document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            navbar.classList.add("scrolled");
            navbar.classList.remove("transparent");
        } else {
            navbar.classList.add("transparent");
            navbar.classList.remove("scrolled");
        }
    });

    // Initialize the navbar state on page load
    if (window.scrollY > 0) {
        navbar.classList.add("scrolled");
        navbar.classList.remove("transparent");
    } else {
        navbar.classList.add("transparent");
        navbar.classList.remove("scrolled");
    }
});
