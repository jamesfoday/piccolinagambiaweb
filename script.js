let currentIndex = 0;
const totalSlides = document.querySelectorAll('.carousel-item').length;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * (397 + 20); // Adjust for the width (397px) and gap (20px)
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}px)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab contents
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        tabcontent[i].classList.remove("active");
    }

    // Remove the active class from all tab links
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "flex";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.className += " active";
}

// Set the default tab to be displayed
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tab-link")[0].click();
});

function changeLanguage() {
    const language = document.getElementById('language-select').value;
    if (language === 'es') {
        document.body.innerHTML = 'Contenido en Español';
    } else if (language === 'fr') {
        document.body.innerHTML = 'Contenu en Français';
    } else if (language === 'de') {
        document.body.innerHTML = 'Inhalt auf Deutsch';
    } else if (language === 'zh') {
        document.body.innerHTML = '中文内容';
    } else {
        document.body.innerHTML = 'English Content';
    }
}
function toggleMenu() {
    document.getElementById('offcanvasMenu').classList.toggle('active');
}

function toggleMenu() {
    document.getElementById('offcanvasMenu').classList.toggle('active');
}

function toggleMenu() {
    document.getElementById('offcanvasMenu').classList.toggle('active');
}

function toggleMenu() {
    document.getElementById('offcanvasMenu').classList.toggle('active');
}

function toggleMenu() {
    document.getElementById('offcanvasMenu').classList.toggle('active');
}

function toggleMenu() {
    document.getElementById('offcanvasMenu').classList.toggle('active');
}

function toggleSubMenu(submenuId) {
    var submenu = document.getElementById(submenuId);
    var allSubmenus = document.querySelectorAll('.submenu');
    allSubmenus.forEach(function(sub) {
        if (sub !== submenu) {
            sub.style.display = 'none';
        }
    });
    if (submenu.style.display === 'flex') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'flex';
    }
}



document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('a.smooth-transition');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const href = this.href;

            document.body.classList.add('fade-out');

            setTimeout(function() {
                window.location = href;
            }, 500); // match the CSS animation duration
        });
    });
});

