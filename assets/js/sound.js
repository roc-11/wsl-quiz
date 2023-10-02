let isMuted;
let muteState = localStorage.getItem('muteState');

console.log("is muted = " + isMuted);
const muteButton = document.getElementById("mute-button");

const correctSoundArr = new Audio('assets/audio/correct-answer.mp3');
const inCorrectSoundArr = new Audio('assets/audio/wrong-answer.mp3');
const playQuizSoundArr = new Audio('assets/audio/whistle-sound.mp3');

const allSounds = [
    correctSoundArr, inCorrectSoundArr, playQuizSoundArr
];

document.addEventListener("DOMContentLoaded", function () {
    //check if user has visited before (if there's a value in mutedState)
    if (!muteState || muteState !== 'true') {
        isMuted = false;
        muteState = localStorage.setItem('muteState', isMuted);
        muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        console.log("Muted state is" + mutedState);
    }
    else {
        isMuted = true;
        muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        console.log("Muted state is" + mutedState);
    }
});

/**
 * Toggle the sound (muted or no muted)
 * after volume button clicked
 */

muteButton.addEventListener("click", function () {
    //muteButton.innerText = isMuted ? 'Unmute sound' : 'Mute sound';

    allSounds.forEach((sound) => {
        sound.muted = isMuted;
    });

    //if isMuted is true, set icon to MUTE and store MUTED value in local storage
    if (isMuted) {
        muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
        console.log("is muted = " + isMuted);
        localStorage.setItem("false", isMuted);
    } else {
        muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
        console.log("is muted = " + isMuted);
        localStorage.setItem("true", isMuted);
    }
});