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
let input = document.querySelector('input');
let btAlterar  = document.querySelector('#generate-board');

input.addEventListener('keyup', teclado);
function teclado(event) {
  if (event.key === 'Enter' && input.value > 0) {
    for (const key of pixels) {
        key.style.backgroundColor = 'white';
    }
    if (input.value < 5) {
      for (const key of pixels) {
        key.style.width = 5 * 5 + 'px';
        key.style.height = 5 * 5 + 'px'
      }
    } else if (input.value >= 50) {
      for (const key of pixels) {
        key.style.width = 50 * 50 + 'px';
        key.style.height = 50 * 50 + 'px'
      }
    } else {
      for (const key of pixels) {
        key.style.width = input.value * input.value + 'px';
        key.style.height = input.value * input.value + 'px'
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
    if (input.value <= 5) {
      for (const key of pixels) {
        key.style.width = 5 * 5 + 'px';
        key.style.height = 5 * 5 + 'px'
      }
    } else if (input.value >= 50) {
      for (const key of pixels) {
        key.style.width = 50 * 50 + 'px';
        key.style.height = 50 * 50 + 'px'
      }
    } else {
      for (const key of pixels) {
        key.style.width = input.value * input.value + 'px';
        key.style.height = input.value * input.value + 'px'
      }
    }
  } else {
    alert ("Board inválido!");
  }
}
