import map from './mapPath/map.json';

function searchByY(y, map) {
  let start = 0;
  let end = map.length - 1;
	let result = [];

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);

    if (map[middle].y === y) {
      return middle;
    } else if (map[middle].y < y) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
}
