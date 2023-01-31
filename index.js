let stone = null;
let stacks = {
  bottom: [4, 3, 2, 1],
  middle: [],
  top: [],
};

let startRow = null;

const movePiece = (startStack, endStack) => {
  const stone = stacks[startStack].pop();
  console.log(stone);
  stacks[endStack].push(stone);
  checkForWin();
};

const isLegal = (startStack, endStack) => {
  const startStone = stacks[startStack].at(-1);
  const endStone = stacks[endStack].at(-1);
  if (!startStack) {
    return false;
  } else if (startStone < endStone || !endStone) {
    return true;
  } else {
    return false;
  }
};

const checkForWin = () => {
  if (stacks["middle"].length === 4 || stacks["top"].length === 4) {
    window.alert(`Player won!`);
  } else return false;
};

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

let pickUpStone = (rowID) => {
  const selectedRow = document.getElementById(rowID);

  startStack = selectedRow.id;

  stone = selectedRow.removeChild(selectedRow.lastElementChild);
  console.log("stone ", stone.id);
};

const dropStone = (rowID, Stone) => {
  if (isLegal(startStack, rowID)) {
    console.log("end stack", rowID);
    startStone = document.getElementById(rowID).appendChild(Stone);
    console.log("start stack", startStack);
    stone = null;
    movePiece(startStack, rowID);
    startStack = null;
  }
};
