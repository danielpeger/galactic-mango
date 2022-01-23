import getCanvasPosition from './getCanvasPosition.js'
import togglePlay from './togglePlay.js';
import drawScrubber, { drawScrubberHover } from './drawScrubber.js';
import {Delaunay} from "https://cdn.skypack.dev/d3-delaunay@6";

const points = [[474,276],[586,393],[378,388],[338,323],[341,138],[547,252],[589,148],[346,227],[365,108],[562,62]];
const delaunay = Delaunay.from(points);

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
		if(mouseOnScrubber) {

		}
	}
	requestAnimationFrame(update);
}

function onMouseMove(e) {
	mouseX = e.clientX - canvasX;
	mouseY = e.clientY - canvasY;
	mouseOnScrubber = canvasContext.isPointInStroke(scrubberPath, mouseX, mouseY);

	const result = delaunay.find(mouseX, mouseY);
	console.log(result);

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
