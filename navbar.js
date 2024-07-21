document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const menuIcon = document.getElementById('menuIcon');
    const searchIcon = document.getElementById('searchIcon');
    const logoOutside = document.querySelector('.logo-outside');

    function updateIconColors() {
        if (window.scrollY > 0) {
            navbar.classList.remove('transparent');
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('transparent');
        }

        if (navbar.classList.contains('scrolled')) {
            menuIcon.style.filter = 'brightness(0) saturate(100%) invert(69%) sepia(85%) saturate(339%) hue-rotate(352deg) brightness(99%) contrast(100%)';
            searchIcon.style.filter = 'brightness(0) saturate(100%) invert(69%) sepia(85%) saturate(339%) hue-rotate(352deg) brightness(99%) contrast(100%)';
            logoOutside.style.color = getComputedStyle(document.documentElement).getPropertyValue('--menu-color-scrolled');
        } else if (navbar.classList.contains('transparent')) {
            menuIcon.style.filter = 'brightness(0) saturate(100%) invert(100%) sepia(2%) saturate(8%) hue-rotate(153deg) brightness(111%) contrast(97%)';
            searchIcon.style.filter = 'brightness(0) saturate(100%) invert(100%) sepia(2%) saturate(8%) hue-rotate(153deg) brightness(111%) contrast(97%)';
            logoOutside.style.color = getComputedStyle(document.documentElement).getPropertyValue('--menu-color-transparent');
        } else {
            menuIcon.style.filter = 'none';
            searchIcon.style.filter = 'none';
            logoOutside.style.color = getComputedStyle(document.documentElement).getPropertyValue('--menu-color');
        }
    }

    // Initial call
    updateIconColors();

    // Update on scroll
    window.addEventListener('scroll', updateIconColors);
});


// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Get the modal
    var modal = document.querySelector(".modal");

    // Get all buttons that open the modal
    var btns = document.querySelectorAll(".openModalBtn");

    // Get the <span> element that closes the modal
    var span = document.querySelector(".closeBtn");

    // Get modal header and body
    var modalHeader = document.querySelector(".modal-header");
    var modalBody = document.querySelector(".modal-body");

    // When the user clicks any button, open the modal and set its content
    btns.forEach(function(btn) {
        btn.onclick = function() {
            modalHeader.textContent = btn.getAttribute("data-modal-header");
            modalBody.innerHTML = btn.getAttribute("data-modal-content");
            modal.style.display = "block";
        }
    });

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
});
