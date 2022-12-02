/*
let weather = {
  paris: {
    temp: 19.7,
    humidity: 80
  },
  tokyo: {
    temp: 17.3,
    humidity: 50
  },
  lisbon: {
    temp: 30.2,
    humidity: 20
  },
  sanfrancisco: {
    temp: 20.9,
    humidity: 100
  },
  oslo: {
    temp: -5,
    humidity: 20
  }
};

let city = prompt("Enter a city:");
city = city.toLowerCase().trim();
if (weather[city] !== undefined) {
  let temperature = weather[city].temp;
  let celsiusTemp = Math.round((temperature * 9) / 5) + 32;
  let fahrenheitTemp = Math.round(temperature);
  let humidity = weather[city].humidity;

  alert(
    `It is currently ${fahrenheitTemp} °F (${celsiusTemp}°C) in Paris with a humidity of ${humidity}%.`
  );
} else {
  alert(
    `Sorry, we don't know the weather for this city, try going to: https://www.google.com/search?q=weather+${city}`
  );
}
*/
let now = new Date();

let dates = document.querySelector("#dates");

let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

dates.innerHTML = `${day} ${hours}:${minutes}`;

//Add a search engine, when searching for a city (i.e. Paris), display the city name on the page after the user submits the form.
function showTemp(response) {
  console.log(response);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#tempInput").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#describe").innerHTML = response.data.weather[0].main;
}

function search(cityName) {
  let key = "7ff2ff06932377a6042db4dd6cd7c86a";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=imperial`;
  axios.get(url).then(showTemp);
}

function handleSubmit(event) {
  event.preventDefault();
  //make api call to openweather, once I get response display city name and temp.
  let cityName = document.querySelector("#search-input").value;
  search(cityName);
}

function searchLocation(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "7ff2ff06932377a6042db4dd6cd7c86a";
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;
  axios.get(url).then(showTemp);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let form = document.querySelector("#citySearch");
form.addEventListener("submit", handleSubmit);

let currentBox = document.querySelector(".currentBox");
currentBox.addEventListener("click", getCurrentPosition);

search("New York");
