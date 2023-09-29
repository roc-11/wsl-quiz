/* Quiz Logic adapted from James Q Quick YouTube tutorial vhttps://www.youtube.com/watch?v=zZdQGs62cR8&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=3 */

const question = document.getElementById('question');
// convert choices HTML collection to an array 
const choices = Array.from(document.getElementsByClassName('choice-text'));

//for the HUD
const progressText = document.getElementById('progress-text');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progress-bar-full');


let currentQuestion = {};
// create a short delay after player answers
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//for the loading icon
const loader = document.getElementById('loader');
const game = document.getElementById('game');

//for the sound 
const correctSound = new Audio('assets/audio/correct-answer.mp3');
const inCorrectSound = new Audio('assets/audio/wrong-answer.mp3');
const allSounds = [
    correctSound, inCorrectSound
];


// each quiz question will be an object from the questions array 
let questions = [
    {
        question: "Who are the current Women's Super League Champions?",
        choice1: "Chelsea",
        choice2: "Arsenal",
        choice3: "Manchester United",
        choice4: "Aston Villa",
        answer: 1
    },
    {
        question: "In what year was the WSL established?",
        choice1: "1999",
        choice2: "2008",
        choice3: "2010",
        choice4: "2012",
        answer: 3
    },
    {
        question: "Who was the WSL top goalscorer in the 2022/23 season?",
        choice1: "Sam Kerr",
        choice2: "Beth Mead",
        choice3: "Vivianne Miedema",
        choice4: "Rachel Daly",
        answer: 4
    },
    {
        question: "How many teams currently compete in the WSL?",
        choice1: "10",
        choice2: "12",
        choice3: "14",
        choice4: "16",
        answer: 2
    },
    {
        question: "How many WSL league titles do Chelsea hold?",
        choice1: "6",
        choice2: "3",
        choice3: "1",
        choice4: "4",
        answer: 1
    },
    {
        question: "Who holds the record for most WSL appearances?",
        choice1: "Jill Scott",
        choice2: "Sophie Ingle",
        choice3: "Kerys Harrop",
        choice4: "Steph Houghton",
        answer: 3
    },
    {
        question: "Who is Arsenal's manager?",
        choice1: "Jonas Eidevall",
        choice2: "Emma Hayes",
        choice3: "Marc Skinner",
        choice4: "Gareth Keith Taylor",
        answer: 1
    },
    {
        question: "Who holds the overall record for most WSL goals scored?",
        choice1: "Bethany England",
        choice2: "Vivianne Miedema",
        choice3: "Ellen White",
        choice4: "Fran Kirby",
        answer: 2
    },
    {
        question: "Which of these teams won the FA WSL 2013 title?",
        choice1: "Tottenham",
        choice2: "Chelsea",
        choice3: "Arsenal",
        choice4: "Liverpool",
        answer: 4
    },
    {
        question: "Which of these four players is the oldest to register an FA WSL appearance?",
        choice1: "Becky Easton",
        choice2: "Fara Williams",
        choice3: "Jill Scott",
        choice4: "Natasha Harding",
        answer: 1
    }

];

//constants 
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = questions.length;

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processes
 */
startGame = () => {
    // ensure score & questionCounter is reset
    questionCounter = 0;
    score = 0;
    // get full copy of questions array
    availableQuestions = [...questions];

    getNewQuestion();

    // loader icon before question displayed
    game.classList.remove('hidden');
    loader.classList.add('hidden');
};

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processes
 */
getNewQuestion = () => {

    //if no more questions in array, game/quiz is over
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //store quiz score locally to make available for end screen
        localStorage.setItem("mostRecentScore", score);
        //got to the end page. Quiz Over
        return window.location.href = 'end.html';
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //update the progress bar (as a %)
    //progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    //progressBarFull.innerHTML = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

    setTimeout(loadingProgressBar, 800);

    //Populate the question - get a random question from the array
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    //to populate the choices
    choices.forEach((choice) => {
        // return number attribute from array
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    //remove the question just used from the array
    //prevent repetition of questions
    availableQuestions.splice(questionIndex, 1);

    // after loading question, allow user to answer
    acceptingAnswers = true;

};

/* Event Listener to check which answer clicked against correct answer */
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        //console.log(e.target);

        //if not ready to answer, ignore click 
        if (!acceptingAnswers) return;

        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        //apply correct / incorrect class to animate user selection
        const classToApply =
            selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
            correctSound.play();
        } else {
            inCorrectSound.play();
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            //once answer, get next question
            getNewQuestion();
        }, 1000);

    });
});

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processes
 */
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};

startGame();

/**
 * Lollipop loading progress bar
 * https://codepen.io/dbilanoski/pen/NZmOJR
 */

function loadingProgressBar() {
    document.querySelectorAll(".bar").forEach(function (current) {
        let startWidth = 0;
        const endWidth = current.dataset.size;

        //progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
        //progressBarFull.innerHTML = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
        /* 
        setInterval() time sholud be set as trasition time / 100. 
        In our case, 2 seconds / 100 = 20 milliseconds. 
        */
        const interval = setInterval(frame, 20);

        function frame() {
            if (startWidth >= endWidth) {
                clearInterval(interval);
            } else {
                startWidth++;
                current.style.width = `${((questionCounter - 1) / MAX_QUESTIONS) * 100}%`;
                current.firstElementChild.innerText = `${((questionCounter - 1) / MAX_QUESTIONS) * 100}%`;
            }
        }
    });
}

//setTimeout(loadingProgressBar, 1000);
