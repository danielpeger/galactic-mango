export default function togglePlay() {
	if(music.paused) {
		music.play();
		document.getElementById("playButton").innerHTML = "⏸ Press space to pause";
		if (firstPlay) {
			setupAudioContext()
			firstPlay = false;
		} else {
			audioContext.resume();
		}

	} else {
		music.pause();
		document.getElementById("playButton").innerHTML = "▶️ Press space to play";
		audioContext.suspend();
	}
}

function setupAudioContext() {
	audioContext = new AudioContext();
	source = audioContext.createMediaElementSource(music);
	source.connect(audioContext.destination);
}