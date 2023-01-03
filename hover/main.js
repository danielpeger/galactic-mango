import togglePlay from './togglePlay.js';

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
	canvasContext.filter = "saturate(0%) brightness(91%)";
	canvasContext.globalCompositeOperation = "luminosity";
	canvasContext.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight - 5, -3, videoTop, window.innerWidth, videoHeight);
	canvasContext.globalCompositeOperation = "source-over";
	canvasContext.filter = "saturate(100%)";

	const progress = music.currentTime / music.duration;
	if(progress <= 0.93 / 7) {
		canvasContext.drawImage(activeVideo, 0, 0, video.offsetWidth * 0.14, video.offsetHeight - 5, -3, videoTop, window.innerWidth * 0.14, videoHeight);
	} else if (progress <= 1.9 / 7) {
		canvasContext.drawImage(activeVideo, video.offsetWidth * 0.14, 0, video.offsetWidth * 0.14, video.offsetHeight - 5, window.innerWidth * 0.14 - 3, videoTop, window.innerWidth * 0.14, videoHeight);
	} else if (progress <= 2.85 / 7) {
		canvasContext.drawImage(activeVideo, video.offsetWidth * 0.28, 0, video.offsetWidth * 0.14, video.offsetHeight - 5, window.innerWidth * 0.28 - 3, videoTop, window.innerWidth * 0.14, videoHeight);
	} else if (progress <= 3.4 / 7) {
		canvasContext.drawImage(activeVideo, video.offsetWidth * 0.42, 0, video.offsetWidth * 0.08, video.offsetHeight - 5, window.innerWidth * 0.42 - 3, videoTop, window.innerWidth * 0.08, videoHeight);
	} else if (progress <= 3.95 / 7) {
		canvasContext.drawImage(activeVideo, video.offsetWidth * 0.5, 0, video.offsetWidth * 0.14, video.offsetHeight * 0.5 - 3, window.innerWidth * 0.5 - 3, videoTop, window.innerWidth * 0.14, videoHeight * 0.5);
	} else if (progress <= 5.1 / 7) {
		canvasContext.drawImage(activeVideo, video.offsetWidth * 0.5, video.offsetHeight * 0.5, video.offsetWidth * 0.2, video.offsetHeight / 2 - 10, window.innerWidth * 0.5 - 3, videoTop + videoHeight * 0.5, window.innerWidth * 0.2, videoHeight / 2);
	} else if (progress <= 1) {
		canvasContext.drawImage(activeVideo, video.offsetWidth * 0.7, 0, video.offsetWidth * 0.3, video.offsetHeight - 5, window.innerWidth * 0.7 - 3, videoTop, window.innerWidth * 0.3, videoHeight);
	}

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
