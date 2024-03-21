
const container = document.querySelector('.container');

createGrid();

function createGrid(columns= 16){
    for(let i = 0; i < columns; i++){
    const column = document.createElement('div');
    column.classList.add("column");
    container.appendChild(column);
    const p = document.createElement('p');
    
    // p.textContent = `Column ${i}`;
    // column.appendChild(p);

        for(let j = 0; j < columns; j++){
            const row = document.createElement('div');
            row.classList.add("row");
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