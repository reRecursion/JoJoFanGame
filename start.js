var root = document.getElementById('root');

var imageNormal = document.getElementById('image-normal');
var imageMuda = document.getElementById('image-muda');

var punching = document.getElementById("video-punching");
var overlay = document.getElementById("overlay")

var clicks = 0;
var counter = 0;
var isVidRunning = 0

var audio = new Audio('sound.mp3');

function toggleImage(down) {
    audio.play();
    imageNormal.style.display = down ? 'none' : 'block';
    imageMuda.style.display = down ? 'block' : 'none';
}

// actual coutner
function ar(i) {
    if (isVidRunning)
        return;
    toggleImage(counter++ % 2);

    if (counter % 6 == 0) {
        isVidRunning = 1;
        imageNormal.style.display = 'none';
        imageMuda.style.display = 'none';
        punching.style.display = 'block';
        // toggleImage(true);
        punching.play();
    }

}

toggleImage(false);

root.addEventListener('mousedown', function(a) {if(a.button !== 0) return; ar(a); });
root.addEventListener('mouseup', function(a) {if(a.button !== 0) return; ar(a); });
root.addEventListener('touchstart', function(e) { ar(a); e.preventDefault(); });
root.addEventListener('touchmove', function(e) { e.preventDefault(); });
root.addEventListener('touchend', function(e) { ar(a); });
root.addEventListener('touchcancel', function(e) { ar(a); });
