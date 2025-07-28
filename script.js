// Chocolates William - JavaScript Funcionalidad

// Función para mostrar mensaje de bienvenida (botón principal)
function mostrarMensajeBienvenida() {
    alert("¡Bienvenido a Chocolates William! Explora nuestros deliciosos productos artesanales.");
    // Hacer scroll suave a la sección de productos
    document.getElementById('productos').scrollIntoView({ 
        behavior: 'smooth' 
    });
}

// Función para filtrar productos por categoría
function filtrarProductos(categoria) {
    // Obtener todos los productos
    const productos = document.querySelectorAll('.product-item');
    const botonesFiltro = document.querySelectorAll('.filter-btn');
    
    // Remover clase active de todos los botones
    botonesFiltro.forEach(btn => btn.classList.remove('active'));
    
    // Agregar clase active al botón clickeado
    event.target.classList.add('active');
    
    // Mostrar/ocultar productos según la categoría
    productos.forEach(producto => {
        if (categoria === 'todos' || producto.dataset.category === categoria) {
            producto.style.display = 'block';
            producto.style.animation = 'fadeIn 0.5s ease-in';
        } else {
            producto.style.display = 'none';
        }
    });
    
    // Mostrar mensaje informativo
    const totalVisible = document.querySelectorAll('.product-item[style*="block"]').length;
    console.log(`Mostrando ${totalVisible} productos de la categoría: ${categoria}`);
}

// Funcionalidad para botones "Agregar al Carrito"
document.addEventListener('DOMContentLoaded', function() {
    const botonesCarrito = document.querySelectorAll('.btn-chocolate');
    
    botonesCarrito.forEach(boton => {
        if (boton.innerHTML.includes('Agregar al Carrito')) {
            boton.addEventListener('click', function() {
                const nombreProducto = this.closest('.product-info').querySelector('.product-title').textContent;
                const precioProducto = this.closest('.product-info').querySelector('.product-price').textContent;
                
                alert(`${nombreProducto} (${precioProducto}) agregado al carrito exitosamente!`);
                
                // Efecto visual temporal
                const originalHTML = this.innerHTML;
                this.innerHTML = '<i class="fas fa-check me-1"></i>¡Agregado!';
                this.style.backgroundColor = '#28a745';
                this.disabled = true;
                
                setTimeout(() => {
                    this.innerHTML = originalHTML;
                    this.style.backgroundColor = '';
                    this.disabled = false;
                }, 1500);
                
                // Simular contador de carrito (en implementación real sería persistente)
                console.log(`Producto agregado: ${nombreProducto} - ${precioProducto}`);
            });
        }
    });
});

// Efecto de animación para elementos que entran en vista
function animateOnScroll() {
    const elements = document.querySelectorAll('.animated-title');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Navegación suave para enlaces internos
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Event listeners para scroll y animaciones
window.addEventListener('scroll', animateOnScroll);

// Inicializar animaciones cuando se carga la página
window.addEventListener('load', function() {
    animateOnScroll();
    console.log('Chocolates William - Sitio web cargado correctamente');
});

// Funcionalidad adicional: cambiar estilo del navbar al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(139, 69, 19, 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--chocolate-brown)';
    }
});

// Función para mostrar información de contacto (botón de ejemplo adicional)
function mostrarContacto() {
    const info = `
        📍 Dirección: Toluca, Estado de México
        📞 Teléfono: +52 55 1234 5678
        📧 Email: info@chocolateswilliam.com
        🕒 Horario: Lun-Vie 9:00-19:00
    `;
    alert(info);
}

// Validación simple para formulario de contacto (si se agrega)
function validarFormulario(formulario) {
    const campos = formulario.querySelectorAll('input[required], textarea[required]');
    let esValido = true;
    
    campos.forEach(campo => {
        if (!campo.value.trim()) {
            campo.style.borderColor = '#dc3545';
            esValido = false;
        } else {
            campo.style.borderColor = '#28a745';
        }
    });
    
    return esValido;
}

// Función para generar un saludo personalizado según la hora
function obtenerSaludo() {
    const hora = new Date().getHours();
    if (hora < 12) return "¡Buenos días!";
    if (hora < 18) return "¡Buenas tardes!";
    return "¡Buenas noches!";
}

// Mostrar saludo personalizado en consola
console.log(`${obtenerSaludo()} Bienvenido a Chocolates William`);
