import getCanvasPosition from './getCanvasPosition.js'
import togglePlay from './togglePlay.js';
import drawGradients from './drawGradients.js';
import drawScrubber from './drawScrubber.js';

function load() {
	getCanvasPosition();
	update();
}

function update() {
	if (audioContext) {
		canvasContext.clearRect(0, 0, 720, 720);
		drawGradients(mouseX,mouseY);
		drawScrubber();
	}
	requestAnimationFrame(update);
}

function onMouseMove(e) {
	mouseX = e.clientX - canvasX;
	mouseY = e.clientY - canvasY;
	if(mouseX < 180) {
		radiusAdjustment = mouseX;
	}
	if (biquadFilter) {
		biquadFilter.frequency.setValueAtTime(mouseX * 10, audioContext.currentTime);
		biquadFilter.gain.setValueAtTime(mouseY / 50, audioContext.currentTime);
		biquadFilter.detune.value = mouseX / mouseY * 1000;
	}
}

window.addEventListener("load", load, false);
window.addEventListener('resize', getCanvasPosition);
canvas.addEventListener("mousemove", onMouseMove, false);
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    togglePlay();
  }
})
