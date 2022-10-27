
let dayJs = document.getElementById("day");
let dateJs = document.getElementById("date");
let yearJs = document.getElementById("year");
let timeJs = document.getElementById("time-container");
let hourJs = document.getElementById("hour");
let minJs = document.getElementById("min");
let secJs = document.getElementById("sec");

let todayDate = new Date();
dayNumber = todayDate.getDay();
    switch(dayNumber){
        case 0 : dayJs.innerHTML = "SUN"
            break;
        case 1 :  dayJs.innerHTML = "MON"
            break;
        case 2 :  dayJs.innerHTML = "TUE"
            break;
        case 3 :  dayJs.innerHTML = "WED"
            break;
        case 4 :  dayJs.innerHTML = "THU"
            break;
        case 5 :  dayJs.innerHTML = "FRI"
            break;
        case 6 :  dayJs.innerHTML = "SAT"
            break;
        
    }
monthNumber = todayDate.getMonth();
let monthLetters;
    switch(monthNumber){
        case 0 : monthLetters = "JAN"
            break;
        case 1 :  monthLetters = "FEB"
            break;
        case 2 :  monthLetters = "MAR"
            break;
        case 3 :  monthLetters = "APR"
            break;
        case 4 :  monthLetters = "MAY"
            break;
        case 5 :  monthLetters = "JUN"
            break;
        case 6 :  monthLetters = "JUL"
            break;
        case 7 :  monthLetters = "AUG"
            break;
        case 8 :  monthLetters = "SEP"
            break;
        case 9 :  monthLetters = "OCT"
            break;
        case 10 :  monthLetters = "NOV"
            break;
        case 11 :  monthLetters = "DEC"
            break;
        
    }
dateJs.innerHTML = `${todayDate.getDate()} </br>${monthLetters}`;
yearJs.innerHTML = todayDate.getFullYear();
function timeFunction(){
    if(!changeTime){
        console.log("got false")
        hourJs.innerHTML = `${new Date().getHours('en-US', {hour12: false})}:`
        minJs.innerHTML = `${new Date().getMinutes('en-US', {hour12: false})}:`
        secJs.innerHTML = new Date().getSeconds('en-US', {hour12: false})

    }
    else{
        hourJs.innerHTML = `${new Date().getHours('en-US', {hour12: true})}:`
        minJs.innerHTML = `${new Date().getMinutes('en-US', {hour12: true})}:`
        if(new Date().getHours()<12)
        secJs.innerHTML = `${new Date().getSeconds('en-US', {hour12: true})} am`
        else 
        secJs.innerHTML = `${new Date().getSeconds('en-US', {hour12: true})} pm`
        

    }
// The date should be of today, in your timezone. Refresh the display every seconds (hint), so the time stays exact even when the page stays open for a long time
    setTimeout(timeOutFunction,60000)
}


const timeOutFunction= ()=>{
 clearTimeout(timeFn)
}
let timeFn = setInterval(timeFunction,500)
let changeTime = false;
// When clicking on the hours, toggle the display in 12-hours format or back to 24-hours format.
function clickFunction(e){
    if(e.target == hourJs){
        console.log(true)
        changeTime = !changeTime;
    }
}

document.body.addEventListener('click',clickFunction)
