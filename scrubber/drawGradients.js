export default function drawGradients(x, y) {
	let lingrd = canvasContext.createLinearGradient(0, 0, x * 10, y * 10);
	lingrd.addColorStop(0, "#c32933");
	lingrd.addColorStop(0.1, "#852e39");
	lingrd.addColorStop(1, "#852e39");
	canvasContext.fillStyle = lingrd;
	canvasContext.fillRect(0, 0, 720, 720);

	let radgrd = canvasContext.createRadialGradient(360, 360, 0, x, y, 540+radiusAdjustment);
	radgrd.addColorStop(0, "rgba(110, 38, 30, 1)");
	radgrd.addColorStop(1, "rgba(113, 84, 58, 1)");
	canvasContext.fillStyle = radgrd;
	canvasContext.fillRect(0, 0, 720, 720);
}