const grid = document.querySelector('#grid');

function createCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
}

for (i = 0; i < 256; i++) {
    createCell();
}

const cell = document.querySelectorAll('.cell');
cell.forEach(cell => {cell.addEventListener('mouseover', () => {
        cell.style.backgroundColor = 'black';
    })
});