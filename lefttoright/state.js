let dpr = 1;

const canvas = document.getElementById("canvasElement");
const canvasContext = canvas.getContext('2d');

let mouseX = 0;
let mouseY = 0;
let cursorOnScrubber = false;

const music = new Audio('../shankar.mp3');

const backgroundColor = "#106e71";