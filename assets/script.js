// 
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function(){
  return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function (answer){
  if(this.getQuestionIndex().isCorrectAnswer(answer)){
    this.score++;
  }

  this.questionIndex++;
}

Quiz.prototype.isEnded = function(){
  return this.questionIndex === this.questions.length;
}


function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice){
  return this.answer === choice;
}


function populate(){
  if(quiz.isEnded()){
    showScores();
  }
  else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    //show answer choices
    var choices = quiz.getQuestionIndex().choices;
    for(var i = 0; i < choices.length; i++){
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i]; 
      guess("btn" + i, choices[i]);
    }
      // show correct! or wrong!
      showProgress();
  }
};

// 
function guess(id, guess){
  var button = document.getElementById(id);
  button.onclick = function(){
    quiz.guess(guess);
    populate();
  }
};

// show progress
function showProgress(){
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress"); 
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

//show score
function showScores(){
  localStorage.setItem("lastname", "Smith");
  var lastName = localStorage.getItem("lastname");
  console.log(lastName);
  var gameOverHTML = "<h1>All done!</h1>";
  gameOverHTML += "<h2 id='score'>Your final score is " + quiz.score + "." + "</h2>" + "<form><input type= 'text'></form>" + "<form><input type= 'submit' value='submit'></form>" + "<h2>" + lastName + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

// if (typeof(Storage) !== "undefined") {
//   // Store
//   localStorage.setItem("lastname", "Smith");
//   // Retrieve
//   document.getElementById("result").innerHTML = localStorage.getItem("lastname");
// } else {
//   document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
// };

// show input field
//   var enterInitials = document.getElementById("EnterInitials");
//   enterInitials.setAttribute("type", "text");
//   document.body.appendChild(enterInitials);


// array to create questions
var questions = [
  new Question("Commonly used data types DO Not Include:", ["1. Strings", "2.Booleans", "3. Alerts", "4. Numbers"], "3. Alerts"),
  new Question("The condition in an if / else statement is enclosed with _____.", ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"], "3. Parenthesis"),
  new Question("Arrays in JavaScript can be used to store _______.", ["1. Numbers and Srings", "2. Other arrays", "3. Booleans", "4. All of The Above"], "4. All of The Above"),
  new Question("String values must be enclosed within ______ when being assigned to variables.", ["1.Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"], "4. Parenthesis"),
  new Question("A very useful tool use during development and debugging for printing content to the debugger is:", ["1. JavaScript", "2. Terminal / Bash", "3. For Loops", "4. console.log"], "4. console.log")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();