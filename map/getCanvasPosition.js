export default function getCanvasPosition() {
	canvasWidth = canvas.offsetWidth;
	canvasHeight = canvas.offsetHeight;

	canvas.width = canvasWidth;
	canvas.height = canvasHeight;
}