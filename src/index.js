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
