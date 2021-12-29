function formatTime(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${hours}:${minutes}`;
}

function formatDay(date) {
  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[dayIndex];

  return `${day}`;
}

function showWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
}

function lookupCity(city) {
  let apiKey = `563f1b4a8a5b358fa03d2ae8631a54b9`;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function clickSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  lookupCity(city);

  let timeElement = document.querySelector("#time");
  let currentTime = new Date();
  timeElement.innerHTML = formatTime(currentTime);

  let dayElement = document.querySelector("#day");
  let currentDay = new Date();
  dayElement.innerHTML = formatDay(currentDay);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", clickSubmit);
