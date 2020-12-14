import drawGradients from './drawGradients';

const canvas = document.getElementById("canvasElement");
const canvasContext = canvas.getContext("2d");
canvasContext.globalCompositeOperation = "difference";
canvasContext.filter="brightness(140%) saturate(120%)";
let canvasX = 0;
let canvasY = 0;
let mouseX = 360;
let mouseY = 360;
let radiusAdjustment = 0;

const music = new Audio('https://eager-morse-17da48.netlify.app/shankar.mp3');
music.crossOrigin = "anonymous";
let firstPlay = true;
let audioContext = false;
let audioData = false;
let source = false;
let biquadFilter = false;
let iirFilter = false;
let feedForward = [0.00020298, 0.0004059599, 0.00020298];
let feedBackward = [1.0126964558, -1.9991880801, 0.9873035442];

function load() {
	getCanvasPosition();
	update();
}

function update() {
	if (audioContext) {
		drawGradients(mouseX,mouseY);
	}
	requestAnimationFrame(update);
}

function onMouseMove(e) {
	mouseX = e.clientX - canvasX;
	mouseY = e.clientY - canvasY;
	if(mouseX < 180) {
		radiusAdjustment = mouseX;
	}

	biquadFilter.frequency.setValueAtTime(mouseX * 10, audioContext.currentTime);
	biquadFilter.gain.setValueAtTime(mouseY / 50, audioContext.currentTime);
	biquadFilter.detune.value = mouseX / mouseY * 1000;
	biquadfilter.Q.value = 100;
}

canvas.addEventListener("mousemove", onMouseMove, false);