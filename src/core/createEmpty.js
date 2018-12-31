/**
 * Create an emtpy Array of colors
 */
export default function (width, height) {
  let array = [];
  for (var i =0; i < height; i++) {
    let row = [];
    for (var j=0; j < width; j++) {
      row.push('#eee');
    }
    array.push(row);
  }
  return array;
}