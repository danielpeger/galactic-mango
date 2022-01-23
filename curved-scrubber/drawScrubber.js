export default function drawScrubber() {
	const progress = music.currentTime / music.duration;
	canvasContext.lineWidth = 20;
	canvasContext.setLineDash([scrubberLength]);

	canvasContext.strokeStyle = "rgba(255, 255, 255, 1)";
	canvasContext.lineDashOffset = scrubberLength - (progress * scrubberLength);
	canvasContext.stroke(scrubberPath);

	canvasContext.strokeStyle = "rgba(255, 255, 255, 0.35)";
	canvasContext.lineDashOffset = 0;
	canvasContext.stroke(scrubberPath);
}

export function drawScrubberHover(length) {
	canvasContext.strokeStyle = "rgba(255, 255, 255, 0.35)";
	canvasContext.lineDashOffset = scrubberLength - length;
	canvasContext.stroke(scrubberPath);
}