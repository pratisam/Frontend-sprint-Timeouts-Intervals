// Find the timezones of :

// And display the date and time of these cities along with the time and date of Brussels.
let localsTime = new Date().toLocaleString()
console.log(localsTime+" "+"Bru")

// Anchorage (USA)

let usTime = new Date().toLocaleString('en-US',{ timeZone: 'America/Anchorage' })
console.log(usTime+" "+"USA")
// Reykjavik (Iceland)

let iceLandTime = new Date().toLocaleString('en-US',{ timeZone: 'Atlantic/Reykjavik' })
console.log(iceLandTime+" "+"Icaland")

// Saint-Petersburg (Russia)

let russiaTime = new Date().toLocaleString('en-US',{ timeZone: 'Europe/Moscow' })
console.log(russiaTime+" "+"Russia")