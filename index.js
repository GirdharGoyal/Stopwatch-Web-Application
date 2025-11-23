let timer = false;
let hr = 0, min = 0, sec = 0;

function startStopwatch(){
    timer = true;
    run();
}

function pauseStopwatch(){
    timer = false;
}

function resetStopwatch(){
    timer = false;
    hr = min = sec = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("laps").innerHTML = "";
}

function lapTime(){
    let lapText = document.getElementById("display").innerHTML;
    let lapDiv = document.createElement("div");
    lapDiv.className = "lap";
    lapDiv.innerHTML = "Lap: " + lapText;
    document.getElementById("laps").appendChild(lapDiv);
}

function run(){
    if(timer){
        sec++;
        if(sec == 60){
            min++;
            sec = 0;
        }
        if(min == 60){
            hr++;
            min = 0;
        }

        let h = hr < 10 ? "0"+hr : hr;
        let m = min < 10 ? "0"+min : min;
        let s = sec < 10 ? "0"+sec : sec;

        document.getElementById("display").innerHTML = h + ":" + m + ":" + s;

        setTimeout(run, 1000);
    }
}