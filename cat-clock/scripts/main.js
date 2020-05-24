      //set work time & clock time
      let min_set = 25;

      var current = true;
      var togglebkg = '';
      var toggleboard = '';

      function work_cuttime(number){
        let worktime = document.getElementById('work_time').innerHTML;

        if(worktime==0){
        document.getElementById('min').innerHTML = worktime;
        }else{
        worktime --;
        document.getElementById('work_time').innerHTML = worktime;
        document.getElementById('min').innerHTML = worktime;
        }
        min_set = worktime;
      }

      function work_addtime(number){
        let worktime = document.getElementById('work_time').innerHTML;
        worktime ++;
        document.getElementById('work_time').innerHTML = worktime;
        document.getElementById('min').innerHTML = worktime;
        min_set = worktime;
      }

      //set break time
      function break_cuttime(number){
        let breaktime = document.getElementById('break_time').innerHTML;

        if(breaktime==0){
        document.getElementById('break_time').innerHTML = breaktime;         
        }else{
        breaktime --;
        document.getElementById('break_time').innerHTML = breaktime;
        }
      }

      function break_addtime(number){
        let breaktime = document.getElementById('break_time').innerHTML;
        breaktime ++;
        document.getElementById('break_time').innerHTML = breaktime;
      }

      //time start
      var myTimer;
      function time_start(){
        myTimer = setInterval(myClock,1000);
        document.getElementById('start').style.pointerEvents = 'none';
      }

      function myClock(){
        let min = document.getElementById('min').innerHTML;
        let sec = document.getElementById('sec').innerHTML;
        
          if(min==0 && sec==0){

            if(current==true){
              current = false;
              time_stop();
              alert('Time to Break!');
              min = document.getElementById('break_time').innerHTML;
              sec = '00';
              document.getElementById('sec').innerHTML = sec;
              document.getElementById('min').innerHTML = min;
              
              //style
              document.getElementById('icon').src = 'https://img.icons8.com/cotton/80/000000/sleeping-over-the-computer--v2.png';
              togglebkg = document.getElementsByClassName('container');
              togglebkg[0].style.backgroundColor = "rgb(255, 196, 118)";
              toggleboard = document.getElementsByClassName('board');
              toggleboard[0].style.backgroundColor = "#F1E0D6";
              toggleboard[0].style.boxShadow = "rgb(182, 140, 131)";
            }
              else if(current==false){
              current = true;
              time_stop();
              alert('Time to Work!');
              min = document.getElementById('work_time').innerHTML;
              sec = '00';
              document.getElementById('sec').innerHTML = sec;
              document.getElementById('min').innerHTML = min;

              //style
              document.getElementById('icon').src = 'https://img.icons8.com/android/66/000000/cat.png';
              togglebkg = document.getElementsByClassName('container');
              togglebkg[0].style.backgroundColor = "#BF988F";
              toggleboard = document.getElementsByClassName('board');
              toggleboard[0].style.backgroundColor = "#F1E0D6";
              toggleboard[0].style.boxShadow = "rgb(182, 140, 131)";
              }
            }
           
            else if(sec == 0){
            min --;
            sec == 59;
            document.getElementById('sec').innerHTML = 59;
            document.getElementById('min').innerHTML = min;
            }

            else if(0 < sec < 60){
            sec --;
            document.getElementById('sec').innerHTML = sec;
            }
      }
      
      //break
      function break_start(){
        myTimer = setInterval(breakClock,1000);
        document.getElementById('start').style.pointerEvents = 'none';
      }

      function breakClock(){
        let min = document.getElementById('break_time').innerHTML;
        let sec = '00';
        
          if(min==0 && sec==0){
            time_stop();
            alert('Time to work!');
            let min = document.getElementById('work_time').innerHTML;
            let sec = '00';
            }
           
            else if(sec == 0){
            min --;
            document.getElementById('sec').innerHTML = 59;
            document.getElementById('min').innerHTML = min;
            }

            else if(0 < sec < 60){
            sec --;
            document.getElementById('sec').innerHTML = sec;
            }
      }

      //time stop
      function time_stop(){
        clearInterval(myTimer);
        document.getElementById('start').style.pointerEvents = 'auto';
      }
      
      //time reset
      function time_reset(){
        clearInterval(myTimer);
        document.getElementById('min').innerHTML = parseInt(min_set);
        document.getElementById('sec').innerHTML = '00'; //還是覺得這有點誇張
        document.getElementById('start').style.pointerEvents = 'auto'; //可研究pointerEvents
      }
        

      
    window.onload = function() {
    //time set
    document.getElementById('work_cuttime').addEventListener('click',work_cuttime);
    document.getElementById('work_addtime').addEventListener('click',work_addtime);
    document.getElementById('break_cuttime').addEventListener('click',break_cuttime);
    document.getElementById('break_addtime').addEventListener('click',break_addtime);
    
    //button set
    document.getElementById('start').addEventListener('click',time_start);
    document.getElementById('pause').addEventListener('click',time_stop);
    document.getElementById('reset').addEventListener('click',time_reset);

    };
