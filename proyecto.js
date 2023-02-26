function mostrarCarga() {
    const carga = document.createElement('div');
    carga.classList.add('carga');
    document.body.appendChild(carga);
  
    setTimeout(() => {
      carga.remove();
    }, 3000);
  }
  
  async function realizarAccion() {
    mostrarCarga();
    // Realizar acción asíncrona, como una solicitud de API
    await fetch('https://platzi.com/p/ebellino');
    // Actualizar UI o realizar otra acción después de que se completa la acción asíncrona
  }
  
  // Seleccionar todos los enlaces internos
const links = document.querySelectorAll('a[href^="#"]');

// Añadir un evento de clic a cada enlace interno
links.forEach(link => {
  link.addEventListener('click', e => {
    // Prevenir el comportamiento predeterminado del enlace
    e.preventDefault();
    
    // Obtener la sección de destino
    const target = document.querySelector(link.getAttribute('href'));

    // Calcular la posición de desplazamiento suave
    const offset = target.offsetTop;
    const scroll = Math.abs(window.scrollY - offset) < 100 ? offset : window.scrollY + (offset - window.scrollY) * 0.1;

    // Animate el desplazamiento suave
    window.scrollTo({
      top: scroll,
      behavior: 'smooth'
    });
  });
});

