const highScoresList = document.getElementById('highScoresList');
//retrieve highscores from local storage (if they exist)
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
//const highScoreContainer = document.getElementById('highScoresContainer');
let rankingList = highScores.length;
console.log(highScores);

//Provide user with feedback if there are no high scores yet
if (highScores.length === 0) {
    //alert('no scores yet');

    //NEED TO SORT THIS FOR NEW TABLE !!!
    var para = document.createElement("p");
    var node = document.createTextNode("No high scores yet!");
    para.appendChild(node);
    highScoreContainer.appendChild(para);
    //highScoreContainer.innerHTML = `<p>No high scores yet! <br>Click PLAY to try to get on the leaderboard!</p>`;
} else {

    //iterate through highScores and add <li> for each
    highScoresList.innerHTML = highScores.map(score => {
        //return `<li class="high-score">${score.name}: ${score.score}</li>`;
        return `<tr class="high-score">
                    <td class='number'>'to do'</td>
                    <td class='name'>${score.name}</td>
                    <td class='point'>${score.score}</td> 
                    </tr>`;
    }).join("");
}