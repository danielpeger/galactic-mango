export default function togglePlay() {
	if(music.paused) {
		music.play();
	} else {
		music.pause();
	}
}