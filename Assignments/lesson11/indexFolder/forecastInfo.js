let usableStuff = startingVariables();
weatherSummary(usableStuff);
nextFiveDays();
fiveDayForecast(usableStuff);

function startingVariables () {
  const prestonPage = "https://erikqb3.github.io/Assignments/lesson11/prestonFolder/preston.html"; //github
  const sodaSpringsPage = "https://erikqb3.github.io/Assignments/lesson11/sodaSpringsFolder/sodaSprings.html";
  const fishHavenPage = "https://erikqb3.github.io/Assignments/lesson11/fishHavenFolder/fishHaven.html";
  const prestonPage_temp = "http://127.0.0.1:5502/Assignments/lesson11/prestonFolder/preston.html"; //live server
  const sodaSpringsPage_temp = "http://127.0.0.1:5502/Assignments/lesson11/sodaSpringsFolder/sodaSprings.html";
  const fishHavenPage_temp = "http://127.0.0.1:5502/Assignments/lesson11/fishHavenFolder/fishHaven.html";
  
  let key = "fa5461ada34b7f39fee29ec7f416ffb6";
  let cityID = ""
  let apiURL = ""
  
  
  const currentPage = window.location.href;
  
  switch (currentPage) {
    case prestonPage:
    case prestonPage_temp:
      // console.log("You are on the Preston Page");
      cityID = 5604473;
      break;
    case sodaSpringsPage:
    case sodaSpringsPage_temp:
      // console.log("You are on the Soda Springs Page");
      cityID = 5607916;
      break;
    case fishHavenPage:
    case fishHavenPage_temp:
      // console.log("You are on the Fish Haven Page");
      cityID = 5585010;
      break;
    default:
  }

  apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${key}`

let currentWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${key}`

let forecastAPI = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&appid=${key}`



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

      // console.log(jsObject)
      // console.log(jsObject.main.temp_max)


  })
}

function nextFiveDays () {
  const days = [
      'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'
  ]
  const todaysDate = new Date();
  let dayNumb = todaysDate.getDay();
  const daysArray = document.querySelectorAll(".dayOfWeek")
    
  
  
  for (i=0; i < daysArray.length; i++) {
      daysArray[i].innerHTML = days[dayNumb];
      dayNumb += 1;
      if (dayNumb > 6) {
          dayNumb = 0;
      }
  }

}

function fiveDayForecast(usableStuff) {
  let iconOptions = ['wi-day-sunny','wi-cloudy', 'wi-rain', 'wi-snow']

  fetch(usableStuff[2])
    .then((response) => response.json())
    .then((jsObject) => {
      // console.log('forecastWeather', jsObject);
      const forecastTemps = document.querySelectorAll('.forecastTemp');
      const forecastIcons = document.querySelectorAll('.weatherIcon');
      for (i = 0; i < 5; i++) {
        forecastTemps[i].innerHTML = Math.round(jsObject.list[i].main.temp);
        let mainWeather = jsObject.list[i].weather[0].main;
        forecastIcons[i].classList.add("wi")
        switch(mainWeather) {
          case ("Clear"):
            forecastIcons[i].classList.add(iconOptions[0]);
            break;
          case ("Clouds"):
            forecastIcons[i].classList.add(iconOptions[1]);
            break;
          case ("Rain"):
            forecastIcons[i].classList.add(iconOptions[2]);
            break;
          case ("Snow"):
            forecastIcons[i].classList.add(iconOptions[3]);
            break;
          default:

        }

      
      }
    });
}






