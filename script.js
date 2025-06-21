const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.main-menu');
menuToggle.addEventListener('click', () => {
    mainMenu.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});
document.querySelectorAll('.dropdown').forEach(dropdown => {
    dropdown.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }
    });
});
document.querySelector('.quote-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your quote request has been submitted. We’ll be in touch soon!');
});