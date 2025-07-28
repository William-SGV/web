// Saludo en consola
console.log('¡Bienvenido a Chocolates William!');

// Inicializar AOS
AOS.init({ duration: 800, offset: 100 });

// Toggle menú móvil
document.getElementById('menu-toggle')
  .addEventListener('click', () => {
    document.getElementById('main-nav').classList.toggle('show');
  });

// Smooth scroll para anclas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Contador de clics 
const contadorBtn = document.getElementById('contadorBtn');
const display = document.getElementById('counter');
let count = 0;
if (contadorBtn && display) {
  contadorBtn.addEventListener('click', () => {
    count++;
    display.textContent = count;
  });
}
