import getCanvasPosition from './getCanvasPosition.js'
import togglePlay from './togglePlay.js';
import drawGradients from './drawGradients.js';
import drawScrubber, { drawScrubberHover } from './drawScrubber.js';
import drawPiglet from './drawPiglet.js';

function load() {
	getCanvasPosition();
	update();
}

function update() {
	if (audioContext) {
		canvasContext.clearRect(0, 0, 720, 720);
		drawGradients(mouseX,mouseY);
		drawScrubber();
		const pigletDuration = pigletStart - pigletEnd;
		const pigletCurrent = Math.min(Math.max((music.currentTime), pigletStart), pigletEnd);
		const pigletProgress = Math.abs((pigletCurrent - pigletStart) / pigletDuration);
		drawPiglet(pigletProgress);
		if(mouseOnScrubber) {
			drawScrubberHover()
		}
	}
	requestAnimationFrame(update);
}

function onMouseMove(e) {
	mouseX = e.clientX - canvasX;
	mouseY = e.clientY - canvasY;
	mouseOnScrubber = Boolean(mouseY < 40 && mouseX > 20 && mouseX < 700);

	if(mouseX < 180) {
		radiusAdjustment = mouseX;
	}

	if (biquadFilter) {
		biquadFilter.frequency.setValueAtTime(mouseX * 10, audioContext.currentTime);
		biquadFilter.gain.setValueAtTime(mouseY / 50, audioContext.currentTime);
		biquadFilter.detune.value = mouseX / mouseY * 1000;
	}

	if(mouseOnScrubber) {
		canvas.style.cursor = "pointer";
	} else {
		canvas.style.cursor = "default";
	}
}

function onCanvasClick(e) {
	let clickX = e.clientX - canvasX;
	let clickY = e.clientY - canvasY;

	if(mouseOnScrubber) {
		let progress = (clickX - 20) / 680;
		console.log(progress);
		music.currentTime = music.duration * progress;
	}
}

window.addEventListener("load", load, false);
window.addEventListener('resize', getCanvasPosition);
canvas.addEventListener("mousemove", onMouseMove, false);
canvas.addEventListener("click", onCanvasClick, false);
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    togglePlay();
  }
})
