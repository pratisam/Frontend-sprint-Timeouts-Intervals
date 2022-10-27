// Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.

let outputJs =document.querySelector('.output-container')
let buttonJs = document.querySelector('button')
buttonJs.addEventListener('click',()=>{
    let inputValue = document.querySelector('input').value;
// Using the promise syntax? 
    let promiseSyntax = new Promise(function(myResolve, myReject){
        let localValue = (localStorage.getItem(`${inputValue}`));
        if(localValue!=null){
            myResolve(`${JSON.parse(localValue)},${localValue}`)
        }
        else{
            myReject('Error')
        }
    })
    promiseSyntax.then(
        function(value){
            console.log(value);
        },
        function(error){
            console.log(error);
        }
    )
// Also add a <select> field with a few countries in it, to narrow down the search to a specific country. You'll have to look in agify documentation to know more about that.
    let countryValue = document.querySelector('select').value
        fetch('https://api.agify.io/?name='+inputValue+'&country_id='+countryValue)
        .then(response => response.json())
        .then(json =>{
            let localSt = json;
// Store the previous results in a localStorage so you don't have to fetch them again!
//JSON.stringify(localSt) to convert object into string
            localStorage.setItem(`${inputValue}`, JSON.stringify(localSt)) ;
// how to fetch the stored Value

            // let localValue = (localStorage.getItem('ella'))
//to convert back into object
            // console.log(JSON.parse(localValue))
//to remove one item
            // localStorage.removeItem('fullName');
//to clear everything
            // localStorage.clear()
            let divJs = document.createElement('div');
            divJs.innerHTML = `${inputValue }, Average age of ${json.age} and the count as ${json.count} in the Country${countryValue} `;
            outputJs.appendChild(divJs)
        })
    .catch(error => {
        console.log('There was an error!', error)
        })
})
const fetchName = input => fetch('https://api.agify.io/?name='+input)


let promiseSyntax = new Promise(function(myResolve, myReject){
    let localValue = (localStorage.getItem('emma'));
    if(localValue!=null){
        myResolve(`${JSON.parse(localValue)},${localValue}`)
    }
    else{
        myReject('Error')
    }
})
promiseSyntax.then(
    function(value){
        console.log(value);
    },
    function(error){
        console.log(error);
    }
)
// Try to use async/await instead!    
