 $(document).ready(function(){
    $("#start").click(function(){
        //console.log("hello");
        var timecount=60;
        $("#start").on('click',start);
        $("#submit").on('click',finish);
        $("#reset").on('click',restart);
        function start(){
            counter = setInterval(countdown, 1000);
        }
        

        function countdown(){
            timecount--;
            $("#timeRemain").html("Time Remain: " + timecount + "s");
            if(timecount == 0){
                alert("Game OVER!");
                restart();
            }
        }

        // function submit(){
        //     alert("The Answers for the questions are: True, False, Ture, False, Ture");
        // }

        function stop(){
            clearInterval(counter)
        }

        function finish(){
            timecount = 1;
            clearInterval(counter);
            submit();
        }

        function restart(){
            timecount=60;
            start();
        }

        



        start();
    

        // function stop(){
        //     clearInterval()
        // }
    });

 })
