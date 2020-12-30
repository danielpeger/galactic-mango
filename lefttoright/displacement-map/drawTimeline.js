export default function drawTimeline(ctx) {
	progress = music.currentTime / music.duration;
	left = canvasWidth / 2 - progress * canvasWidth;

	ctx.fillStyle = backgroundColor;
	ctx.fillRect(0, 0, canvasWidth, canvasHeight);

	ctx.filter = "saturate(0%) brightness(91%)";
	ctx.globalCompositeOperation = "luminosity";
	ctx.drawImage(video, 0, 0, video.offsetWidth, video.offsetHeight - 5, left - 3, videoTop, canvasWidth, videoHeight);
	ctx.globalCompositeOperation = "source-over";
	ctx.filter = "saturate(100%)";

	if(progress <= 0.93 / 7) {
		ctx.drawImage(activeVideo, 0, 0, video.offsetWidth * 0.14, video.offsetHeight - 5, left - 3, videoTop, canvasWidth * 0.14, videoHeight);
	} else if (progress <= 1.9 / 7) {
		ctx.drawImage(activeVideo, video.offsetWidth * 0.14, 0, video.offsetWidth * 0.14, video.offsetHeight - 5, left + canvasWidth * 0.14 - 3, videoTop, canvasWidth * 0.14, videoHeight);
	} else if (progress <= 2.85 / 7) {
		ctx.drawImage(activeVideo, video.offsetWidth * 0.28, 0, video.offsetWidth * 0.14, video.offsetHeight - 5, left + canvasWidth * 0.28 - 3, videoTop, canvasWidth * 0.14, videoHeight);
	} else if (progress <= 3.4 / 7) {
		ctx.drawImage(activeVideo, video.offsetWidth * 0.42, 0, video.offsetWidth * 0.08, video.offsetHeight - 5, left + canvasWidth * 0.42 - 3, videoTop, canvasWidth * 0.08, videoHeight);
	} else if (progress <= 3.95 / 7) {
		ctx.drawImage(activeVideo, video.offsetWidth * 0.5, 0, video.offsetWidth * 0.14, video.offsetHeight * 0.5 - 3, left + canvasWidth * 0.5 - 3, videoTop, canvasWidth * 0.14, videoHeight * 0.5);
	} else if (progress <= 5.1 / 7) {
		ctx.drawImage(activeVideo, video.offsetWidth * 0.5, video.offsetHeight * 0.5, video.offsetWidth * 0.2, video.offsetHeight / 2 - 10, left + canvasWidth * 0.5 - 3, videoTop + videoHeight * 0.5, canvasWidth * 0.2, videoHeight / 2);
	} else if (progress <= 1) {
		ctx.drawImage(activeVideo, video.offsetWidth * 0.7, 0, video.offsetWidth * 0.3, video.offsetHeight - 5, left + canvasWidth * 0.7 - 3, videoTop, canvasWidth * 0.3, videoHeight);
	}
}