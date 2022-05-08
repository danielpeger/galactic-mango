import getCanvasPosition from './getCanvasPosition.js'
import togglePlay from './togglePlay.js';
import drawScrubber, { drawScrubberDot, drawRectangle } from './drawScrubber.js';
import {Delaunay} from "https://cdn.skypack.dev/d3-delaunay@6";
import samples from './samplePath/samples.js';
import samplesWithLength from './samplePath/samplesWithLength.js';

const delaunay = Delaunay.from(samples);
const pathLength = samplesWithLength[samplesWithLength.length - 1][2];
let closestX, closestY, closestLength;

function load() {
	getCanvasPosition();
	update();
}

function update() {
	if (audioContext) {
		canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
		canvasContext.fillStyle = '#000';
		canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);
		drawScrubber(pathLength);
		drawScrubberDot(closestX, closestY);

		const rectangles=[
			{
				x: 560,
				y: 460,
				start: 47,
				end: 48
			},
			{
				x: 520,
				y: 470,
				start: 48.5,
				end: 49.5
			}
		]

		for (let i = 0; i < rectangles.length; i++) {
			const rectDuration = rectangles[i].start - rectangles[i].end;
			const rectCurrent = Math.min(Math.max((music.currentTime), rectangles[i].start), rectangles[i].end);
			const rectProgress = Math.abs((rectCurrent - rectangles[i].start) / rectDuration);
			drawRectangle(rectProgress, rectangles[i].x, rectangles[i].y);
		}
	}
	requestAnimationFrame(update);
}

function onMouseMove(e) {
	mouseX = e.offsetX;
	mouseY = e.offsetY;

	const delauneyResult = delaunay.find(mouseX, mouseY);
	closestX = samples[delauneyResult][0];
	closestY = samples[delauneyResult][1];
	closestLength = samplesWithLength[delauneyResult][2];
}

function onCanvasClick(e) {
	let clickX = e.offsetX;
	let clickY = e.offsetY;

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
window.addEventListener('keydown', function(e) {
  if(e.keyCode == 32) {
    e.preventDefault();
  }
});
playButton.addEventListener("click", togglePlay, false);
