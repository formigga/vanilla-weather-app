//calculate the current date from dt
function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  //fixing single-digit bug
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  //fixing single-digit bug
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  //converting numbers to actual week days
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "87471c6a89e6a023ff918939ca16d5ac";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&units=metric&appid=${apiKey}`;

axios.get(apiUrl).then(displayTemperature);
