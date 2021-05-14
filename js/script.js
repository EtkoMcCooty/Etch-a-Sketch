// Connect container div to DOM
const container = document.getElementById('container');

// create variables for rgb values
let red =  Math.floor(Math.random() * 255); 
let blue = Math.floor(Math.random() * 255); 
let green = Math.floor(Math.random() * 255); 
console.log(red);
console.log(blue);
console.log(green);

let createGrid = (rows, columns) => {
    for (i = 0; i < (rows * columns); i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.addEventListener('mouseenter', () => {
            div.setAttribute('style', `background-color: rgb(${red}, ${green}, ${blue})`);
        })
        container.appendChild(div);
    }   
}

let changeColor = () => {
     
}

createGrid(16, 16);



