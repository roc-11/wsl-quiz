const highScoresList = document.getElementById('highScoresList');
//retrieve highscores from local storage (if they exist)
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

//for the sound 
const playQuizSound = new Audio('assets/audio/whistle-sound.mp3');
function PlaySound() {
    playQuizSound.play();
    setTimeout(function () {
        window.location.href = 'game.html';
    }, playQuizSound.duration * 80);
}

//Provide user with feedback if there are no high scores yet
if (highScores.length === 0) {

    let noScoreRowOne = highScoresList.insertRow(0);
    let cell1 = noScoreRowOne.insertCell(0);
    cell1.classList.add("noHighScores");
    let newText = document.createTextNode("No scores yet! Click play to get on the leaderboard!");
    cell1.appendChild(newText);

} else {

    //iterate through highScores and add <li> for each
    highScoresList.innerHTML = highScores.map(score => {
        return `<tr class="high-score hover">
                    <td class='number'><img class="trophy-svg" src="assets/images/trophy-svg.svg"></td>
                    <td class='name'>${score.name}</td>
                    <td class='point'>${score.score}</td> 
                    </tr>`;
    }).join("");
}