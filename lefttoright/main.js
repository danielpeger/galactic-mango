import togglePlay from './togglePlay.js';
import drawScrubber, { setCursorOnScrubber, scrub } from './scrubber.js';

function setup() {
	document.body.style.background = backgroundColor;
	sizeCanvas();
	update();
}

function sizeCanvas() {
	dpr = window.devicePixelRatio || 1;
	canvas.style.width = window.innerWidth + "px";
	canvas.style.height = window.innerHeight + "px";
	canvas.width = window.innerWidth * dpr;
	canvas.height = window.innerHeight * dpr;
	canvasContext.scale(dpr, dpr);
	videoHeight = (video.offsetHeight - 5) / video.offsetWidth * window.innerWidth
	videoTop = (window.innerHeight - videoHeight) / 2;
}

function update() {
	canvasContext.clearRect(0, 0, window.innerWidth, window.innerHeight);
	canvasContext.fillStyle = backgroundColor;
	canvasContext.fillRect(0, 0, window.innerWidth, window.innerHeight);
	canvasContext.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight - 5, -3, videoTop, window.innerWidth, videoHeight);
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
