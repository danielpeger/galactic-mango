let dpr = 1;

const canvas = document.getElementById("canvasElement");
const canvasContext = canvas.getContext("2d");

let mouseX = 0;
let mouseY = 0;

const music = new Audio('../shankar.mp3');
let firstPlay = true;

let cursorOnScrubber = false;