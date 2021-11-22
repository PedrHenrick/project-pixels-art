window.onload = function () {
    let color = document.querySelectorAll('.color');

    // adicionando as cores;
    for (let key = 0; key < color.length; key +=1) {
    color[key].style.backgroundColor = color[key].classList[1];
    }
    let verificador = false;

    for (let key of color){
        key.addEventListener('click', function(event){
            let selected = document.querySelector('.selected');
            selected.classList.remove('selected')
            event.target.classList.add('selected'); 
        });
    }
}