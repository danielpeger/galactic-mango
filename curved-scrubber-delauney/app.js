import getCanvasPosition from './getCanvasPosition.js'
import togglePlay from './togglePlay.js';
import drawScrubber, { drawScrubberHover, drawScrubberDot } from './drawScrubber.js';
import {Delaunay} from "https://cdn.skypack.dev/d3-delaunay@6";
import samples from './samplePath/samples.json' assert { type: "json" };
import samplesWithLength from './samplePath/samplesWithLength.json' assert { type: "json" };

const delaunay = Delaunay.from(samples);
const pathLength = samplesWithLength[samplesWithLength.length - 1][2];
let closestX, closestY, closestLength;

function load() {
	getCanvasPosition();
	update();
}

function update() {
	if (audioContext) {
		canvasContext.clearRect(0, 0, 720, 720);
		canvasContext.fillStyle = '#000';
		canvasContext.fillRect(0, 0, 720, 720);
		drawScrubber();
		drawScrubberDot(closestX, closestY);
	}
	requestAnimationFrame(update);
}

function onMouseMove(e) {
	mouseX = e.clientX - canvasX;
	mouseY = e.clientY - canvasY;
	mouseOnScrubber = canvasContext.isPointInStroke(scrubberPath, mouseX, mouseY);

	const delauneyResult = delaunay.find(mouseX, mouseY);
	closestX = samples[delauneyResult][0];
	closestY = samples[delauneyResult][1];
	closestLength = samplesWithLength[delauneyResult][2];

	if(mouseOnScrubber) {
		canvas.style.cursor = "pointer";
	} else {
		canvas.style.cursor = "default";
	}
}

function onCanvasClick(e) {
	let clickX = e.clientX - canvasX;
	let clickY = e.clientY - canvasY;

	const progress = closestLength / pathLength;
	music.currentTime = music.duration * progress; 
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
