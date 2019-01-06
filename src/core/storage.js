const PIXELKEY = 'PIXXEL|';

export function save(uniqid, data) {
  localStorage.setItem(`${PIXELKEY}${uniqid}`, JSON.stringify(data));
}

export function get(uniqid) {
  let stringData =  localStorage.getItem(`${PIXELKEY}${uniqid}`);
  return JSON.parse(stringData);
}

export function getAll() {
  let keys = Object.keys(localStorage).filter(item => item.indexOf(PIXELKEY) == 0);
  return (keys.map(key => 
    ({
      grid: JSON.parse(localStorage[key]),
      id: key
    }) 
  ));
}