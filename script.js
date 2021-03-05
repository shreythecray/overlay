// Init
var $ = jQuery;
var animationTime = 10,
    days = 10;
 
$(document).ready(function(){

    // timer arguments: 
    //   #1 - time of animation in mileseconds, 
    //   #2 - days to deadline

    $('#progress-time-fill, #death-group').css({'animation-duration': animationTime+'s'});

    var deadlineAnimation = function () {
        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '1.5s'});
        },0);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '1s'});
        },4000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.7s'});
        },8000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.3s'});
        },12000);

        setTimeout(function(){
            $('#designer-arm-grop').css({'animation-duration': '0.2s'});
        },15000);
    };

    function timer(totalTime, deadline) {
        //deadline: total number of days we have
        //total time: total number of seconds we have
        var time = totalTime * 1000; //convert seconds to milliseconds
        var dayDuration = time / deadline; //calculates fraction of time per day
        //var actualDay = deadline; //time counter we are decreasing
        var actualTime = totalTime;

        var timer = setInterval(decrementTime, 1000);

        function decrementTime() {
            --actualTime;
            $('.deadline-days .day').text(actualTime);
            if (actualTime == 0) {
                clearInterval(timer);
                $('.deadline-days .day').text(totalTime);
            }
        }

        // function countTime() {
        //     --actualDay;
        //     $('.deadline-days .day').text(actualDay);

        //     if (actualDay == 0) {
        //         clearInterval(timer);
        //         $('.deadline-days .day').text(deadline);
        //     }
        // }

    }

    var deadlineText = function () {
        var $el = $('.deadline-days');
        var html = '<div class="mask-red"><div class="inner">' + $el.html() + '</div></div><div class="mask-white"><div class="inner">' + $el.html() + '</div></div>';
        $el.html(html);
    }

    deadlineText();

    deadlineAnimation();
    timer(animationTime, days);

    setInterval(function(){
        timer(animationTime, days);
        deadlineAnimation();

        console.log('begin interval', animationTime * 1000);

    }, animationTime * 1000);

});