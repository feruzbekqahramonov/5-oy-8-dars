const apiKey = '1e1718a25695cec5a5caef843161a94e';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(){
    const response = await fetch(apiUrl + searchBox.value + `&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        var data = await response.json();
    
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';

    if(data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'img/clouds.jpg';
    } else if(data.weather[0].main == 'Clear') {
        weatherIcon.src = 'img/sun.jpg';
    } else if(data.weather[0].main == 'Rain') {
        weatherIcon.src = 'img/rain icon.png';
    } else if(data.weather[0].main == 'Drizzle') {
        weatherIcon.src = "img/ko'k.png";
    } else if(data.weather[0].main == 'Mist') {
        weatherIcon.src = 'img/mist.jpg';
    }  
    document.querySelector('.weather').style.display = 'block'
    }
    document.querySelector('error').style.display = 'none'
}

searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value);
});


