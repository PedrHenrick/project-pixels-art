// Campo HTML
for (let j = 0; j < 5; j += 1) {
  const boards = document.querySelector('#pixel-board');
  const sectionLine = document.createElement('section');
  sectionLine.className = 'line';
  boards.appendChild(sectionLine);
  for(let i = 0; i < 5; i += 1) {
    let divPixel = document.createElement('div');
    divPixel.className = 'pixel';
    sectionLine.appendChild(divPixel);
  }
}

// Campo CSS
// adicionando as cores na paleta;
let newColorRGB2 = `rgb(${Math.round(Math.random()* 300)}, ${Math.round(Math.random()* 300)}, ${Math.round(Math.random()* 300)})`;
let newColorRGB3 = `rgb(${Math.round(Math.random()* 300)}, ${Math.round(Math.random()* 300)}, ${Math.round(Math.random()* 300)})`;
let newColorRGB4 = `rgb(${Math.round(Math.random()* 300)}, ${Math.round(Math.random()* 300)}, ${Math.round(Math.random()* 300)})`;

let arrayColor = [];
arrayColor.push('black');
arrayColor.push(newColorRGB2);
arrayColor.push(newColorRGB3);
arrayColor.push(newColorRGB4);

const color = document.querySelectorAll('.color');
for (let i = 0; i < color.length; i += 1) {
  color[i].style.backgroundColor = arrayColor[i];
}

// Campo JavaScript
// Configurando botão clear
const pixel = document.querySelectorAll('div, #pixel-board');
const btLimpar = document.querySelector('button');
btLimpar.addEventListener('click', ClearPixelBox);
function ClearPixelBox() {
    for (const key of pixel) {
        key.style.backgroundColor = 'white';
    }
}

// Variáveis
let lengthDivs;
let btAlterar  = document.querySelector('#generate-board');
let input = document.querySelector('#board-size');

// Configurando input e botão
btAlterar.addEventListener('click', conferirInput)
function conferirInput() {
  // Verificação de valor
  if (input.value > 0) {
    if (input.value < 5) lengthDivs = 5;
    else if (input.value > 50) lengthDivs = 50;
    else lengthDivs = input.value;

    // Removendo div antiga
    let removeBoards = document.querySelectorAll('.line');
    for (const key of removeBoards) key.remove();
    
    // Adicionando line e div com tamanho selecionado
    for (let j = 0; j < lengthDivs; j += 1) {
      const boards = document.querySelector('#pixel-board');
      const sectionLine = document.createElement('section');
      sectionLine.className = 'line';
      boards.appendChild(sectionLine);
      for(let i = 0; i < lengthDivs; i += 1) {
        let divPixel = document.createElement('div');
        divPixel.className = 'pixel';
        sectionLine.appendChild(divPixel);
      }
    }
  } else {
    alert ("Board inválido!");
  }
}

// Variáveis
const pixels = document.querySelector('div, #pixel-board');
const selectedPosicion = document.querySelector('#color-palette');

// Seleção de cor
function colorPalette() {
  selectedPosicion.addEventListener('click', function(event) {
      const selected = document.querySelector('.selected')
      selected.classList.remove('selected');
      event.target.classList.add('selected');        
  })
}
colorPalette();

// Adicionando cor aos pixels
function colorPixel() {
  pixels.addEventListener('click', function(event) {
      const selected = document.querySelector('.selected')
      event.target.style.backgroundColor = selected.style.backgroundColor;       
  })
}
colorPixel();