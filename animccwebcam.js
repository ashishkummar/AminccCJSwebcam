/*
version 1.0
By- ashishkummar@gmail.com
*/
var targetMC = this.camRenderer;

var _cjBitmap;
var _camWidth = targetMC.nominalBounds.width;
var _camHeight = targetMC.nominalBounds.height;
var _morror = true;


navigator.getUserMedia = navigator.getUserMedia ||
	navigator.webkitGetUserMedia ||
	navigator.mozGetUserMedia ||
	navigator.msGetUserMedia;

if (!navigator.getUserMedia) {
	return false;
}


var video = document.createElement('video'),
	track;
video.setAttribute('autoplay', true);



navigator.getUserMedia({
	video: true,
	audio: false
}, function (stream) {
	video.src = window.URL.createObjectURL(stream);
	track = stream.getTracks()[0];
}, function (e) {
	console.error('Rejected!', e);
});



_cjBitmap = new createjs.Bitmap(video);

if (_morror) {
	_cjBitmap.scaleX = -1;
	_cjBitmap.x = _camWidth;
}



targetMC.addChild(_cjBitmap);

 
var loopFrame;

function loop() {

	loopFrame = requestAnimationFrame(loop);
 
}


function startLoop() {
	loopFrame = loopFrame || requestAnimationFrame(loop);
}


video.addEventListener('loadedmetadata', function () {
	startLoop();
});

//
