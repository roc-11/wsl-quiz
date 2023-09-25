const highScoresList = document.getElementById('highScoresList');
//retrieve highscores from local storage (if they exist)
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

console.log(highScores);

//iterate through highScores and add <li> for each
highScoresList.innerHTML = highScores.map(score => {
    return `<li class="high-score">${score.name}: ${score.score}</li>`;
}).join("");