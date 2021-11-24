// Campo HTML
let section = document.querySelector('section');
const divBoard = document.createElement('div');
section.appendChild(divBoard);
divBoard.id = 'pixel-board';

for (let i = 0; i < 5; i += 1) {
  const boards = document.querySelector('#pixel-board');
  const divLine = document.createElement('div');
  boards.appendChild(divLine);
  divLine.className = 'line';
}
for (let j = 0; j < 5; j += 1) {
  for(let i = 0; i < 5; i += 1) {
    let line = document.querySelectorAll('.line')
    let divPixel = document.createElement('div');
    line[j].appendChild(divPixel);
    divPixel.className = 'pixel'
    divPixel.style.backgroundColor = 'white';
  }
}
alert("Sua tabela se inicia em 5x5!");

// Campo CSS
// adicionando as cores na paleta;
let colorOne = Math.round(Math.random()* 300);
let colorTwo = Math.round(Math.random()* 300);
let ColorTree = Math.round(Math.random()* 300);

let newColorRGBTwo = `rgb(${colorOne}, ${colorTwo}, ${ColorTree})`;
let newColorRGBTree = `rgb(${colorOne}, ${ColorTree}, ${colorTwo})`;
let newColorRGBFour = `rgb(${colorTwo}, ${colorOne}, ${ColorTree})`;

let arrayColor = [];
arrayColor.push('black');
arrayColor.push(newColorRGBTwo);
arrayColor.push(newColorRGBTree);
arrayColor.push(newColorRGBFour);

const color = document.querySelectorAll('.color');
for (let i = 0; i < color.length; i += 1) {
  color[i].style.backgroundColor = arrayColor[i];
}
// Campo JavaScript e CSS
// campo de declaração de variáveis

// configurando botão clear
const btLimpar = document.querySelector('button');
btLimpar.addEventListener('click', ClearPixelBox);
function ClearPixelBox() {
    for (const key of pixels) {
        key.style.backgroundColor = 'white';
    }
}

// configurando input e botão
let btAlterar  = document.querySelector('#generate-board');
let input = document.querySelector('#board-size');

btAlterar.addEventListener('click', conferirInput)
let lineDivs;
let pixelsDiv;
function conferirInput() {
  if (input.value > 0) {
    if (input.value < 5) {
      lineDivs = 5;
      pixelsDiv = 5;
      alert(`Tamanho mínimo ultrapaçado, como padrão usaremos ${lineDivs}x${pixelsDiv}!`);
    } else if (input.value > 50) {
      lineDivs = 50;
      pixelsDiv = 50;  
      alert(`Tamanho máximo ultrapaçado, como padrão usaremos ${lineDivs}x${pixelsDiv}!`);
    } else {
      lineDivs = input.value;
      pixelsDiv = input.value;
      alert(`Você alterou sua tabela para ${input.value}x${input.value} !`); 
    }
    let boards = document.querySelector('#pixel-board').remove();
    const divBoard = document.createElement('div');
    section.appendChild(divBoard);
    divBoard.id = 'pixel-board';

    for (let i = 0; i < lineDivs; i += 1) {
      const boards = document.querySelector('#pixel-board');
      const divLine = document.createElement('div');
      boards.appendChild(divLine);
      divLine.className = 'line';
    }
    for (let j = 0; j < pixelsDiv; j += 1) {
      for(let g = 0; g < pixelsDiv; g += 1) {
        let line = document.querySelectorAll('.line')
        let divPixel = document.createElement('div');
        line[j].appendChild(divPixel);
        divPixel.className = 'pixel'
        divPixel.style.backgroundColor = 'white';
      }
    }
  } else {
    alert ("Board inválido!");
  }
}

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