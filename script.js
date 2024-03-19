
const container = document.querySelector('.container');
container.style.display = 'flex';

createGrid();

function createGrid(columns= 16){
    for(let i = 0; i < columns; i++){
    const column = document.createElement('div');
    column.classList.add('column');
    column.setAttribute('id', 'column');
    column.setAttribute('flex', '1');
    column.style.border = '1px solid black';
    container.appendChild(column);
    const p = document.createElement('p');
    
    p.textContent = `Column ${i}`;
    column.appendChild(p);

        for(let j = 0; j < columns; j++){
            const row = document.createElement('div');
            row.classList.add('row');
            row.setAttribute('id', 'row');
            row.setAttribute('flex', '1');
            row.style.border = '1px solid black';
            column.appendChild(row);
            const p = document.createElement('p');
            p.textContent = `Row ${j}`;
            row.appendChild(p);
        }
    }
}
// const square = document.createElement('div');
//     square.classList.add('square');
//     square.style.backgroundColor = 'red';
//     container.appendChild(square);

// const p = document.createElement('p');
//     p.textContent = 'Hello';
//     square.appendChild(p);