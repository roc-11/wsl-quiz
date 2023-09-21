const question = document.getElementById('question');
// convert choices HTML collection to an array 
const choices = Array.from(document.getElementsByClassName('choice-text'));

let currentQuestion = {};
// create a short delay after player answers
let acceptingAnswers = true;
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