document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  const toggleMenu = (e) => {
    e.preventDefault();
    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
    const icon = hamburger.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  };

  hamburger.addEventListener('click', toggleMenu);
});