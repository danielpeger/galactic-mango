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

const pathData = "M25.7735 35.6809C25.7735 35.6809 448.911 205.862 405.455 35.6809C362 -134.5 100 381.5 307.5 259.5C515 137.5 75.9121 151.954 25.7735 219.959C-24.3651 287.964 15.3985 283.7 25.7735 322.288C41.9411 382.422 111.356 392.105 186.5 383.083C350 322.288 329.5 433 329.5 433L171.5 506L343.5 540";
const scrubberPath = new Path2D(pathData);