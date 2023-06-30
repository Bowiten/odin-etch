const grid = document.querySelector('#grid');

function addCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
}

function addMouseover() {
    const cell = document.querySelectorAll('.cell');
    cell.forEach(cell => {cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        })
    });
}

function createGrid(gridSize) {
    for (i = 0; i < gridSize ** 2; i++) {
        addCell();
    }
}

createGrid(16);
addMouseover();