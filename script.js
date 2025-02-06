function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');

    body.classList.toggle('light');
    body.classList.toggle('dark');

    if (body.classList.contains('light')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

document.getElementById('toggle-theme').addEventListener('click', toggleTheme);

function revealProjectsOnScroll() {
    const projectCards = document.querySelectorAll('.project-card');
    const windowHeight = window.innerHeight;

    projectCards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < windowHeight - 100) {
            card.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', revealProjectsOnScroll);
window.addEventListener('load', revealProjectsOnScroll);
