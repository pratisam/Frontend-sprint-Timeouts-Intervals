// Using timestamps, find how many days have passed since the date of your birth. Feeling old, yet?

let dateOfBirth = new Date('1991-03-07')
let dayPassed = Math.floor((new Date()-dateOfBirth.getTime())/(1000*60*60*24))
console.log(dayPassed +" Days have passed since my birth")


// Write a function to find how many days have passed since any point in time (after 1970).

let firstDate = new Date('1970')
let dayCalc = Math.floor((new Date()-firstDate.getTime())/(1000*60*60*24))
console.log(dayCalc+" Days have passed since 1970")