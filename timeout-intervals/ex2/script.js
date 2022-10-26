// Exercise 2
// Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.

let timeWhenStarted = new Date().getTime()

function myTimer() {

  let timeThisSecond = new Date().getTime();
  //Math.abs(new Date() -new Date())----this too work

//   var totalseconds = Math.abs(new Date(datetime_in) - new Date(datetime_out))
  let timeDifference = ((timeThisSecond) - (timeWhenStarted))/1000;
  if(timeDifference<60){
    console.log(Math.floor(timeDifference) +'sec')
  }
   else 
    console.log(Math.floor((timeDifference/60))+'min')
    
}

setInterval(myTimer, 1000);
