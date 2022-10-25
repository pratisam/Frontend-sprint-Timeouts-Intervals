// Using timestamps, find the exact time and date we will be in 80000 hours.
// Write a function to display the time and date for any amount of hours given in the future. Create a number input for the hours and listen for keyup events, dynamically display the date in the number of hours given by the input.
function futureDate(){
    let hourInput =parseInt(document.getElementById("inputNumber").value);
    console.log(hourInput)
    paraJs = document.querySelector('p')
    let todayDate = new Date().getTime()
    let differenceDate = hourInput*60*60*1000
    let futureDate = new Date(todayDate+differenceDate)
    console.log(futureDate.toLocaleString())
    paraJs.innerHTML = futureDate.toLocaleString()
}


