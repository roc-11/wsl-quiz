const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

//convert array to JSON (everything in local storage is a string)
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

//disable save button if username value empty / falsy
//enable button to submit if there is text in the username input
username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    //prevent posting to a different page
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    //add new score to the highscore array
    highScores.push(score);

    //sort list, check highest, save top 5
    highScores.sort((a, b) => b.score - a.score);

    highScores.splice(5);

    //update the highscores 
    localStorage.setItem('highScores', JSON.stringify(highScores));
    //save score and return home once highscore saved
    window.location.assign('index.html');

    console.log(highScores);
};

//for the sound 
const playAgainQuizSound = new Audio('assets/audio/whistle-sound.mp3');
const playAgain = document.getElementById('playAgain');
function PlayAgainSound() {
    playAgainQuizSound.play();
    setTimeout(function () {
        window.location.href = 'game.html';
    }, playAgainQuizSound.duration * 80);
}