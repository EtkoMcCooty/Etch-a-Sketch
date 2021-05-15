// Connect container div to DOM
const container = document.getElementById('container'); 

let createGrid = (rows, columns) => {
    for (i = 0; i < (rows * columns); i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseenter', () => {
            div.setAttribute('style', `background-color: ${randomColor()}`);
            
        })
        container.appendChild(div);
    }   
}

let randomColor = () => {
     let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
     console.log(randomColor);
     return randomColor;
    }

createGrid(16, 16);



