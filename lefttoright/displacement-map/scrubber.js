const scrubberTop = 0;
const scrubberSide = 0;
const scrubberHeight = window.innerHeight;

export default function drawScrubber() {
	canvasContext.setLineDash([4, 4]);
	canvasContext.beginPath();
	canvasContext.moveTo(window.innerWidth / 2, 0);
	canvasContext.lineTo(window.innerWidth / 2, window.innerHeight);
	canvasContext.stroke();
}

export function scrub(clickX) {
	const progressToScrubTo = Math.min(Math.max((clickX - left) / window.innerWidth, 0), 1);
	music.currentTime = music.duration * progressToScrubTo;
}