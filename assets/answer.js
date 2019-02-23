$(document).ready(function(){
    var point = 0;
    $("#submit").on('click',submit);
    function submit(){
        alert("The Answers for the questions are: True, False, Ture, False, Ture");
        alert("Your score is: " + point);
    }
    $("#q1t").on('click',click1);
    function click1(){
        $("#q1ta").css('color','green');
        point++;
        //console.log('hello');    
    }

    $('#q1f').on('click',click2);
    function click2(){
        $("#q1fa").css('color','red');
    }

    $("#q2t").on('click',click3);

    function click3(){
        $("#q2ta").css('color','red');
        //console.log('hello');    
    }

    $('#q2f').on('click',click4);
    function click4(){
        $("#q2fa").css('color','green');
        point++;
    }

    $("#q3t").on('click',click5);

    function click5(){
        $("#q3ta").css('color','green');
        point++;
        //console.log('hello');    
    }

    $('#q3f').on('click',click6);
    function click6(){
        $("#q1fa").css('color','red');
    }

    $("#q4t").on('click',click7);

    function click7(){
        $("#q4ta").css('color','red');
        //console.log('hello');    
    }

    $('#q4f').on('click',click8);
    function click8(){
        $("#q4fa").css('color','green');
        point++;
    }

    $("#q5t").on('click',click9);

    function click9(){
        $("#q5ta").css('color','green');
        point++;
        //console.log('hello');    
    }

    $('#q5f').on('click',click10);
    function click10(){
        $("#q5fa").css('color','red');
    }





})