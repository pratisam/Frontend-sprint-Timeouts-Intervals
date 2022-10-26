// For this exercise we're going to use VSCode's live-server extension, which allows us to have a running backend in a few seconds.

// Create a new directory (= folder), containing 3 files:

// index.html
// script.js
// becode.json
// Create a <button>, when clicked becode rules are loaded with a fetch('becode.json'), then dynamically generate a <ul> list containing each rule in a <li>.
let buttonJs = document.querySelector('button')
buttonJs.addEventListener('click', clickFunction)
let ulJs = document.createElement('ul')

function clickFunction(e){

    fetch('beCode.json')
    .then(response => response.json())
    .then(json => {
        let becodeJs = json
        let ulJs = document.createElement('ul')
        becodeJs.forEach(element => {
            let liJs = document.createElement('LI') ;
            liJs.innerHTML = element; 
            ulJs.appendChild(liJs)
        });
        document.body.appendChild(ulJs)
    })
    .catch(error => {
    console.log('There was an error!', error)
    })
    
}
