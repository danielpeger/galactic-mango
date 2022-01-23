const fs = require("fs");
const path = require("svg-path-properties");

const pathData = "M25.7735 35.6809C25.7735 35.6809 448.911 205.862 405.455 35.6809C362 -134.5 100 381.5 307.5 259.5C515 137.5 75.9121 151.954 25.7735 219.959C-24.3651 287.964 15.3985 283.7 25.7735 322.288C41.9411 382.422 111.356 392.105 186.5 383.083C350 322.288 329.5 433 329.5 433L171.5 506L343.5 540";
const properties = new path.svgPathProperties(pathData);
const pathLength = Math.floor(properties.getTotalLength());
const precision = 2;

let samples = [];
let samplesWithLength = [];
for (let i = 0; i < pathLength; i += precision) {
  const samplePoint = properties.getPointAtLength(i);
  samples = [...samples, [samplePoint.x, samplePoint.y]];
  samplesWithLength = [...samplesWithLength, [samplePoint.x, samplePoint.y, i]]
}

fs.writeFileSync("samples.js", `export default ${JSON.stringify(samples)}`);
fs.writeFileSync("samplesWithLength.js", `export default ${JSON.stringify(samplesWithLength)}`);