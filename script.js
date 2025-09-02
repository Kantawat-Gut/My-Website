// Show/hide menu
const burger = document.getElementById('burger-btn');
const menu = document.getElementById('menu');
burger.onclick = () => menu.classList.toggle('hidden');

// Page navigation
document.querySelectorAll('#menu a').forEach(link => {
  link.onclick = (e) => {
    e.preventDefault();
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
    // Show selected section
    const pageId = link.getAttribute('data-page');
    document.getElementById(pageId).classList.remove('hidden');
    // Hide menu after click
    menu.classList.add('hidden');
    // Optionally update the url hash
    window.location.hash = pageId;
  };
});

// Show correct section on page load (default: home, or section from hash)
window.onload = () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
  const active = document.getElementById(hash);
  if (active) {
    active.classList.remove('hidden');
  } else {
    document.getElementById('home').classList.remove('hidden');
  }
};
