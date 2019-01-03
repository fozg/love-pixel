/**
 * Export to CSS
 * idea from https://github.com/jvalen/pixel-art-react
 */

const CSS_VARIABLE = 'heart-pixel-css'

export default function (grid, pixelSize = 15) {
  let boxShadow = '';
  grid.forEach((rowArray, x) => {
    rowArray.forEach((cell, y) => {
      if (cell) {
        let cellShadow = `${(y + 1) * pixelSize}px ${(x + 1) * pixelSize}px 0 ${cell}, `;
        boxShadow += cellShadow;
      }
    });
  });
  boxShadow = boxShadow.slice(0, 0-2);
  let css = `
.${CSS_VARIABLE} {
  box-shadow: ${boxShadow};
  width: ${pixelSize}px;
  height: ${pixelSize}px;
}
  `

  return css;
}