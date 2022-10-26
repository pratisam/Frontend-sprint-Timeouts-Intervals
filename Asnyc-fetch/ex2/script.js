// Make a new page with a text input and a button. When the button is clicked, a fetch query is sent to the agify API with the name entered in the input. When the request is finished display the result in a new div on the page. Keep the the past requests on the page by creating a new div each time you make an API call.

let outputJs =document.querySelector('.output-container')
let buttonJs = document.querySelector('button')
buttonJs.addEventListener('click',()=>{
    let inputValue = document.querySelector('input').value;
// Also add a <select> field with a few countries in it, to narrow down the search to a specific country. You'll have to look in agify documentation to know more about that.
    let countryValue = document.querySelector('select').value
        fetch('https://api.agify.io/?name='+inputValue+'&country_id='+countryValue)
        .then(response => response.json())
        .then(json =>{
            let localSt = json;
// Store the previous results in a localStorage so you don't have to fetch them again!
            window.localStorage.setItem(`result`, JSON.stringify(localSt))   
            console.log(window.localStorage.getItem('result'))
            let divJs = document.createElement('div');
            divJs.innerHTML = `${inputValue }, Average age of ${json.age} and the count as ${json.count} in the Country${countryValue} `;
            outputJs.appendChild(divJs)
        })
    .catch(error => {
        console.log('There was an error!', error)
        })
})
const fetchName = input => fetch('https://api.agify.io/?name='+input)

// Extra steps

// Using the promise syntax? Try to use async/await instead!    