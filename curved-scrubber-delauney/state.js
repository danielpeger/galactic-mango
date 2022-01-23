const canvas = document.getElementById("canvasElement");
const canvasContext = canvas.getContext("2d");
let canvasX = 0;
let canvasY = 0;
let mouseX = 360;
let mouseY = 360;

const playButton = document.getElementById("playButton");
const music = new Audio('../cosmicdance.mp3');
music.crossOrigin = "anonymous";
let firstPlay = true;
let audioContext = false;
let audioData = false;
let source = false;

let mouseOnScrubber = false;

let pigletStart = 5;
let pigletEnd = 16;

const pathData="M25.7735 13.6809C25.7735 13.6809 355.317 -14.8511 405.455 13.6809C455.594 42.2129 488.163 125.235 405.455 197.959C322.748 270.684 75.9121 129.954 25.7735 197.959C-24.3651 265.964 15.3985 261.7 25.7735 300.288C64.3153 443.64 405.455 300.288 405.455 300.288"
const scrubberPath = new Path2D(pathData);