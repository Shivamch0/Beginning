const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");

// const Api = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`;
// const IMG_URL = `https: //openweathermap.org/img/wn${data.weather[0].icon}@2x.png`;

const getWeather = async (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url);
    console.log(response);
}


form.addEventListener(
    "submit",
    function(event) {
        getWeather(search.value);
        event.preventDefault();
    }
)

