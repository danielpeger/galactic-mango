const canvas = document.getElementById("canvasElement");
const canvasContext = canvas.getContext("2d");
let canvasWidth = 0;
let canvasHeight = 0;
let mouseX = 360;
let mouseY = 360;

const playButton = document.getElementById("playButton");
const music = new Audio('../cosmicdance.mp3');
music.crossOrigin = "anonymous";
let firstPlay = true;
let audioContext = false;
let audioData = false;
let source = false;
