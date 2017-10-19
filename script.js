//variables
// need to create a variable for the question that will be changing
//timer variables
//questions is going to be an array we will go in order from 0-5
var questions = {
    "quiz questions": {
    q1: "On Sunday, in Columbus Ohio, it is illegal to sell what?",
    q2: "What is banned in public places in Florida after 6pm?",
    q3: "In Alaska, it’s legal to shoot bears but illegal to do what?",
    q4: "On Sunday, in Columbus Ohio, it is illegal to sell what?", 
    q5: "In St Louise Missouri, it is illegal for a fireman to rescue who?"
}
};
//q stands for answers to the question each array will be the options for the question (only one answer in each q is correct)
var a1 = ["blueberry pie", "cornflakes", "onions", "lager beer"];
var a2 = [];
var a3 = [];
var a4 = [];
var a5 = [];
//there will be 2 timers one that is for the question and one to bring the next question
var timerQuestion
var timerNext
//submit variable will be the button that submits the answer
var submit
//timer variables
var counter = 30;
var t;
var isTimerOn = false;

//we will have a start function the begins the game
$(document).ready(function() {
    $('#startBtn').click(function() {
        renderQuestion();
        if(!isTimerOn){
            isTimerOn = true;
            countdown();
        }
        function countdown() {
            document.getElementById("txt").value = counter;
            counter--;
            t = setTimeout("countdown();", 1000);

        }
        
        
      
     
      
    
        });
    }); 
    // need to create a function that places my question string in divwith the class of question
    //try to create the helpful table ryan showed you
        function renderQuestion(){
        var first = document.createElement("p") ;
        first = innerHTML = questions.q1;
        $(".question").after(questions);
        console.log(renderQuestion);
        console.log(question);

    }
    function renderQuestion(questions, spawnQuestion){
        var charDiv = $("<div class='questions' data='" + questions + "'>");
        var firstq = $("<div class='question'>").text(questions[0]);
        console.log(renderQuestion);
        charDiv.append(firstq);
        $(spawnQuestion).append(charDiv);

   
    };
      
  
    


// it will maybe act as a reset aswell
// the next function will 
