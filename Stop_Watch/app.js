var hourHead = document.getElementById('hour');
var minHead = document.getElementById('min');
var secHead = document.getElementById('sec');
var msHead = document.getElementById('ms');


var hour = 0;
var min = 0;
var sec = 0;
var ms= 0;

var interval;



function timer(){
    ms ++;
    msHead.innerHTML = ms;
    if(ms >= 100){
        sec ++;
        secHead.innerHTML = sec;
        ms = 0;
        if(sec >= 60){
            min ++;
            minHead.innerHTML = min;
            sec = 0;
            if(min >= 60){
                hour ++;
                hourHead.innerHTML = hour;
                min = 0;
            }
            
        }
    }
}


function Start(){
    interval = setInterval(timer, 10)
    document.getElementById("myBtn").disabled = true;
}

function Stop(){
    clearInterval(interval)
    document.getElementById("myBtn").disabled = false;
}

function Reset() {
    clearInterval(interval);
    hour = 0;
    min = 0;
    sec = 0;
    ms = 0;
    hourHead.innerHTML = hour;
    minHead.innerHTML = min;
    secHead.innerHTML = sec;
    msHead.innerHTML = ms;
    document.getElementById("myBtn").disabled = false;
}