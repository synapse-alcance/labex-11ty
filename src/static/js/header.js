const toggle = document.querySelector('.header-toggle');
const nav = document.querySelector('.header-nav');
const backdrop = document.querySelector('.header-backdrop');

toggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  backdrop.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

backdrop.addEventListener('click', () => {
  nav.classList.remove('open');
  backdrop.classList.remove('open');
  toggle.setAttribute('aria-expanded', false);
});