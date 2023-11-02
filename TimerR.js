
        let startButton = document.getElementById('start');

        let stopButton = document.getElementById('stop');

        let resetButton = document.getElementById('reset');

          
//Setting variables to NULL

        let hour = 00;

        let minute = 00;

        let second = 00;

        let count = 00;

          

        startButton.addEventListener('click', function () {

            timer = true;
            interval = setInterval(startWatch, 10);
            startButton.innerHTML='Start';
            startButton.disabled = true;
            
            });

        stopButton.addEventListener('click', function () {

            clearInterval(interval);
            startButton.disabled = false;
            startButton.innerHTML='Resume';

        });

        resetButton.addEventListener('click', function () {

            clearInterval(interval);
            startButton.innerHTML='Start';

            hour = 0;

            minute = 0;

            second = 0;

            count = 0;

            document.getElementById('hour').innerHTML = "00";

            document.getElementById('minute').innerHTML = "00";

            document.getElementById('second').innerHTML = "00";

            document.getElementById('count').innerHTML = "00";
            
            

        });

//Start Timer Funtion

        function startWatch() {
         

            if (timer) {

                count++;

                if (count == 100) {

                    second++;

                    count = 0;

                }

                if (second == 60) {

                    minute++;

                    second = 0;

                }

                if (minute == 60) {

                    hour++;

                    minute = 0;

                    second = 0;

                }

                let hourString = hour;

                let minuteString = minute;

                let secondString = second;

                let countString = count;

                if (hour < 10) {

                    hourString = "0" + hourString;

                }

                if (minute < 10) {

                    minuteString = "0" + minuteString;

                }

                if (second < 10) {

                    secondString = "0" + secondString;

                }

          

                if (count < 10) {

                    countString = "0" + countString;

                }

                document.getElementById('hour').innerHTML = hourString;

                document.getElementById('minute').innerHTML = minuteString;

                document.getElementById('second').innerHTML = secondString;

                document.getElementById('count').innerHTML = countString;
                
                

            }

        }