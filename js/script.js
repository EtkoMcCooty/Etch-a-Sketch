// Connect container div to DOM
const container = document.getElementById('container');

// Create 16 x 16 grid
/*for (i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
}*/

let createGrid = (rows, columns) => {
    for (i = 0; i < (rows * columns); i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }   
}

createGrid(16, 16);
