// URLs, keys

const WEATHER_URL = `http://api.weatherstack.com/current?`;
const WEATHER_KEY = 'access_key=26bf1668b02f66cade2aa8964755c95e';
const UNSPLASH_URL = 'https://api.unsplash.com/search/photos';
const UNSPLASH_KEY = 'Z776SkbnJzJSCLRH2o272DTIRJOEsuQCRdQsOqVP-_0';



// Form values

let form = document.forms[0];
let countryInput = form.elements.country;
let cityInput = form.elements.city;

// Fields for weather,time data

let weatherBlock = document.querySelector('.weather-info');
let wallPaper = document.querySelector('main');

let locationDiv = document.getElementById('location');
let timeDiv = document.getElementById('time');
let temperatureDiv = document.getElementById('temperature_first');
let feelTemperatureDiv = document.getElementById('temperature_second');
let weatherDescrDiv = document.getElementById('weather_descr');
let windDiv = document.getElementById('wind');
let speedDiv = document.getElementById('speed');
let weatherIcon = document.getElementById('weather_icon')
let errorMessageDiv = document.querySelector('.error');
let closeErrorMessage = document.querySelector('.close');
let error = document.querySelector('#error-result');


function getAPIResponse(city, country) {
    Promise.all([
        fetch(`${UNSPLASH_URL}?query=${country} ${city}&client_id=${UNSPLASH_KEY}`),
        fetch(`${WEATHER_URL}${WEATHER_KEY}&query=${country} ${city}`)
    ]).then(function(responses) {
        return Promise.all(responses.map(function(response) {
            return response.json();
        }));
    }).then(data => {
        wallPaper.style.backgroundImage = `url(${data[0].results[Math.floor(Math.random() * data[0].results.length)].urls.regular})`;
        createWeatherInfo(data[1]);
        country = '';
        city = '';
    }).catch(function() {
        errorMessageDiv.style.display = 'block';
        error.innerHTML = city ? city : country;
    })
}


function createWeatherInfo(data) {
    const {
        location: { localtime, name: city, country },
        current: { temperature, feelslike, wind_dir, wind_speed, weather_descriptions, weather_icons }
    } = data;
    locationDiv.innerHTML = `${city}, ${country}`
    timeDiv.innerHTML = localtime.slice(11);
    temperatureDiv.innerHTML = temperature;
    feelTemperatureDiv.innerHTML = feelslike;
    windDiv.innerHTML = wind_dir;
    speedDiv.innerHTML = wind_speed;
    weatherDescrDiv.innerHTML = weather_descriptions;
    weatherIcon.src = weather_icons;
}


// Listeners 

form.addEventListener('submit', function(event) {
    event.preventDefault();
    errorMessageDiv.style.display = 'none';
    weatherBlock.classList.add('active');
    getAPIResponse(cityInput.value, countryInput.value);
    countryInput.value = '';
    cityInput.value = '';

});

closeErrorMessage.addEventListener('click', function() {
    errorMessageDiv.style.display = 'none';
    countryInput.value = '';
    cityInput.value = '';
});


window.onload = function() {
    weatherBlock.classList.add('active');
    fetch(`${WEATHER_URL}${WEATHER_KEY}&query=Minsk`).then(data => {
        return data.json()
    }).then(data => {
        wallPaper.style.backgroundImage = `url('img/porto.jpg')`;
        createWeatherInfo(data);
    })
};
