import togglePlay from './togglePlay.js';
import drawScrubber, { scrub } from './scrubber.js';
import applyDisplacementMap, { setupDisplacementMap } from './applyDisplacementMap.js';

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
	canvas.style.width = canvasWidth + "px";
	canvas.style.height = canvasHeight + "px";
	canvas.width = canvasWidth * dpr;
	canvas.height = canvasHeight * dpr;
	canvasContext.scale(dpr, dpr);

	videoHeight = (video.offsetHeight - 5) / video.offsetWidth * canvasWidth
	videoTop = (canvasHeight - videoHeight) / 2;
}

function update() {
	progress = music.currentTime / music.duration;
	left = canvasWidth / 2 - progress * canvasWidth;

	canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
	canvasContext.fillStyle = backgroundColor;
	canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);

	canvasContext.filter = "saturate(0%) brightness(91%)";
	canvasContext.globalCompositeOperation = "luminosity";
	canvasContext.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight - 5, left - 3, videoTop, canvasWidth, videoHeight);
	canvasContext.globalCompositeOperation = "source-over";
	canvasContext.filter = "saturate(100%)";

	if(progress <= 0.93 / 7) {
		canvasContext.drawImage(activeVideo, 0, 0, video.offsetWidth * 0.14, video.offsetHeight - 5, left - 3, videoTop, canvasWidth * 0.14, videoHeight);
	} else if (progress <= 1.9 / 7) {
		canvasContext.drawImage(activeVideo, video.offsetWidth * 0.14, 0, video.offsetWidth * 0.14, video.offsetHeight - 5, left + canvasWidth * 0.14 - 3, videoTop, canvasWidth * 0.14, videoHeight);
	} else if (progress <= 2.85 / 7) {
		canvasContext.drawImage(activeVideo, video.offsetWidth * 0.28, 0, video.offsetWidth * 0.14, video.offsetHeight - 5, left + canvasWidth * 0.28 - 3, videoTop, canvasWidth * 0.14, videoHeight);
	} else if (progress <= 3.4 / 7) {
		canvasContext.drawImage(activeVideo, video.offsetWidth * 0.42, 0, video.offsetWidth * 0.08, video.offsetHeight - 5, left + canvasWidth * 0.42 - 3, videoTop, canvasWidth * 0.08, videoHeight);
	} else if (progress <= 3.95 / 7) {
		canvasContext.drawImage(activeVideo, video.offsetWidth * 0.5, 0, video.offsetWidth * 0.14, video.offsetHeight * 0.5 - 3, left + canvasWidth * 0.5 - 3, videoTop, canvasWidth * 0.14, videoHeight * 0.5);
	} else if (progress <= 5.1 / 7) {
		canvasContext.drawImage(activeVideo, video.offsetWidth * 0.5, video.offsetHeight * 0.5, video.offsetWidth * 0.2, video.offsetHeight / 2 - 10, left + canvasWidth * 0.5 - 3, videoTop + videoHeight * 0.5, canvasWidth * 0.2, videoHeight / 2);
	} else if (progress <= 1) {
		canvasContext.drawImage(activeVideo, video.offsetWidth * 0.7, 0, video.offsetWidth * 0.3, video.offsetHeight - 5, left + canvasWidth * 0.7 - 3, videoTop, canvasWidth * 0.3, videoHeight);
	}
	applyDisplacementMap();

	drawScrubber();

	requestAnimationFrame(update);
}

function onMouseMove(e) {
	mouseX = e.clientX;
	mouseY = e.clientY;
}

function onCanvasClick(e) {
	// scrub(e.clientX)
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
