const fs = require("fs");
const path = require("svg-path-properties");

const pathData =
  "M25.7735 13.6809C25.7735 13.6809 355.317 -14.8511 405.455 13.6809C455.594 42.2129 488.163 125.235 405.455 197.959C322.748 270.684 75.9121 129.954 25.7735 197.959C-24.3651 265.964 15.3985 261.7 25.7735 300.288C64.3153 443.64 405.455 300.288 405.455 300.288";
const properties = new path.svgPathProperties(pathData);
const length = Math.floor(properties.getTotalLength());
let map = [];

for (let i = 0; i <= length; i++) {
  const point = properties.getPointAtLength(i);
  point.x = Math.round(point.x);
  point.y = Math.round(point.y);
  point.len = i;
  map = [...map, point];
}

// We expect the path's height to be bigger than it's width.
// We also expect to have at least one X coordinate for any Y smaller than the height (no gaps).
// Group and sort the map by Y coordinate.
// Sort by X within groups to make them binary-searchable.

map.sort(function (a, b) {
  return a.x - b.x;
});

const groupedMap = map.reduce((prev, current) => {
  prev[current.y] = [
    ...(prev[current.y] || []),
    { x: current.x, len: current.len },
  ];
  return prev;
}, {});

fs.writeFileSync("map.json", JSON.stringify(groupedMap));
