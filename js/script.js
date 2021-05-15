// Connect container div to DOM
const container = document.getElementById('container'); 

// Button that creates a new grid 
/*const button = document.createElement('button');
button.textContent = 'New Grid';
container.append(button);*/

let createGrid = (rows, columns) => {
    for (i = 0; i < (rows * columns); i++) {
        container.setAttribute('style', `grid-template-columns: repeat(${columns}, 1fr); grid-template-rows: repeat(${rows}, 50px)`);
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

// Function to clear the current grid
let clearGrid = (rows, columns) => {
    for (i = 0; i < (rows * columns); i++) {
        container.remove(div);
    }
}


