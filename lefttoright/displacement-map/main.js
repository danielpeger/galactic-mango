import togglePlay from './togglePlay.js';
import drawScrubber, { scrub } from './scrubber.js';
import applyDisplacementMap, { setupDisplacementMap } from './applyDisplacementMap.js';
import drawTimeline from './drawTimeline.js';

function setup() {
	document.body.style.background = backgroundColor;
	sizeThings();
	update(10,10);
}

function sizeThings() {
	sizeCanvas();
	setupDisplacementMap();
}

function sizeCanvas() {
	dpr = window.devicePixelRatio || 1;
	canvasWidth = window.innerWidth;
	canvasHeight = window.innerHeight;
	// canvas.style.width = canvasWidth + "px";
	// canvas.style.height = canvasHeight + "px";
	// canvas.width = canvasWidth * dpr;
	// canvas.height = canvasHeight * dpr;
	// canvasContext.scale(dpr, dpr);

	canvas.width = canvasWidth;
	canvas.height = canvasHeight;

	videoHeight = (video.offsetHeight - 5) / video.offsetWidth * canvasWidth
	videoTop = (canvasHeight - videoHeight) / 2;
}

function update() {
	canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
	mapContext.clearRect(0, 0, canvasWidth, canvasHeight);
	sourceContext.clearRect(0, 0, canvasWidth, canvasHeight);

	drawTimeline(sourceContext);
	sourceData = sourceContext.getImageData(0, 0, canvasWidth, canvasHeight).data;

	applyDisplacementMap();
	drawScrubber();
	requestAnimationFrame(update);
}

function onMouseMove(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
}

function onCanvasClick(e) {
	scrub(e.clientX)
}

window.addEventListener("load", setup, false);
window.addEventListener("resize", sizeThings);
canvas.addEventListener("mousemove", onMouseMove, false);
canvas.addEventListener("click", onCanvasClick, false);
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    togglePlay();
  }
})
