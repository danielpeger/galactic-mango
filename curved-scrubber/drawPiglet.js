export default function drawPiglet(progress) {
	canvasContext.fillStyle = "rgba(255, 0, 0, 1)";
	const pigletX = 300 + (progress * 120);
	canvasContext.fillRect(pigletX, 300, 80, 80);
}