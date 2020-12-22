export default function togglePlay() {
	if(music.paused) {
		music.play();
		activeVideo.play();
	} else {
		music.pause();
		activeVideo.pause();
	}
}