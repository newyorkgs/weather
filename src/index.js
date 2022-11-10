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

if (city === "paris") {
  alert(
    `It is currently ${Math.round(weather.paris.temp)} °F (${Math.round(
      weather.paris.temp / 3.33
    )}°C) in Paris with a humidity of ${weather.paris.humidity}%.`
  );
} else {
  if (city === "tokyo") {
    alert(
      `It is currently ${Math.round(weather.tokyo.temp)} °F (${Math.round(
        weather.tokyo.temp / 3.33
      )}°C) in Tokyo with a humidity of ${weather.tokyo.humidity}%.`
    );
  } else {
    if (city === "lisbon") {
      alert(
        `It is currently ${Math.round(weather.lisbon.temp)} °F (${Math.round(
          weather.lisbon.temp / 3.33
        )}°C) in Lisbon with a humidity of ${weather.lisbon.humidity}%.`
      );
    } else {
      if (city === "san francisco") {
        alert(
          `It is currently ${Math.round(weather.sanfran.temp)} °F (${Math.round(
            weather.sanfrancisco.temp / 3.33
          )}°C) in San Francisco with a humidity of ${
            weather.sanfrancisco.humidity
          }%.`
        );
      } else {
        if (city === "oslo") {
          alert(
            `It is currently ${Math.round(weather.oslo.temp)} °F (${Math.round(
              weather.oslo.temp / 3.33
            )}°C) in Oslo with a humidity of ${weather.oslo.humidity}%.`
          );
        } else {
          alert(
            `Sorry, we don't know the weather for this city, try going to: https://www.google.com/search?q=weather+${city}`
          );
        }
      }
    }
  }
}
