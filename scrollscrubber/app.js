import getCanvasPosition from './getCanvasPosition.js'
import togglePlay from './togglePlay.js';
import drawScrubber, { drawScrubberDot, drawRectangle } from './drawScrubber.js';

const pathLength = 3000;
let closestX, closestY, closestLength, scrollTop;

function load() {
	getCanvasPosition();
	update();
}

function update() {
	if (audioContext) {
		canvasContext.clearRect(0, 0, canvasWidth, canvasHeight);
		canvasContext.fillStyle = '#000';
		canvasContext.fillRect(0, 0, canvasWidth, canvasHeight);
		canvasContext.translate(window.innerWidth/2,window.innerHeight/2);
		drawScrubber(pathLength);
		drawScrubberDot()
		canvasContext.translate(-window.innerWidth/2,-window.innerHeight/2);
	}
	requestAnimationFrame(update);
}

function onMouseMove(e) {
	mouseX = e.offsetX;
	mouseY = e.offsetY;
}

function onCanvasClick(e) {
	let clickX = e.offsetX;
	let clickY = e.offsetY;

	const progress = closestLength / pathLength;
	console.log(progress);
	music.currentTime = music.duration * progress; 
}

function onScroll(e) {
	scrollTop = document.getElementById("scroll-container").scrollTop;
	
	const progress = scrollTop/3000;
	console.log(progress);
	music.currentTime = music.duration * progress; 
}

window.addEventListener("load", load, false);
window.addEventListener('resize', getCanvasPosition);
document.getElementById("scroll-container").addEventListener("scroll", onScroll);
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
