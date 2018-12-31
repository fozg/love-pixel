/**
 * Create a matrix with random colors
 */
export default function (width, height) {
  let array = [];
  for (var i =0; i < height; i++) {
    let row = [];
    for (var j=0; j < width; j++) {
      row.push(getRandomColor());
    }
    array.push(row);
  }
  return array;
}

/**
 * https://stackoverflow.com/questions/1484506/random-color-generator
 */
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}