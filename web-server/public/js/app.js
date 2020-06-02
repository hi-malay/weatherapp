console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('https://api.mapbox.com/geocoding/v5/mapbox.places'+ location +'.json?types=country&access_token=pk.eyJ1IjoibWFsYXk4NzkiLCJhIjoiY2thdGdkbWEyMDE2djJybzkzaGRueGJxOCJ9.sBveKO8KIueYIbDT1G8K2g').then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = data.body.features[0].text;
                
            }
        })
    })
})