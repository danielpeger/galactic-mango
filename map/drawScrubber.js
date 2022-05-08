export default function drawScrubber(length) {
	const progress = music.currentTime / music.duration;
	canvasContext.lineWidth = 6;
	canvasContext.setLineDash([length]);

	//canvasContext.translate(1000,700);

	canvasContext.strokeStyle = "rgba(255, 255, 255, 1)";
	canvasContext.lineDashOffset = length - (progress * length);
	canvasContext.stroke(scrubberPath);

	canvasContext.strokeStyle = "rgba(255, 255, 255, 0.35)";
	canvasContext.lineDashOffset = 0;
	canvasContext.stroke(scrubberPath);

	//canvasContext.translate(-1000,-700);
}

export function drawScrubberDot(x, y) {
	canvasContext.beginPath();
	canvasContext.arc(x, y, 6, 0, 2 * Math.PI, false);
	canvasContext.fillStyle = 'red';
	canvasContext.fill();
}

export function drawRectangle(progress, x, y) {
	canvasContext.fillStyle = `rgba(255, 255, 255, ${progress})`;
	canvasContext.fillRect(x, y, 25, 25);
}