const scrubberTop = 20;
const scrubberSide = 20;
const scrubberHeight = 6;

export default function drawScrubber() {
	//Draw scrubber background
	canvasContext.fillStyle = "rgba(255, 255, 255, 0.2)";
	canvasContext.fillRect(scrubberSide, scrubberTop, window.innerWidth - 2 * scrubberSide, scrubberHeight);

	//Draw progress bar
	canvasContext.fillStyle = "rgba(255, 255, 255, 1)";
	const progress = music.currentTime / music.duration;
	canvasContext.fillRect(scrubberSide, scrubberTop, (window.innerWidth - 2 * scrubberSide) * progress, scrubberHeight);

	if(cursorOnScrubber) {
		//Draw hover
		canvasContext.fillStyle = "rgba(255, 255, 255, 0.2)";
		canvasContext.fillRect(scrubberSide, scrubberTop, mouseX - scrubberSide, scrubberHeight);
	}
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