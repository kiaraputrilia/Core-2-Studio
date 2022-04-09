$(document).ready(function() {

    $("#grass7").hover(function(){
    $("#img7").show();
    });
    $("#img7").mouseout(function(){
    $("#img7").hide();
    });
    
   
    // alert("[whatever-little-message-you-want]");
    
    $("#grass").hover(function(){
    $("#grass").css("color", "green");
    });
    $("#grass").mouseout(function(){
    $("#grass").css("color", "black");
    });
    
    })