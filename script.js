const fetchData = async () => {
  const submit = document.getElementById("submit");
  const cityInput = document.getElementById("city");

  submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(cityInput.value);
  });

  // Call the async function with a default city
  getWeather("Mumbai");
};

const getWeather = async (city) => {
  const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'da59f50d50msh37abbac24c209f2p182dc8jsn2c1721169cf8',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  const cityName = document.getElementById("cityName");
  const cloud_pct = document.getElementById("cloud_pct");
  const temp = document.getElementById("temp");
  const feels_like = document.getElementById("feels_like");
  const humidity = document.getElementById("humidity");
  const min_temp = document.getElementById("min_temp");
  const max_temp = document.getElementById("max_temp");
  const wind_speed = document.getElementById("wind_speed");
  const wind_degrees = document.getElementById("wind_degrees");
  const sunrise = document.getElementById("sunrise");
  const sunset = document.getElementById("sunset");

  cityName.innerHTML = city;
  try {
    const response = await fetch(url, options);
    const result = await response.json(); // Parse response as JSON

    // Access properties from the parsed JSON
    cloud_pct.innerHTML = result.cloud_pct;
    temp.innerHTML = result.temp;
    temp2.innerHTML = result.temp;

    feels_like.innerHTML = result.feels_like;
    humidity.innerHTML = result.humidity;
    humidity2.innerHTML = result.humidity;

    min_temp.innerHTML = result.min_temp;
    max_temp.innerHTML = result.max_temp;
    wind_speed.innerHTML = result.wind_speed;
    wind_speed2.innerHTML = result.wind_speed;

    wind_degrees.innerHTML = result.wind_degrees;
    sunrise.innerHTML = result.sunrise;
    sunset.innerHTML = result.sunset;

    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

// Call the main async function
fetchData();
