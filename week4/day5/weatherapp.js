let apiKey = "622d85fb1a656b0a3ab04b6a4f7fe706";
let fetchButton = document.querySelector(".fetch");
console.log("baby powder")
let seccon = document.querySelector(".secondContainer")

async function checkWeather() {
    let city = document.querySelector(".input");
    let cityName = city.value
    let Url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${apiKey}`;
    const fetchWeather = await fetch(Url);
    const jsonweather = await fetchWeather.json();
    // exactanswer = (jsonweather.main.temp - 273.15) * 9/5 + 32,"Fahrenheit";
    // correctform = (exactanswer + "Fahrenheit")
    const weatherDiv = document.createElement("div");
    const weatherinfo = document.createElement("p");
    weatherinfo.innerHTML = jsonweather.main.temp + " Fahrenheit";
    weatherDiv.append(weatherinfo);
    seccon.append(cityName,weatherDiv)
    
    console.log(cityName);
    console.log(jsonweather.main.temp + " Fahrenheit");
    
}


fetchButton.addEventListener("click", () => checkWeather())