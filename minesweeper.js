document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {row: 0, col: 0, isMine: false, hidden: true}, {row: 0, col: 1, isMine: false, hidden: true}, {row: 0, col: 2, isMine: true, hidden: true}, {row: 0, col: 3, isMine: true, hidden: true}, {row: 0, col: 4, isMine: false, hidden: true},

    {row: 1, col: 0, isMine: true, hidden: true}, {row: 1,col: 1, isMine: false, hidden: true}, {row: 1, col: 2, isMine: false, hidden: true}, {row: 1, col: 3, isMine: false, hidden: true}, {row: 1, col: 4, isMine: false, hidden: true},

    {row: 2, col: 0, isMine: true, hidden: true}, {row: 2, col: 1,isMine: false, hidden: true}, {row: 2, col: 2, isMine: false, hidden: true}, {row: 2, col: 3, isMine: false, hidden: true}, {row: 2, col: 4, isMine: false, hidden: true},

    {row: 3, col: 0, isMine: true, hidden: true}, {row: 3, col: 1, isMine: false, hidden: true}, {row: 3, col: 2, isMine: true, hidden: true}, {row: 3, col: 3, isMine: false, hidden: true}, {row: 3, col: 4, isMine: true, hidden: true},

    {row: 4, col: 0, isMine: false, hidden: true}, {row: 4, col: 1, isMine: false, hidden: true}, {row: 4, col: 2, isMine: true, hidden: true}, {row: 4, col: 3, isMine: false, hidden: true}, {row: 4, col: 4, isMine: false, hidden: true},

  ]
}

function startGame () {
  //loop through contents of each cell and then call countSurroundingMines
let cell = 0; //start counting from cell 0
  for (cell in board.cells) { //for every cell in the cells board
    board.cells[cell].surroundingMines = countSurroundingMines(cell); //new object called surroundingMines is linked to the countSurroundingMines function below, and this applies to every cell
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard(document.getElementsByClassName('board'))
 document.addEventListener('click', checkForWin) //no need to do cell[i].document.addEventListener like the last game because we're not counting the cells, just the document in general
 document.addEventListener('rightclick', checkForWin)
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {

//for each cell
let cell = 0
  for (cell in board.cells){
//if the cell is a mine but is not marked the loop back again
    if (board.cells[cell].isMarked){
      return
    }
  }

// if cell is not a mine and is still not revealed then loop back again
    if (board.cells[cell].isMine){
      if (!board.cells[cell].isMine){
    return
  }
}

// if the cell is not a mine and not marked then loop back again
if(board.cells[cell].hidden) {
  if(!board.cells[cell].isMine){
    return
  }
}

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
 lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var surroundingCells = lib.getSurroundingCells(board.cells[cell].row, board.cells[cell].col);
  let count = 0
  let square = undefined
  for (square in surroundingCells) {
    if (surroundingCells[square].isMine) {
      count++
    }
  }
  return count
}
