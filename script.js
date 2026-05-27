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
  
  if (heading && heading.textContent.trim() !== 'Soon...' ) {
    section.addEventListener('mouseenter', () => {
      createWaveEffect(heading);
    });
    
    section.addEventListener('mouseleave', () => {
      removeWaveEffect(heading);
    });
  }
});


//Nuevas funciones
function suma(numbers){
  let sum = 0;
  for(let i = 0; i < numbers.length; i++){  
    sum += numbers[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(suma(numbers)); // Output: 15
console.log("Soy demasiado gay");



function calculateInvestment() {
  const initialInput = parseFloat(document.getElementById('initialInput').value);
  const monthlyInput = parseFloat(document.getElementById('monthlyInput').value);
  const interestInput = parseFloat(document.getElementById('interestInput').value);
  const yearsInput = parseFloat(document.getElementById('yearsInput').value);
  
  const monthlyInterest = interestInput / 100 / 12;
  const totalMonths = yearsInput * 12;
  let totalInvestment = initialInput;
  
  for (let month = 1; month <= totalMonths; month++) {
    totalInvestment += monthlyInput;
    totalInvestment += totalInvestment * monthlyInterest;
  }
  
  document.getElementById('result').textContent = parseFloat(totalInvestment.toFixed(2));
}


