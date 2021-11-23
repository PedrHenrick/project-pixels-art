// Campo HTML
const divBoard = document.createElement('div');
document.body.appendChild(divBoard);
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

// configurando botão clear
const btLimpar = document.querySelector('button');
btLimpar.addEventListener('click', ClearPixelBox);
function ClearPixelBox() {
    for (const key of pixels) {
        key.style.backgroundColor = 'white';
    }
}

// configurando input e botão
let input = document.querySelector('input');
let btAlterar  = document.querySelector('#generate-board');

input.addEventListener('keyup', teclado);
function teclado(event) {
  if (event.key === 'Enter' && input.value > 0) {
    if (input.value <= 5) {
      var lineDivs = 5;
      var pixelsDiv = 5;
    } else if (input.value >= 50) {
      var lineDivs = 50;
      var pixelsDiv = 50;  
    } else {
      var lineDivs = input.value;
      var pixelsDiv = input.value; 
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
let lineDivs;
let pixelsDiv;
function conferirInput() {
  if (input.value > 0) {
    if (input.value <= 5) {
      lineDivs = 5;
      pixelsDiv = 5;
    } else if (input.value >= 50) {
      lineDivs = 50;
      pixelsDiv = 50;  
    } else {
      lineDivs = input.value;
      pixelsDiv = input.value; 
    }
    let boards = document.querySelector('#pixel-board').remove();
    const divBoards = document.createElement('div');
    document.body.appendChild(divBoards);
    divBoards.id = 'pixel-board';
    
    for (let i = 0; i < lineDivs; i += 1) {
      const boardss = document.querySelector('#pixel-board');
      const divLines = document.createElement('div');
      boards.appendChild(divLines);
      divLines.className = 'line';
    }
    for (let j = 0; j < pixelsDiv; j += 1) {
      for(let i = 0; i < pixelsDiv; i += 1) {
        let lines = document.querySelectorAll('div .line')
        let divPixels = document.createElement('div');
        lines[j].appendChild(divPixels);
        divPixels.className = 'pixel'
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