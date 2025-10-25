document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');

  const toggleMenu = (e) => {
    e.preventDefault(); 
    menu.classList.toggle('show');
    hamburger.classList.toggle('active');
  };

  hamburger.addEventListener('click', toggleMenu);
  hamburger.addEventListener('touchstart', toggleMenu);
});


