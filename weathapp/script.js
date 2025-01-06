let apiKey = "5e1511bf19d0e101adbe349ea947d35b";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

let getWeather = async () => {
   let userInput = document.querySelector(".userInput");

   let response = await fetch(`${apiUrl}&q=${userInput.value}&appid=${apiKey}`);

   let data = await response.json();

   let error = document.querySelector(".error");
   let weatherInfoContainer = document.querySelector(".weather-info-container");
   let temp = document.querySelector(".temp"); 
   let main = document.querySelector(".main");
   let city = document.querySelector(".city");
   let humidity = document.querySelector(".humidity");
   let wind = document.querySelector(".wind");

   if (response.status === 400 || response.status === 404) {
      alert('Server Error');
   } else if (userInput === "") {
      error.style.display = "block";
      weatherInfoContainer.style.display = "none";
   } else {
      error.style.display = "none";
      weatherInfoContainer.style.display = "block";
      temp.innerHTML = Math.ceil(data.main.temp) + "℃";
      main.innerHTML = data.weather[0].main;
      city.innerHTML = data.name;
      humidity.innerHTML = data.main.humidity + "%";
      wind.innerHTML = data.wind.speed + "km/h";
   }
}