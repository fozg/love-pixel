/**
 * 
 * @param {Array} grid 
 * @param {number} x Location
 * @param {number} y Location
 * @param {String} color Color string
 */
export default function fillGrid(grid, x, y, color, currentColor) {
  let _currentColor ;
  if (currentColor === undefined) {
    _currentColor = grid[x][y];
  } else {
    _currentColor = currentColor;
  } 
  
  grid[x][y] = color;
  if ( y + 1 <= grid[x].length && grid[x][y+1] === _currentColor) {
    grid = fillGrid(grid, x, y + 1, color, _currentColor)
  } 
  if ( y - 1 >= 0 && grid[x][y-1] === _currentColor) { 
    grid = fillGrid(grid, x, y - 1, color, _currentColor)
  }  
  if ( x - 1 >= 0 && grid[x-1][y] === _currentColor) {
    grid = fillGrid(grid, x - 1, y, color, _currentColor)
  } 
  if ( x + 1 < grid.length && grid[x+1][y] === _currentColor) {
    grid = fillGrid(grid, x + 1, y, color, _currentColor)
  } 
  return grid;
}


// let testArray = [
//   [1,1,1,2],
//   [1,2,2,3],
//   [1,1,2,2],
//   [1,1,2,2]
// ]

// fillGrid(testArray, 1, 1, 3)