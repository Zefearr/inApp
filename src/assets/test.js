function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex]; 
};

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionIndex; 
};

Quiz.prototype.guess = function(answer) {
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
};

// question.js

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;

}

Question.prototype.correctAnswer = function(choice) {
    return choice === this.answer;
};

// app.js

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populateQuestions();
    };
}

function showProgess() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var el = document.getElementById("progress");
    el.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var resultHtml = "<h1>Result<h1>";
    resultHtml += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = resultHtml;
}

var questions = [
    new Question("Which is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C"),
    new Question("Which language is used for styling web pages", ["HTML", "CSS", "JQuery", "XML"], "CSS"),
    new Question("There are _ main components of object oriented programing", ["1", "6", "2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Javascript", "Phython", "All"], "All")
];

var quiz = new Quiz(questions);

function populateQuestions() {
  if (quiz.isEnded()) {
      showScores();
  } else {
      // show question
      var questionElement = document.getElementById("question");
      questionElement.innerHTML = quiz.getQuestionIndex().text;

      // show choices
      var choices = quiz.getQuestionIndex().choices;
      for (var i = 0; i < choices.length; i++) {
          var choiceElement = document.getElementById("choice" + i);
          choiceElement.innerHTML = choices[i];
          guess("btn" + i, choices[i]);
      }

      showProgess();
  }
}

populateQuestions(); 