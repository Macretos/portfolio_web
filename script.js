// Función para crear efecto de ola en las letras
function createWaveEffect(element) {
  const text = element.textContent;
  element.textContent = '';
  /** Para cada letra del texto, se crea un span con la clase 'wave' 
   * y se le asigna un retraso de animación basado en su posición en el texto.
   *  Esto crea un efecto de ola cuando se aplica la animación CSS. */
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.className = 'wave';
    span.style.animationDelay = i * 0.04 + 's';
    element.appendChild(span);
  }
}
/* La función removeWaveEffect se encarga de eliminar el efecto de ola, 
 restaurando el texto original del elemento. 
 Se seleccionan todos los spans con la clase 'wave', se concatenan sus textos
  y se asigna el resultado al contenido del elemento. */
function removeWaveEffect(element) {
  const spans = element.querySelectorAll('.wave');
  let fullText = '';
  spans.forEach(span => {
    fullText += span.textContent;
  });
  element.textContent = fullText;
}

// Aplicar efecto de ola a todas las secciones con h2
document.querySelectorAll('section[id="projects"], section[id="about"], section[id="works"]').forEach(section => {
  const heading = section.querySelector('h2');
  
  if (heading) {
    section.addEventListener('mouseenter', () => {
      createWaveEffect(heading);
    });
    
    section.addEventListener('mouseleave', () => {
      removeWaveEffect(heading);
    });
  }
});
