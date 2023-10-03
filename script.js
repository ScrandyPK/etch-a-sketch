console.log("This is working");

// Specifies how many total rows are needed
let rowtot = 16;

//Creates an squuare grid by multiplying rows by itself.
let celltot = rowtot * rowtot;

//gridContainer variable that point to the .grid style
let gridContainer = document.querySelector('.grid');


//Sets up the style to be in grid format. 
//Look into what gridTemplateRows and Columns align with.
gridContainer.style.display = 'grid';
gridContainer.style.gridTemplateRows = `repeat(${rowtot}, 1fr)`;
gridContainer.style.gridTemplateColumns = `repeat(${rowtot}, 1fr)`;


//Sets row variable to 1
let row = 1;
//Sets column variable to 1
let column = 1;

//Runs a for loop equaling the cell total
for (let i = 1; i <= celltot; i++) {
  //Creates a variable 'cell' that generates a div  
  let cell = document.createElement("div");
  //applies border
  cell.style.border = '1px solid black';
  //assigns its rowlocation
  cell.style.gridRow = row;
  //assigns its column location
  cell.style.gridColumn = column;
  //inserts what celltot it is
  cell.textContent = i;
  //adds 1 to the column to traverse across
  column += 1;
  //if column is all the way accross it adds a new row and resets column to 1
  if (column === rowtot + 1) {
    row += 1;
    column = 1;
  }
  //adds cell to the gridContainer
  gridContainer.appendChild(cell);
}



const hoverDiv = document.getElementById('hover-div');

// Add a mouseover event listener
hoverDiv.addEventListener('mouseover', () => {
    hoverDiv.classList.add('hovered'); // Add the 'hovered' class
});

// Add a mouseout event listener
hoverDiv.addEventListener('mouseout', () => {
    hoverDiv.classList.remove('hovered'); // Remove the 'hovered' class
});


