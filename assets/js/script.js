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
    question:
      "String values must be enclosed within _____ when being assigned to variables.",
    choices: ["comma", "curly brackets", "quotes", "parenthesis"],
    answer: "quotes",
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["Javascript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

// Start the quiz when the Start button is clicked
const startButton = document.getElementById("start");
startButton.addEventListener("click", function () {
  startQuiz();
});

function startQuiz() {
  // Set the timer for the quiz
  document.getElementById("intro").style.display = "none";
  let timeLeft = 75;
  const timerEl = document.getElementById("timer");
  const timerId = setInterval(function () {
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

    document.getElementById("question").textContent = question;
    document.getElementById("answer1").textContent = choices[0];
    document.getElementById("answer2").textContent = choices[1];
    document.getElementById("answer3").textContent = choices[2];
    document.getElementById("answer4").textContent = choices[3];

    document.getElementById("questions").style.display = "block";
  }

// Check answer and switch to next question
function checkAnswer(event) {
    let selectedChoice = event.target;
    let feedbackEl = document.getElementById('feedback');
    let answer = questions[currentQuestion].answer;
  
    if (selectedChoice.textContent === answer) {
      // The answer is correct
      feedbackEl.textContent = 'Correct!';
    } else {
      // The answer is wrong
      feedbackEl.textContent = 'Wrong!';
      timeLeft -= 10;
      if (timeLeft < 0) {
        timeLeft = 0;
      }
      document.getElementById('timer').textContent = "Time left: " + timeLeft;
    }
  
    // Switch to next question or end quiz
    if (currentQuestion < questions.length - 1 && timeLeft > 0) {
      currentQuestion++;
      displayQuestion();
    } else {
      endQuiz();
    }
  }

  // Add event listeners to answer buttons
  document.getElementById('answer1').addEventListener('click', checkAnswer);
  document.getElementById('answer2').addEventListener('click', checkAnswer);
  document.getElementById('answer3').addEventListener('click', checkAnswer);
  document.getElementById('answer4').addEventListener('click', checkAnswer);

  function endQuiz() {
    clearInterval(timerId);
    document.getElementById('score').textContent = timeLeft;
    document.getElementById("questions").style.display = "none";
    document.getElementById("finalscore").style.display = "block";
    let submitForm = document.getElementById("submit-score");
    let initialsInput = document.getElementById('initials');
    submitForm.addEventListener('click', function(event) {
        event.preventDefault();
        document.getElementById("finalscore").style.display = "none";
        var initials = initialsInput.value.trim();
        if (initials) {
          var highScores = JSON.parse(localStorage.getItem('highScores')) || [];
          highScores.push({ initials: initials, score: timeLeft });
          localStorage.setItem('highScores', JSON.stringify(highScores));
          displayHighScores();
        } else {
          displayHighScores();
        }
      });
      
}

};

// Display high scores
function displayHighScores() {
    document.getElementById("intro").style.display = "none";
    let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
    let highScoresList = document.getElementById('score-list');
    highScoresList.innerHTML = "";
    for (let i = 0; i < highScores.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent = highScores[i].initials + " - " + highScores[i].score;
      highScoresList.appendChild(listItem);
    }
    document.getElementById('highscores').style.display = "block";

    let clearHighScoresBtn = document.getElementById('clearscores');
    // Clear high scores
    clearHighScoresBtn.addEventListener('click', function() {
        localStorage.removeItem('highScores');
        displayHighScores();
    });
    let goBackBtn = document.getElementById('goback'); 
      // Go back button
      goBackBtn.addEventListener('click', function() {
        location.reload();
      });
  }



