let dpr = 1;

const canvas = document.getElementById("canvasElement"),
			canvasContext = canvas.getContext('2d'),
			video = document.getElementById('video'),
			activeVideo = document.getElementById('activeVideo'),
			sourceImg = document.getElementById('source'),
			mapImg = document.getElementById('map');

let canvasWidth = 100;
let canvasHeight = 100;

const driftRange = 100;

const source = document.createElement('canvas'),
			sourceContext = source.getContext('2d'),
			map = document.createElement('canvas'),
			mapContext = map.getContext('2d');

let mouseX = 0;
let mouseY = 0;

const music = new Audio('../../cosmicdance.mp3');

const backgroundColor = "#106366";
let videoTop = 0;
let videoHeight = 0;
let stage = 0;

let progress = music.currentTime / music.duration;
let left = window.innerWidth / 2 - progress * window.innerWidth;