var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var startBtn = document.getElementById('start');
var newQues = document.getElementById('question-title')

//document.getElementById("start-screen").onclick = function() {startQuiz()};

// timer
function countdown ( ){
  var timeleft = 60;
  var downloadTimer = setInterval(function function1(){
  document.getElementById("countdown").innerHTML = timeleft + 
  "&nbsp"+"seconds remaining";
  timeleft -= 1;
  if(timeleft <= 0){
      clearInterval(downloadTimer);
      document.getElementById("countdown").innerHTML = "Time is up!"
  }
  }, 1000);

}

function startQuiz (){
  

}


// TODO: Create an array with five question objects
  var questions= [
      { q: `It's over Anakin I have the ______.`,  
        a: ["lightsaber", "high ground", "force", "deathstar"], 
        correct: 'b'},

        { q: `Which of the following characters was NOT played by Mike Myers in Austin Powers?.`,  
        a: ["Austin Powers", "Dr. Evil", "Fat Bastard", "Number Two"], 
        correct: 'b'},

        { q: `It's over Anakin I have the ______.`,  
        a: ["lightsaber", "high ground", "force", "deathstar"], 
        correct: 'b'},

        { q: `It's over Anakin I have the ______.`,  
        a: ["lightsaber", "high ground", "force", "deathstar"], 
        correct: 'b'},

        { q: `It's over Anakin I have the ______.`,  
        a: ["lightsaber", "high ground", "force", "deathstar"], 
        correct: 'b'},

        { q: `It's over Anakin I have the ______.`,  
        a: ["lightsaber", "high ground", "force", "deathstar"], 
        correct: 'b'},

        { q: `It's over Anakin I have the ______.`,  
        a: ["lightsaber", "high ground", "force", "deathstar"], 
        correct: 'b'},

        { q: `It's over Anakin I have the ______.`,  
        a: ["lightsaber", "high ground", "force", "deathstar"], 
        correct: 'b'},
        { q: `It's over Anakin I have the ______.`,  
        a: ["lightsaber", "high ground", "force", "deathstar"], 
        correct: 'b'}
  ]

 
var score = 0;
var userAnswer = "";
var questionBox = document.getElementById('questions');
var aSelection = document.getElementById('aButton');
var bSelection = document.getElementById('bButton');
var cSelection = document.getElementById('cButton');
var dSelection = document.getElementById('dButton');

var soundCorrect = "";
var soundWrong = "";

displayQuestion = function (){ //var startScreen hide, call timer, call getQuestion. no other logic in playGame- else goes into displYQuestion or compareAnswers
     //have start button that playGame(); and is hidden afterwards 

   var questionNumber = 0;
   if (questionNumber < questions.length){
       var currentQuestion = document.createElement('h3');
       currentQuestion.classList.add('myButtons');
       currentQuestion.textContent = questions[questionNumber].q;
       questionBox.appendChild(currentQuestion);

       for(i = 0; i < questions[i].a.length; i++){
           var answerChoices = document.createElement('button');
           answerChoices.classList.add('btn-success', 'btn', 'button')  //get button id's/value taskinator module edit and delete id's?
           answerChoices.setAttribute("id", (i + 1));  //asigns unique ID to each button 
           answerChoices.innerHTML = ((i+1) + ". " + questions[questionNumber].a[i]);
           currentQuestion.appendChild(answerChoices);
           console.log(questionNumber);
           console.log(i);
       }
   }

}

startBtn.onclick = countdown;


// playGame = function(){ //get question and display it on the screen  //if{ no more questions, end quiz and show score.} else{

//     for (i=0; i < questions.length; i++){
//       var newQuestion= questions[i];
//       var correctAnswer = newQuestion.correct;




//         questionBox.innerHTML = newQuestion.q; 

          // $("mybuttons").click(function(){
          //  //$("mybuttons").on("click", "button", function(){
           
          //  var userAnswer = $(this)
          //   .attr("id");
          //   console.log(userAnswer);
    
          //   if (userAnswer === correctAnswer){
          //       console.log(userAnswer, "Correct", index);
          //       score++;
          //   }
          //   else {
          //       console.log(userAnswer, 'incorrect');
          //   }
          //   });


  