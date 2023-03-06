const questions = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["string", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question: "The condition in an if/else statement is enclosed with _______.",
    choices: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    answer: "parenthesis",
  },
  {
    question: "Arrays in JavaScript can be used to store _______.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question: "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["comma","curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },  
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript","terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

// Start the quiz when the Start button is clicked
const startButton = document.getElementById("start");
startButton.addEventListener("click", function() {
  startQuiz();
});

function startQuiz() {
    // Set the timer for the quiz
    let timeLeft = 75;
    const timerEl = document.getElementById("timer");
    const timerId = setInterval(function() {
        timeLeft--;
        timerEl.textContent = `Time left: ${timeLeft}`;
        if (timeLeft <= 0) {
            clearInterval(timerId);
            endQuiz();
        }
    }, 1000);

    // Display the first question
    let currentQuestion = 0;
    displayQuestion();
    
    // Display the current question and choices
    function displayQuestion() {
        let question = questions[currentQuestion].question;
        let choices = questions[currentQuestion].choices;
    
      document.getElementById('question').textContent = question;
      document.getElementById('answer1').textContent = choices[0];
      document.getElementById('answer2').textContent = choices[1];
      document.getElementById('answer3').textContent = choices[2];
      document.getElementById('answer4').textContent = choices[3];
    
      document.getElementById('questions').style.display = "block";
      document.getElementById('question').style.display = "block";
      }

};




