var t = 30;
var timesUp
var correctAnswer = [];



$(document).ready(function() {
    $("#start").click(function() {
    var sTime = setInterval(function() {
        if(t != 0) {
            document.getElementById('timer').innerHtml = t +"";
            t = t-1;
        } else {

        }
    }, 1000);
});
});



//create a function for the answers
    function handleClick()
    {         
    var amountCorrect = 0;      
    //loop to check   
      for(var i = 1; i <= 45; i++) {
          var radios = document.getElementsByName('group'+i);
            for(var j = 0; j < radios.length; j++) {
                var radio = radios[j];
         if(radio.value == "right" && radio.checked) {
         amountCorrect++;
        }
    }
}          // if all 3 are answered corect         
     console.log("Correct Responses: " + amountCorrect);
     if (amountCorrect == 3) {
         console.log("you win")
         //then make the text disapear
         $('#boxText').hide();
         $('#gif').toggle();
         
         //display fun Gify
         //create an else for is not all are answered corect. 
         //make try again button apear
     }
}