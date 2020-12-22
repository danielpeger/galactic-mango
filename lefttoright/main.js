import togglePlay from './togglePlay.js';
import drawScrubber, { setCursorOnScrubber, scrub } from './scrubber.js';

function setup() {
	dpr = window.devicePixelRatio || 1;
	sizeCanvas();
	update();
}

function sizeCanvas() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

function update() {
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	canvasContext.fillStyle = "#106e71";
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);
	drawScrubber();
	requestAnimationFrame(update);
}

function onMouseMove(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
	setCursorOnScrubber(mouseX, mouseY);
}

function onCanvasClick(e) {
	scrub(e.clientX, e.clientY)
}

window.addEventListener("load", setup, false);
window.addEventListener("resize", sizeCanvas);
canvas.addEventListener("mousemove", onMouseMove, false);
canvas.addEventListener("click", onCanvasClick, false);
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    togglePlay();
  }
})
