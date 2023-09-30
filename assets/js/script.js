// for the mobile navigation bar
const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');

navToggle.addEventListener('click', () => {
    const isVisible = primaryNav.getAttribute('data-visible');

    if (isVisible === 'false') {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (isVisible === 'true') {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});

// for the rules modal 

const modal = document.querySelector('.modal');
const openModal = document.querySelector('.open-modal');
const closeModal = document.querySelector('.close-modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});

closeModal.addEventListener('click', () => {
    modal.close();
});

//for the sound 
const playQuizSound = new Audio('assets/audio/whistle-sound.mp3');
const playButtonSound = new Audio('assets/audio/button-sound.mp3');
const playButton = document.getElementById('play-btn');
function PlaySoundWhistle() {
    playQuizSound.play();
    setTimeout(function () {
        window.location.href = 'game.html';
    }, playQuizSound.duration * 80);
}

let isMuted = false;
// jQuery used to demonstrate usage, minimal usage
$("#mute-button").click(toggleMute);
/**
 * Toggle the sound (muted or no muted)
 * after volume button clicked
 */
function toggleMute() {
    isMuted = !isMuted;
    const muteButton = document.getElementById("mute-button");
    muteButton.innerText = isMuted ? 'Unmute sound' : 'Mute sound';

    allSounds.forEach((sound) => {
        sound.muted = isMuted;
    });
    if (isMuted) {
        muteButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        muteButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
} 