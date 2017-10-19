<div class="text-box">
<div class="row">
    <div class="col-lg-4">
         <label class="radio-inline">
            <input id="a1" type="radio" name="optradio">
         </label>
         <div class="col-lg-4">
                <label class="radio-inline">
                        <input id="a1" type="radio" name="optradio">
                     </label>
And another
var counter = 30;
var timeleft = 60;
//timer function count down

function setup(){

var timer = select("#timer");
timer.html(timeleft - counter);

function timeIt() {
counter--;
timer.html(timecounter);

}
setInterval(timeIt, 1000) ;
}



Notes for trivia
Save this just in case 

Var askquestion = document.getElementById("question")
      askQuestion.appendChild(questions[0]);
      console.log(askQuestion);
      console.log(displayQuestion);
Another
function renderQuestion(questions, spawnQuestion){
        var charDiv = $("<div class='questions' data='" + questions + "'>");
        var firstq = $("<div class='question'>").text(questions[0]);
        console.log(renderQuestion);
        charDiv.append(firstq);
        $(spawnQuestion).append(charDiv);
Another

$(document).ready(function () {
        $("#startBtn").function(){
            $("p").prepend ("<b>Prepended text</b>. ");

        }
            
        

    })
