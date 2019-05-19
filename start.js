var root = document.getElementById('root');

var imageNormal = document.getElementById('image-normal');
var imageMuda = document.getElementById('image-muda');

var punching = document.getElementById("video-punching");

var clicks = 0;

function toggleImage(down) {
    imageNormal.style.display = down ? 'none' : 'block';
    imageMuda.style.display = down ? 'block' : 'none';
}

function toggleVideo(){
    punching.play();
    imageNormal.style.display = 'none';
    imageMuda.style.display = 'none';
}

// Counter
function mud(a) {
    toggleImage(true);

    if (++clicks % 6 === 0) {
        imageNormal.style.display = 'none';
        imageMuda.style.display = 'none';
        punching.style.display = 'block';
        
        setTimeout(toggleVideo, 400);
    }
}

toggleImage(false);

root.addEventListener('mousedown', function(a) { if(a.button !== 0) return; mud(a); });
root.addEventListener('mouseup', function(a) { if(a.button !== 0) return; toggleImage(false); });
