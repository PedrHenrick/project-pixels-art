// Campo HTML
// criando tag h1;
const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerText = 'Paleta de Cores';
h1.id = 'title';

// criando div color-palette
const divPalette = document.createElement('div');
document.body.appendChild(divPalette);
divPalette.id = 'color-pallete';

// array de cores;
const arrayColors = ['color black selected', 'color blue', ' color green', ' color red'];

// criando cores
for (let i = 0; i < arrayColors.length; i += 1) {
  const palette = document.querySelector('#color-pallete');
  const divColor = document.createElement('li');
  palette.appendChild(divColor);
  divColor.className = arrayColors[i];
}

// criando botão clear
const button = document.createElement('button');
document.body.appendChild(button);
button.innerText = 'Limpar';
button.id = 'clear-board';

// criando input
const inputText = document.createElement('input');
document.body.appendChild(inputText);
inputText.placeholder = 'VQV';
inputText.id = 'board-size';
inputText.type = 'number';
inputText.min = "5";
inputText.max = "50";

// criando botão alterar
const buttonAlterar = document.createElement('button');
document.body.appendChild(buttonAlterar);
buttonAlterar.innerText = 'alterar';
buttonAlterar.id = 'generate-board';

// criando div de pixels
const divBoard = document.createElement('div');
document.body.appendChild(divBoard);
divBoard.id = 'pixel-board';

let lineDivs = 5;
let pixelsDiv = 5;

// criando div da grade de pixels
for (let i = 0; i < lineDivs; i += 1) {
  const boards = document.querySelector('#pixel-board');
  const divLine = document.createElement('div');
  boards.appendChild(divLine);
  divLine.className = 'line';
}
for (let j = 0; j < pixelsDiv; j += 1) {
  for(let i = 0; i < pixelsDiv; i += 1) {
    let line = document.querySelectorAll('.line')
    let divPixel = document.createElement('div');
    line[j].appendChild(divPixel);
    divPixel.className = 'pixel'
  }
}

// Campo CSS
// adicionando as cores na paleta;
const color = document.querySelectorAll('.color');
for (const key of color) {
  key.style.backgroundColor = key.classList[1];
}
// Campo JavaScript e CSS
// campo de declaração de variáveis
const pixels = document.querySelectorAll('.pixel');

// Mudança na cor
for (const key of color) {
  key.addEventListener('click', selectedColor);
  function selectedColor(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected'); 
  }
}

// adicionando cor aos pixels
for (const key of pixels) {
  key.addEventListener('click', selectedPixel);
  function selectedPixel(event) {
    const selected = document.querySelector('.selected');
    event.target.style.backgroundColor = selected.style.backgroundColor;
  };
}

// configurando botão clear
const btLimpar = document.querySelector('button');
btLimpar.addEventListener('click', ClearPixelBox);
function ClearPixelBox() {
    for (const key of pixels) {
        key.style.backgroundColor = 'white';
    }
}

// configurando input e botão
let input = document.querySelector('#board-size');
let btAlterar  = document.querySelector('#generate-board');

input.addEventListener('keyup', teclado);
function teclado(event) {
  if (event.key === 'Enter' && input.value > 0) {
    for (const key of pixels) {
        key.style.backgroundColor = 'white';
    }
    if (input.value < 5) {
      lineDivs = 5;
      pixelsDiv = 5;     
    } else if (input.value > 50) {
      lineDivs = 50;
      pixelsDiv = 50;
    } else {
      lineDivs = input.value;
      pixelsDiv = input.value;
    }
    let boards = document.querySelector('#pixel-board').remove();
    const divBoard = document.createElement('div');
    document.body.appendChild(divBoard);
    divBoard.id = 'pixel-board';
    
    for (let i = 0; i < lineDivs; i += 1) {
      const boards = document.querySelector('#pixel-board');
      const divLine = document.createElement('div');
      boards.appendChild(divLine);
      divLine.className = 'line';
    }
    for (let j = 0; j < pixelsDiv; j += 1) {
      for(let i = 0; i < pixelsDiv; i += 1) {
        let line = document.querySelectorAll('.line')
        let divPixel = document.createElement('div');
        line[j].appendChild(divPixel);
        divPixel.className = 'pixel'
      }
    }
  }
}
btAlterar.addEventListener('click', conferirInput)
function conferirInput() {
  if (input.value > 0) {
    for (const key of pixels) {
        key.style.backgroundColor = 'white';
    }
    if (input.value < 5) {
      lineDivs = 5;
      pixelsDiv = 5;     
    } else if (input.value > 50) {
      lineDivs = 50;
      pixelsDiv = 50;
    } else {
      lineDivs = input.value;
      pixelsDiv = input.value;
    }
    let boards = document.querySelector('#pixel-board').remove();
    const divBoard = document.createElement('div');
    document.body.appendChild(divBoard);
    divBoard.id = 'pixel-board';
    
    for (let i = 0; i < lineDivs; i += 1) {
      const boards = document.querySelector('#pixel-board');
      const divLine = document.createElement('div');
      boards.appendChild(divLine);
      divLine.className = 'line';
    }
    for (let j = 0; j < pixelsDiv; j += 1) {
      for(let i = 0; i < pixelsDiv; i += 1) {
        let line = document.querySelectorAll('.line')
        let divPixel = document.createElement('div');
        line[j].appendChild(divPixel);
        divPixel.className = 'pixel'
      }
    }
  } else {
    alert ("Board inválido!");
  }
}
