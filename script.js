// Mobile menu toggle
const almond = document.getElementById('almond');
const navMenu = document.getElementById('nav-menu');

almond.addEventListener('click', () => navMenu.classList.toggle('active'));

// Cart counter
let cartCount = 0;
const cartCountDisplay = document.getElementById('cart-count');

document.querySelectorAll('.add-cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    cartCountDisplay.textContent = ++cartCount;
    alert(`${button.dataset.name} added to your cart!`);
  });
});

// Close mobile menu when any nav link is clicked
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => navMenu.classList.remove('active'));
});