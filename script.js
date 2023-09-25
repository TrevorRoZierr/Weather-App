const inputBox = document.querySelector(".inputBox");
const searchBtn = document.getElementById("searchBtn");
const weatherDetails = document.querySelector(".weatherDetails");
const weatherImg = document.querySelector(".weatherImg");
const temperature = document.querySelector(".temperature");
const description = document.querySelector(".description");
const nameOfPlace = document.querySelector(".nameOfPlace");
const reload = document.querySelector(".reload");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
var mediaQuery = window.matchMedia('(min-width: 413px');

async function checkWeather(city) {
    const key = "E93YL2NJY6UUTULAVMLDW4272";
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${key}`;

    const weatherData = await fetch(`${url}`).then(res => res.json());
    console.log(weatherData);

    temperature.innerHTML = `${Math.round((weatherData.currentConditions.temp-32)*5/9)}<sup>°C</sup>`;
    description.innerHTML = weatherData.currentConditions.conditions;
    nameOfPlace.innerHTML = weatherData.resolvedAddress;
    weatherDetails.style.display = "flex";
    inputBox.style.width = "30vw";

switch (weatherData.currentConditions.conditions) {
    case "Clear":
    case "Partially Clear":
        weatherImg.src = "assests/clear.png";
        break;
    
    case "Cloudy":
    case "Partially cloudy":
        weatherImg.src = "assests/cloud.png";
        break;
    
    case "Overcast":
        weatherImg.src = "assests/overcast.png";
        break;
    
    case "Rain":
    case "Rainy":
        weatherImg.src = "assests/rain.png";
        break;

    default:
        break;
}

}

searchBtn.addEventListener("click", function () {
    checkWeather(inputBox.value);
})

reload.addEventListener("click", function () {
    location.reload();
})

mediaQuery.addEventListener(handlePhoneChange);
handlePhoneChange(mediaQuery);