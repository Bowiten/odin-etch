const grid = document.querySelector('#grid');
const gridWidth = 480;
const newGridButton = document.querySelector('#new-grid');

newGridButton.addEventListener('click', () => {
    clearGrid();
    let gridSize = 0;
    do {
        let p = prompt('Enter the grid size here (must be greater than 0 and less than 100):')
        gridSize = p;
    }
    while (gridSize < 0 || gridSize > 100)
    createGrid(gridSize);
    addMouseover();
});

function addCell() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
}

function addMouseover() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        })
    });
}

function createGrid(gridSize) {
    for (i = 0; i < gridSize ** 2; i++) {
        addCell();
    }
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.style.width = gridWidth / gridSize + 'px';
        cell.style.height = gridWidth / gridSize + 'px';
    })
}

function clearGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.remove());
}

createGrid(16);
addMouseover();
