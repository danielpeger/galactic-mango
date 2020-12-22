const scrubberTop = 0;
const scrubberSide = 0;
const scrubberHeight = window.innerHeight;

export default function drawScrubber() {
	const progress = music.currentTime / music.duration;
	canvasContext.setLineDash([4, 4]);
	canvasContext.beginPath();
	canvasContext.moveTo(progress * window.innerWidth, 0);
	canvasContext.lineTo(progress * window.innerWidth, window.innerHeight);
	canvasContext.stroke();
}

export function setCursorOnScrubber(mouseX, mouseY) {
	const prevCursorOnScrubber = cursorOnScrubber;
	cursorOnScrubber = Boolean(mouseY < (2 * scrubberTop + scrubberHeight) && mouseX > scrubberSide && mouseX < (window.innerWidth - scrubberSide));
	if(prevCursorOnScrubber !== cursorOnScrubber) {
		if(cursorOnScrubber) {
			canvas.style.cursor = "pointer";
		} else {
			canvas.style.cursor = "default";
		}
	}
}

export function scrub(clickX, clickY) {
	if(cursorOnScrubber) {
		let progress = (clickX - scrubberSide) / (window.innerWidth - 2 * scrubberSide);
		music.currentTime = music.duration * progress;
	}
}