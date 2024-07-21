document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const logoOutside = document.querySelector('.logo-outside');

    function updateNavbarState() {
        if (window.scrollY > 0) {
            navbar.classList.remove('transparent');
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('transparent');
        }

        if (navbar.classList.contains('scrolled')) {
            logoOutside.style.color = getComputedStyle(document.documentElement).getPropertyValue('--menu-color-scrolled');
        } else if (navbar.classList.contains('transparent')) {
            logoOutside.style.color = getComputedStyle(document.documentElement).getPropertyValue('--menu-color-transparent');
        } else {
            logoOutside.style.color = getComputedStyle(document.documentElement).getPropertyValue('--menu-color');
        }
    }

    // Initial call
    updateNavbarState();

    // Update on scroll
    window.addEventListener('scroll', updateNavbarState);
});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("openModalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


