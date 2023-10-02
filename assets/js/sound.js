let isMuted = false;
console.log("is muted = " + isMuted);
const muteButton = document.getElementById("mute-button");
/**
 * Toggle the sound (muted or no muted)
 * after volume button clicked
 */

muteButton.addEventListener("click", function () {
    isMuted = !isMuted;
    muteButton.innerText = isMuted ? 'Unmute sound' : 'Mute sound';

    allSounds.forEach((sound) => {
        sound.muted = isMuted;
    });
    if (isMuted) {
        muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        console.log("is muted = " + isMuted);
    } else {
        muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        console.log("is muted = " + isMuted);
    }
});