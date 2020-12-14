const canvas = document.getElementById("canvasElement");
const canvasContext = canvas.getContext("2d");
let canvasX = 0;
let canvasY = 0;
let mouseX = 360;
let mouseY = 360;
let radiusAdjustment = 0;

const music = new Audio('../cosmicdance.mp3');
music.crossOrigin = "anonymous";
let firstPlay = true;
let audioContext = false;
let audioData = false;
let source = false;
let biquadFilter = false;
let iirFilter = false;
let feedForward = [0.00020298, 0.0004059599, 0.00020298];
let feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];

let mouseOnScrubber = false;

let pigletStart = 5;
let pigletEnd = 16;