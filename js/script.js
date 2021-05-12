// Connect container div to DOM
const container = document.getElementById('container');

// Create 16 x 16 grid
for (i = 0; i < 256; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
        console.log('div created');
}
