
const CELLSIZE = 40;

function exportCanvasAsPNG(canvas, fileName) {
  var MIME_TYPE = "image/png";
  var imgURL = canvas.toDataURL(MIME_TYPE);

  var dlLink = document.createElement('a');
  dlLink.download = fileName;
  dlLink.href = imgURL;
  dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
  try {
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }catch(e) {}
}

function createCanvas (grid) {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext("2d");

  canvas.height = CELLSIZE * grid.length;
  canvas.width = CELLSIZE * grid[0].length;
  
  grid.forEach((row, idx) => {  
    row.forEach((cell, jdx) => {
      if (cell) {
        ctx.fillStyle = cell;
        ctx.fillRect(
          jdx * CELLSIZE, idx * CELLSIZE, 
          CELLSIZE, CELLSIZE
        );
      }
    })
  });
  exportCanvasAsPNG(canvas)
}

// click to download file
export default function exportToPNG(grid) {
  createCanvas(grid)
}