export function setupDisplacementMap() {
	source.width = map.width = canvasWidth;
	source.height = map.height = canvasHeight;

	sourceData, mapData, outputData = canvasContext.createImageData(canvasWidth, canvasHeight);

	mapContext.drawImage(mapImg, 0, 0, 400, 400, 0, 0, canvasWidth, canvasHeight );
	mapData = mapContext.getImageData(0, 0, canvasWidth, canvasHeight).data;
}

export default function applyDisplacementMap() {	
	for (var y = 0; y < canvasHeight; y++) {
		for (var x = 0; x < canvasWidth; x++) {
			const driftX = mouseX / canvasWidth * driftRange,
						driftY = mouseY / canvasHeight * driftRange,
						pixel = y * canvasWidth + x,
						arrayPosition = pixel * 4,
						depth = mapData[arrayPosition] / 255,
						offsetX = Math.min(Math.max(Math.round(x + (driftX * depth)), 0), canvasWidth - 1),
						offsetY = Math.min(Math.max(Math.round(y + (driftY * depth)), 0), canvasHeight - 1),
						targetPixel = offsetY * canvasWidth + offsetX,
						targetPosition = targetPixel * 4;

			outputData.data[arrayPosition] = sourceData[targetPosition];
			outputData.data[arrayPosition + 1] = sourceData[targetPosition + 1];
			outputData.data[arrayPosition + 2] = sourceData[targetPosition + 2];
			outputData.data[arrayPosition + 3] = sourceData[targetPosition + 3];
		}
	}

	canvasContext.putImageData(outputData, 0, 0);
}