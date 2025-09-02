// Toggle side menu
document.getElementById('burger-btn').addEventListener('click', function () {
  document.getElementById('side-menu').classList.toggle('hidden');
});

// Navigation logic
document.querySelectorAll('.side-menu a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
    // Show selected section
    const sectionId = this.getAttribute('data-section');
    document.getElementById(sectionId).classList.remove('hidden');
    // Update URL hash
    window.location.hash = sectionId;
    // Close side menu
    document.getElementById('side-menu').classList.add('hidden');
  });
});

// On page load, show section based on hash
window.addEventListener('DOMContentLoaded', function () {
  const hash = window.location.hash.replace('#', '') || 'home';
  document.querySelectorAll('.page-section').forEach(sec => sec.classList.add('hidden'));
  const activeSection = document.getElementById(hash);
  if (activeSection) activeSection.classList.remove('hidden');
});
