const fs = require("fs");
const path = require("svg-path-properties");

const pathData="M25.7735 13.6809C25.7735 13.6809 355.317 -14.8511 405.455 13.6809C455.594 42.2129 488.163 125.235 405.455 197.959C322.748 270.684 75.9121 129.954 25.7735 197.959C-24.3651 265.964 15.3985 261.7 25.7735 300.288C64.3153 443.64 405.455 300.288 405.455 300.288"
const properties = new path.svgPathProperties(pathData);
const pathLength = Math.floor(properties.getTotalLength());
const precision = 0.5;

let samples = [];
let samplesWithLength = [];
for (let i = 0; i < pathLength; i += precision) {
  const samplePoint = properties.getPointAtLength(i);
  samplePoint.x = Math.round(samplePoint.x);
  samplePoint.y = Math.round(samplePoint.y);
  samples = [...samples, [samplePoint.x, samplePoint.y]];
  samplesWithLength = [...samplesWithLength, [samplePoint.x, samplePoint.y, i]]
}

fs.writeFileSync("samples.json", JSON.stringify(samples));
fs.writeFileSync("samplesWithLength.json", JSON.stringify(samplesWithLength));