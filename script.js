let hours=0, minutes=0, seconds=0, milliseconds=0;
let interval;
let running=true;

const startstop=document.getElementById('startstop');
const reset=document.getElementById('Reset');
const Laps=document.getElementById('Lap');
const laplist=document.getElementById('laplist');

function startwatch(){
    interval=setInterval(()=>{
        milliseconds++;
        if(milliseconds===100){
            milliseconds=0;
            seconds++;
        }
        if(seconds===60){
             seconds=0;
             minutes++;
        }
        if(minutes===60){
            minutes=0;
            hours++;
        }
        updatedisplay();
    },10)
}

function stopwatch(){
    clearInterval(interval);
}

function updatedisplay(){
    document.getElementById('hours').textContent= formate(hours);
    document.getElementById('minutes').textContent= formate(minutes);
    document.getElementById('seconds').textContent= formate(seconds);
    document.getElementById('miliseconds').textContent= formate(milliseconds);
}

function formate(time){
    return time < 10 ? '0' + time : time;
}

startstop.addEventListener('click',()=>{
    if(!running){
        startwatch();
        startstop.textContent='stop';
        running=true
    }else{
        stopwatch();
        startstop.textContent='start';
        running=false;
    }
});

reset.addEventListener('click',()=>{
    stopwatch();
    running=false;
    startstop.textContent='start'
    hours=0;
    minutes=0;
    seconds=0;
    milliseconds=0;
    updatedisplay();
    laplist.innerHTML='';
});

Laps.addEventListener("click",()=>{
    if(running){
        var listitem = document.createElement('li');
        listitem.innerHTML=`Laps:${formate(hours)}:${formate(minutes)}:${formate(seconds)}:${formate(milliseconds)}`;
        laplist.appendChild(listitem);
    }
});