//Variables
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//Methods
function toggleVideoStatus() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

function updatePlayIcon() {
    if (video.paused) {
        play.firstChild.classList.toggle('fa-pause')
        play.firstChild.classList.add('fa-play')
    } else {
        play.firstChild.classList.toggle('fa-play')
        play.firstChild.classList.add('fa-pause')
    }
}

function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100

    //get Minutes
    let mins = Math.floor(video.currentTime / 60)
    if (mins < 10) {
        mins = '0' + String(mins)
    }

    //get Seconds
    let sec = Math.floor(video.currentTime % 60)
    if (sec < 10) {
        sec = '0' + String(sec)
    }

    //put in timestamp
    timestamp.innerText = `${mins}:${sec}`
}

function stopVideo() {
    video.currentTime = 0;
    video.pause()
}

function setVideoProgress() {
    video.currentTime = (progress.value * video.duration) / 100
}


//Event listeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);