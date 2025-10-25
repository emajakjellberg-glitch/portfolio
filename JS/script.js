document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('menu');
  const icon = hamburger.querySelector('.material-icons');

  hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    icon.textContent = menu.classList.contains('show') ? 'close' : 'menu';
  });
});


