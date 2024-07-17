document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.menu-toggle');
    const menuLinks = document.querySelectorAll('.directory-bar a');

    toggleButton.addEventListener('click', function() {
        menuLinks.forEach(link => {
            link.classList.toggle('active');
        });
    });
});