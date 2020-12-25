let dpr = 1;

const canvas = document.getElementById("canvasElement");
const canvasContext = canvas.getContext('2d');
const video = document.getElementById('video');
const activeVideo = document.getElementById('activeVideo');

let mouseX = 0;
let mouseY = 0;

const music = new Audio('../../cosmicdance.mp3');

const backgroundColor = "#106366";
let videoTop = 0;
let videoHeight = 0;
let stage = 0;

let progress = music.currentTime / music.duration;
let left = window.innerWidth / 2 - progress * window.innerWidth;