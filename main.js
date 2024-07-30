document.addEventListener('DOMContentLoaded', function () {
    //GETS THE HTML ELEMENTS BY THEIR IDS
    let input = document.getElementById('timeInput');
    let button = document.getElementById('startButton');
    let timerDisplay = document.getElementById('timerDisplay');
    //DECLARES THE VARIABLE TIMER TO HOLD THE INTERVAL TIMER
    let timer;

    //FUNCTION EXECUTES WHEN THE BUTTON IS CLICKED
    button.addEventListener('click', function () {
        //VARIABLE timeLeft IS THE VALUE TYPED IN THE INPUT TRIMMED, PARSEINT TO MAKE SURE THE NUMBER IS BASE 10 (DECIMAL)
        let timeLeft = parseInt(input.value.trim(), 10);

        //MAKES SURE THE VALUE FROM THE INPUT IS AN ACTUAL NUMBER AND IF IT IS GREATER THAN 0
        if (isNaN(timeLeft) || timeLeft <= 0) {
            alert('Please enter a valid number of seconds.');
            //RETURN MAKES THE FUNCTION END EARLY IF REQUIREMENTS NOT MET
            return;
        }

        //CLEARS THE TIMER
        clearInterval(timer);

        //TIMER WILL BE A NEW INTERVAL THAT RUNS EVERY SECOND (1000 milliseconds)
        timer = setInterval(function () {
            //WILL RUN UNTIL THE TIMER HITS 0
            if (timeLeft > 0) {
                //DISPLAYS THE TIME LEFT ON THE SCREEN
                timerDisplay.textContent = timeLeft;
                //DECREMENTS TIME LEFT BY ONE SECOND
                timeLeft--;
            //WILL RUN THEN TIMER HITS 0
            } else {
                //CLEARS THE TIMER
                clearInterval(timer);
                //DISPLAYS A MESSAGE SAYING THE TIME'S UP
                timerDisplay.textContent = "Time's up!";
            }
            //SETINTERVAL FUNCTION WILL RUN EVERY 1000 MILLISECONDS (1 second)
        }, 1000);
    });
});
