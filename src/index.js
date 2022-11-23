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

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input");

  let h1 = document.querySelector("h1");
  h1.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#citySearch");
form.addEventListener("submit", search);
