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
    let noScoreRowOne = highScoresList.insertRow(0);
    console.log(noScoreRowOne);
    let cell1 = noScoreRowOne.insertCell(0);
    cell1.classList.add("noHighScores");
    let newText = document.createTextNode("No scores yet! Click play to get on the leaderboard!");
    // cell1.innerHTML('No scores yet!');
    cell1.appendChild(newText);
    console.log(cell1);
    //highScoreContainer.innerHTML = `<p>No high scores yet! <br>Click PLAY to try to get on the leaderboard!</p>`;
} else {

    //iterate through highScores and add <li> for each
    highScoresList.innerHTML = highScores.map(score => {
        //return `<li class="high-score">${score.name}: ${score.score}</li>`;
        return `<tr class="high-score hover">
                    <td class='number'><img class="trophy-svg" src="assets/images/trophy-svg.svg"></td>
                    <td class='name'>${score.name}</td>
                    <td class='point'>${score.score}</td> 
                    </tr>`;
    }).join("");

    /*let firstRow = highScoresList.rows[0];
    firstRow.classList.remove("hover");
    firstRow.classList.add("firstRowHover"); */
}