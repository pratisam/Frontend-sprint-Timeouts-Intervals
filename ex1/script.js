// Exercise 1
// Write a function that mimics the behaviour of a typewriter.

// Using setInterval display the word "prout" one character at a time (one letter per second). Once the word is written on the screen clear the interval.

let times = 0;
function typewriter() {
    let wordPrint = "prout"
    console.log( wordPrint[times])
    if(times<wordPrint.length-1)
    times++;
    else 
    clearInterval(printing);
    
}

let printing = setInterval(typewriter, 1000);