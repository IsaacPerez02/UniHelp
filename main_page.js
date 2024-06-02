document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            if (link.classList.contains('nav-link')) {
                const target = link.getAttribute('href');
                window.location.href = target;
            }
        });
    });
});

