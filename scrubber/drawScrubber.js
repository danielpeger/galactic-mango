export default function drawScrubber(x, y) {
	canvasContext.fillStyle = "rgba(255, 255, 255, 0.2)";
	canvasContext.fillRect(20, 20, 680, 8);
	canvasContext.fillStyle = "rgba(255, 255, 255, 1)";
	const progress = music.currentTime / music.duration;
	canvasContext.fillRect(20, 20, 680 * progress, 8);
}