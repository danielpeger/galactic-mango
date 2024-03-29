import map from './mapPath/map.json' assert { type: "json" };

export default function getLengthAtPoint(x, y) {
  const groupIndex = binarySearchX(x, map[y]);
  if (map[y][groupIndex]) {
    return map[y][groupIndex].len;
  } else {
    return;
  }
}

function binarySearchX(value, array) {
  let start = 0;
  let end = array.length - 1;
	let result = [];
  let middle = Math.floor((start + end) / 2);

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (array[middle].x === value) {
      return middle;
    } else if (array[middle].x < value) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return middle;
}
