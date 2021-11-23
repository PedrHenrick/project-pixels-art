window.onload = function() {
//////////////////// Campo HTML ////////////////////
  // criando tag h1;
  let h1 = document.createElement('h1');
  document.body.appendChild(h1);
  h1.innerText = 'Paleta de Cores'
  h1.id = 'title';

  // criando div color-palette
  let divPalette = document.createElement('div');
  document.body.appendChild(divPalette);
  divPalette.id = 'color-pallete';
 
  arrayColors = ['black selected', 'blue', 'green', 'red']

  // criando cores
for (let i = 0; i < 4; i += 1) {
  let palette = document.querySelector('#color-pallete');
  let divColor = document.createElement('li');
  palette.appendChild(divColor);
  divColor.className = 'color ' + arrayColors[i];
}

  // criando botão clear
  let button = document.createElement('button');
  document.body.appendChild(button);
  button.innerText = 'Limpar'
  button.id = 'clear-board';

  // criando div de pixels
  let divBoard = document.createElement('div');
  document.body.appendChild(divBoard);
  divBoard.id = 'pixel-board';
  
  // criando div da grade de pixels
  for (let i = 0; i < 5; i += 1) {
    let boards = document.querySelector('#pixel-board');
    let divLine = document.createElement('div');
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

//////////////////// Campo CSS ////////////////////
    // adicionando as cores na paleta;
  const color = document.querySelectorAll('.color');
  for (const key of color) {
    key.style.backgroundColor = key.classList[1];
  }

//////////////////// Campo JavaScript e CSS ////////////////////

  // campo de declaração de variáveis  
  const pixels = document.querySelectorAll('.pixel');
  let divPallet = document.querySelector('#color-palette');


  // Mudança na cor
  for (const key of color){
    key.addEventListener('click', function(event) {
      let selected = document.querySelector('.selected');
      selected.classList.remove('selected')
      event.target.classList.add('selected'); 
    });
  }

  // adicionando cor aos pixels
  for (const key of pixels){
    key.addEventListener('click', function(event) {
      let selected = document.querySelector('.selected');
      event.target.style.backgroundColor = selected.style.backgroundColor;
    });
  }

  // configurando botão clear
  let bt = document.querySelector('button');
  bt.addEventListener('click', function(){
    const pixels = document.querySelectorAll('.pixel');
    for (let key of pixels) {
        key.style.backgroundColor = 'white';
    }
  })
}