window.onload = function pag () {
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
    key.addEventListener('click', function selectedColor(event) {
      const selected = document.querySelector('.selected');
      selected.classList.remove('selected')
      event.target.classList.add('selected'); 
    });
  }

  // adicionando cor aos pixels
  for (const key of pixels) {
    key.addEventListener('click', function selectedPixel(event) {
      const selected = document.querySelector('.selected');
      event.target.style.backgroundColor = selected.style.backgroundColor;
    });
  }

  // configurando botão clear
  const bt = document.querySelector('button');
  bt.addEventListener('click', function ClearPixelBox() {
    for (const key of pixels) {
      key.style.backgroundColor = 'white';
    };
  });
}