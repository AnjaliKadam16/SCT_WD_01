// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});
