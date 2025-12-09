// script.js
// Mobile menu toggle and FAQ behavior

const btn = document.querySelector('.menu-btn');
const menu = document.getElementById('main-menu');

btn?.addEventListener('click', () => {
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
    menu.style.flexDirection = 'column';
    menu.style.position = 'absolute';
    menu.style.right = '12px';
    menu.style.top = '64px';
    menu.style.background = 'rgba(255,255,255,0.98)';
    menu.style.padding = '12px';
    menu.style.borderRadius = '10px';
    menu.style.boxShadow = '0 6px 24px rgba(15,23,42,0.08)';
  }
});

// Close mobile menu on link click
menu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    if (window.innerWidth <= 640) {
      menu.style.display = 'none';
      btn.setAttribute('aria-expanded', 'false');
    }
  });
});

// Collapse other details when one is opened (FAQ)
document.querySelectorAll('#faq details').forEach((d) => {
  d.addEventListener('toggle', () => {
    if (d.open) {
      document.querySelectorAll('#faq details').forEach(other => {
        if (other !== d) other.open = false;
      });
    }
  });
});