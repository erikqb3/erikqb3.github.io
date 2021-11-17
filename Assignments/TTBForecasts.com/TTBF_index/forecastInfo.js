// console.log("Hellow! I'm Honest");
// console.log(window.location.href);
let usableStuff = startingVariables();
weatherSummary(usableStuff);
nextFiveDays();
fiveDayForecast(usableStuff);

function startingVariables () {
  const prestonPage = "http://127.0.0.1:5502/Assignments/lesson10/preston-10.html";
  const sodaSpringsPage = "";
  const fishHavenPage = "";
  
  let key = ""
  let cityID = ""
  let apiURL = ""
  
  
  const currentPage = window.location.href;
  
  switch (currentPage) {
    case prestonPage:
      console.log("You are on the Preston Page");
      key = "fa5461ada34b7f39fee29ec7f416ffb6";
      cityID = 5604473;
      apiURL = `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${key}`
      break;
    case sodaSpringsPage:
      console.log("You are on the Soda Springs Page");
      break;
    case fishHavenPage:
      console.log("You are on the Fish Haven Page");
      break;
    default:
  }

let currentWeatherAPI = `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${key}`

let forecastAPI = `http://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&appid=${key}`



  let usableStuff = [];
  usableStuff.push(apiURL);
  usableStuff.push(currentWeatherAPI);
  usableStuff.push(forecastAPI);

  return usableStuff;
}

function calcWindSpeed (jsObject) {
  let currentTemp = jsObject.main.temp;
  let windSpeed = jsObject.wind.speed;
  
  document.getElementById("windChillTemp").textContent = Math.floor(35.74 + (0.6215*currentTemp) - (35.75*Math.pow(windSpeed,0.16)) + (0.4275*currentTemp*Math.pow(windSpeed,0.16)))
} 

async function weatherSummary (usableStuff) {
  apiURL = usableStuff[0];
  await fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      document.getElementById('currently').textContent = jsObject.weather[0].main;
      document.getElementById('highTemp').textContent = jsObject.main.temp;
      document.getElementById('humidity').textContent = jsObject.main.humidity;
      document.getElementById('windSpeed').textContent = jsObject.wind.speed;
      calcWindSpeed(jsObject)

      console.log(jsObject)
      console.log(jsObject.main.temp_max)


  })
}

function nextFiveDays () {
  const days = [
      'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'
  ]
  const todaysDate = new Date();
  let dayNumb = todaysDate.getDay()
  let dayName = days[dayNumb];
  const daysArray = document.querySelectorAll(".dayOfWeek")
    
  
  
  for (i=0; i < daysArray.length; i++) {
      daysArray[i].innerHTML = days[dayNumb];
      dayNumb += 1;
      if (dayNumb > 6) {
          dayNumb = 0;
      }
      // console.log(dayNumb)
  }

}

function fiveDayForecast(usableStuff) {
  // console.log(usableStuff[1]);
  // console.log(usableStuff[2]);

  fetch(usableStuff[1])  
  .then((response) => response.json())
  .then((jsObject) => {
    console.log("currentWeather", jsObject);
  })

  fetch(usableStuff[2])  
  .then((response) => response.json())
  .then((jsObject) => {
    const forecastTemps = document.querySelectorAll(".forecastTemp");
    for (i=0; i < 5; i++) {
      console.log(jsObject.list[i].main.temp)
      forecastTemps[i].innerHTML = jsObject.list[i].main.temp
    }
  })
}





// fetch(currentWeatherAPI)  
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log("currentWeather", jsObject);
//   })

//   fetch(forecastAPI)  
//   .then((response) => response.json())
//   .then((jsObject) => {
//     console.log("forecast",jsObject);
//   })





