function showweatherDetails(event) {
    event.preventDefault();

    const city = document.getElementById("city").value;
    const apiKey = "06e1b270465b86c5f41a313ed11012cf";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error("Error fetching weather:", error);
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById("weatherForm").addEventListener("submit", showweatherDetails);


function showLatDetails(event) {
    event.preventDefault();

    const lat = document.getElementById("lat").value;
    const lon = document.getElementById("lon").value;
    const apiKey = "06e1b270465b86c5f41a313ed11012cf";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const LatInfo = document.getElementById("LatInfo");
            LatInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
            <p>Temperature: ${data.main.temp} &#8451;</p>
            <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error("Error fetching weather:", error);
            const LatInfo = document.getElementById("LatInfo");
            LatInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
        });
}

document.getElementById("latForm").addEventListener("submit", showLatDetails);
