function getCanvasPosition() {
	canvasX = canvas.offsetLeft + canvas.clientLeft;
	canvasY = canvas.offsetTop + canvas.clientTop;
}

window.addEventListener('resize', getCanvasPosition);