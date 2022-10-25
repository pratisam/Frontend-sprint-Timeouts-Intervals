// Let's create a simple Whack-A-Mole clone.

// The goal of this traditional game is to prevent "moles" from coming out the ground with a hammer. Every second a new "mole" appears and you'll have to click on it to gently tell her to go back into the soil where it belongs. The game doesn't have to picture moles, or animal cruelty you can simply display circle <div>s to begin with. Everytime you click on a mole, your score increases.

// If you'd like to spice things up, you can create an increasing difficulty by reducing the timeframe in which the mole appears.

// Here is a badly drawn example to get you started. Let's do this!

let holes = document.querySelectorAll('.main-container div');
let scoreJs = document.querySelector(".score-container p")
let points =1;
function displayMole(){   
    let holeNumber = Math.floor(Math.random()*18)
    holes[holeNumber].style.backgroundColor ="red";
    setTimeout(hideMole,2000)  
    }

function hideMole(){   
    // console.log(holes[holeNumber])
    holes.forEach(element =>{
    element.style.backgroundColor ="white";
    })
    
    }

document.body.addEventListener('click', (event) => {

    if(event.target.style.backgroundColor=="red"){
        scoreJs.innerHTML = `Score : ${points} `;
        event.target.style.backgroundColor ="white";
        points = points + 1;
    }})
setInterval(displayMole,3000)



