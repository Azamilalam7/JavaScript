document
    .getElementById("weatherid")
    .addEventListener("submit" , async function(event) {
        event.preventDefault()
    

    const cityName = document
                            .getElementById("cityinput")
                            .value;

    const API = "80d67a7f6b9e1c5f94ba9fd967f55f7c";
    const weatherResult = document.getElementById("weatherResult")
    const loading = document.getElementById("loading")

    weatherResult.innerHTML = '';
    loading.style.display = 'block';

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API}&units=metric`)
        
        if (!response.ok) {
            throw new Error('City not found');
        }
        const data = await response.json();
        displayWeather(data);

    }catch (error) {
        weatherResult.innerHTML = `<p>${error.message}</p>`;

    } finally {
        loading.style.display = 'none';}
})

function displayWeather(data){
    const weatherResult = document.getElementById('weatherResult');
    
    const weatherHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;

    weatherResult.innerHTML = weatherHTML
}