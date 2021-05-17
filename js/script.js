// Button that creates a new grid 
const button = document.createElement('button');
button.textContent = 'New Grid';
button.setAttribute('style', 'display: block; margin: 15px auto; padding: 10px 5px');
button.addEventListener('click', () => {
    clearGridInfo();
    clearGrid(prompt('How many rows to remove?'), prompt('How many columns to remove?'))
})
document.body.append(button);

// Connect container div to DOM
const container = document.getElementById('container'); 
document.body.appendChild(container);

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

    const p = document.createElement('p');
    p.textContent = `Your grid is ${rows} rows x ${columns} columns.`
    p.setAttribute('style', 'text-align: center; margin-top: 10px');
    p.setAttribute('id', 'grid-info');
    document.body.append(p);
}

let randomColor = () => {
     let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16); // Check this site for code explanation -> (https://dev.to/akhil_001/generating-random-color-with-single-line-of-js-code-fhj)
     console.log(randomColor);
     return randomColor;
    }

// Function to clear the current grid
let clearGrid = (rows, columns) => {
    for (i = 0; i < (rows * columns); i++) {
        container.remove(container.getElementsByClassName('square'));
    }
}

let clearGridInfo = () => {
    document.getElementById('grid-info').remove();
}

createGrid(prompt('How many rows to create?'), prompt('How many columns to create?'));