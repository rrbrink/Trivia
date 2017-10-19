var t = 30;
var timesUp
var corenctAnswer = [];



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