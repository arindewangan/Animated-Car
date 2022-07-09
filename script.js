var audio = document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop = true;
// audio.play();

let mute = document.getElementById('mute');
mute.addEventListener("click", () => {
    console.log("Clicked");
    if (audio.paused || audio.currentTime <= 0) {
        audio.play();
    } else {
        audio.pause();
    }
});