const body = document.body;

// Create a button
const button = document.createElement('button');
button.textContent = 'New Grid';
button.setAttribute('style', 'display: block; margin: 15px auto; padding: 10px 5px');

// Connect container div to DOM
const container = document.getElementById('container'); 

let createGrid = (dimensions) => {
    if (dimensions <= 100) {
        for (i = 0; i < dimensions ** 2; i++) {
            container.setAttribute('style', `grid-template-columns: repeat(${dimensions}, 1fr); grid-template-rows: repeat(${dimensions}, 50px)`); // Set size of the grid
            const div = document.createElement('div');
            div.classList.add('square');
            div.addEventListener('mouseenter', () => {
                div.setAttribute('style', `background-color: ${randomColor()}`);
                
            })
            container.append(div);  
        }   
    }
    else {
        alert('Grid size must be 100 or less');
        window.location.reload(); // reload the page
    }
}

let randomColor = () => {
     let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16); // Check this site for code explanation -> (https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj)
     console.log(randomColor);
     return randomColor;
    }

// Create grid when the page reloads
window.addEventListener('load', () => {
    createGrid(Number(prompt('Grid Size')));
});

// Make button refresh the page
button.addEventListener('click', (e) => {
    window.location.reload();
})

body.append(button);
body.append(container);

