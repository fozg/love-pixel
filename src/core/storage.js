const PIXELKEY = 'PIXEL';

export function save(uniqid, data) {
  localStorage.setItem(`${PIXELKEY}-${uniqid}`, JSON.stringify(data));
}

export function get(uniqid) {
  let stringData =  localStorage.getItem(`${PIXELKEY}-${uniqid}`);
  return JSON.parse(stringData);
}