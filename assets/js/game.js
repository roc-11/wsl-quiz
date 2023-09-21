/* Quiz Logic adapted from James Q Quick YouTube tutorial vhttps://www.youtube.com/watch?v=zZdQGs62cR8&list=PLB6wlEeCDJ5Yyh6P2N6Q_9JijB6v4UejF&index=3 */

const question = document.getElementById('question');
// convert choices HTML collection to an array 
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
// create a short delay after player answers
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// each quiz question will be an object from the questions array 
let questions = [
    {
        question: "Question 1?",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 1
    },
    {
        question: "Question 2?",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 3
    },
    {
        question: "Question 3?",
        choice1: "1",
        choice2: "2",
        choice3: "3",
        choice4: "4",
        answer: 4
    }
];

//constants 
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

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
};

/**
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processes
 */
getNewQuestion = () => {

    //if no more questions in array, game/quiz is over
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        //got to the end page. Quiz Over
        return window.location.assign('/end.html');
    }

    questionCounter++;

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

        //once answer, get next question
        getNewQuestion();
    });
});

startGame();
