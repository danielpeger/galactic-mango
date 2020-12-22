let dpr = 1;

const canvas = document.getElementById("canvasElement");
const canvasContext = canvas.getContext('2d');
const video = document.getElementById('video');
const activeVideo = document.getElementById('activeVideo');

let mouseX = 0;
let mouseY = 0;
let cursorOnScrubber = false;

const music = new Audio('../shankar.mp3');

const backgroundColor = "#106366";
let videoTop = 0;
let videoHeight = 0;