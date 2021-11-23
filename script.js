window.onload = function() {
  let color = document.querySelectorAll('.color');
  let pixels = document.querySelectorAll('.pixel');
  // adicionando as cores;
  for (let key = 0; key < color.length; key +=1) {
    color[key].style.backgroundColor = color[key].classList[1];
  }
  // Mudança na cor
  for (let key of color){
    key.addEventListener('click', function(event) {
      let selected = document.querySelector('.selected');
      selected.classList.remove('selected')
      event.target.classList.add('selected'); 
    });
  }
  // adicionando cor aos pixels
  for (let key of pixels){
    key.addEventListener('click', function(event) {
      let selected = document.querySelector('.selected');
      event.target.style.backgroundColor = selected.style.backgroundColor;
    });
  }
}