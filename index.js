let stone = null;

// this function is called when a row is clicked.
// Open your inspector tool to see what is being captured and can be used.
let selectRow = (row) => {
  const currentRow = row.getAttribute("data-row");

  console.log("Yay, we clicked an item", row);
  console.log("Here is the row's id: ", row.id);
  console.log("Here is the stone's data-size: ", currentRow);

  if (!stone) {
    pickUpStone(row.id);
  } else {
    dropStone(row.id, stone);
  }
};

// this function can be called to get the last stone in the stack
// but there might be something wrong with it...
let pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(rowID);
  console.log(selectedRow);
  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  console.log("stone ", stone);
};

// need to write if else statement to figure out if it is a legal move then drop stone but if not a legal move, do not drop stone

const dropStone = (rowID, Stone) => {
  startStone = document.getElementById(rowID).appendChild(Stone);
  stone = null;
};

// * Remember you can use your logic from 'main.js' to maintain the rules of the game. But how? Follow the flow of data just like falling dominoes.
