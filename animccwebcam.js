var targetMC = this.box;

var _cjBitmap;
var _camWidth  =  targetMC.nominalBounds.width;
var	_camHeight =  targetMC.nominalBounds.height;
var _morror=true;


navigator.getUserMedia = navigator.getUserMedia ||
	navigator.webkitGetUserMedia ||
	navigator.mozGetUserMedia ||
	navigator.msGetUserMedia;

if (!navigator.getUserMedia) {
	return false;
}
 

var video = document.createElement('video'), track;
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

var  loopFrame; 
	 
function loop() {
	
	loopFrame = requestAnimationFrame(loop); 
 
	_cjBitmap = new createjs.Bitmap(video);
	
	 if(_morror){
 	   _cjBitmap.scaleX = -1;
 	   _cjBitmap.x = _camWidth;
	 }

	if (targetMC.numChildren >= 4) {
		for (var t = 0; t < targetMC.numChildren; t++) {
			targetMC.removeChildAt(t);
		}
	} 
 
	 targetMC.addChild(_cjBitmap);
 
}


function startLoop() {
	loopFrame = loopFrame || requestAnimationFrame(loop);
}


video.addEventListener('loadedmetadata', function () {
	startLoop();
});

//
