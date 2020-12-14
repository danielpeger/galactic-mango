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
	biquadFilter = audioContext.createBiquadFilter();
	biquadFilter.type = 'lowpass';
	biquadFilter.Q.value = 20;
	biquadFilter.frequency.setValueAtTime(mouseX, audioContext.currentTime);
	biquadFilter.gain.setValueAtTime(mouseX/100, audioContext.currentTime);
	iirFilter = audioContext.createIIRFilter(feedForward, feedBackward);
	source.connect(biquadFilter).connect(audioContext.destination);
}