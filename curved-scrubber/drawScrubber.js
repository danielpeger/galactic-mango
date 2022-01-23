export default function drawScrubber() {
	const progress = music.currentTime / music.duration;
	canvasContext.setLineDash([scrubberLength]);

	canvasContext.strokeStyle = "rgba(255, 255, 255, 1)";
	canvasContext.lineDashOffset = scrubberLength - (progress * scrubberLength);
	canvasContext.stroke(scrubberPath);

	canvasContext.strokeStyle = "rgba(255, 255, 255, 0.2)";
	canvasContext.lineDashOffset = 0;
	canvasContext.stroke(scrubberPath);
}

export function drawScrubberHover() {
	// canvasContext.fillStyle = "rgba(255, 255, 255, 0.2)";
	// canvasContext.fillRect(20, 20, mouseX-20, 8);
}