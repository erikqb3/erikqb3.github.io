//api.openweathermap.org/data/2.5/weather?q=Rexburg,{state code}&appid={API key}
//api.openweathermap.org/data/2.5/weather?zip=83440,US&appid=6801c679faa89deb6356eb9331222fb8

let usableStuff = startingVariables();
backgroundShuffle();
weatherSummary(usableStuff);
nextFiveDays();
fiveDayForecast(usableStuff);



function backgroundShuffle() {
  let screenSize = window.innerWidth;
  console.log(screenSize)
  let background = document.querySelector("body");

  let backgroundArray = [];

  if (screenSize >= 1200) {
    backgroundArray = ['url(\"3b.jpg\")','url(\"4b.jpg\")','url(\"5b.jpg\")','url(\"6b.jpg\")','url(\"7b.jpg\")'];
  }
  else {
    backgroundArray = ['url(\"3a.jpg\")','url(\"4a.jpg\")','url(\"5a.jpg\")','url(\"6a.jpg\")','url(\"7a.jpg\")'];
  }
  
  // let backgroundArray = ['url(\"3.jpg\")','url(\"4.jpg\")','url(\"5.jpg\")','url(\"6.jpg\")','url(\"7.jpg\")'];
  let randomBackground = Math.floor(Math.random() * backgroundArray.length);
  console.log(randomBackground);
  background.style.backgroundImage = backgroundArray[randomBackground];
  console.log(background);
}

function startingVariables() {
  // let apiURL ='api.openweathermap.org/data/2.5/weather?id=5605242&appid=6801c679faa89deb6356eb9331222fb8';
  // console.log(apiURL)
  
  let key = "fa5461ada34b7f39fee29ec7f416ffb6";
  let cityID = 5604473;
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${key}`

  const currentPage = window.location.href;

  let currentWeatherAPI =
  `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${key}`;

  let forecastAPI =
  `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&appid=${key}`;

  let usableStuff = [];
  usableStuff.push(apiURL);
  usableStuff.push(currentWeatherAPI);
  usableStuff.push(forecastAPI);

  return usableStuff;
}

function calcWindSpeed(jsObject) {
  let currentTemp = jsObject.main.temp;
  let windSpeed = jsObject.wind.speed;

  document.getElementById('windChillTemp').textContent = Math.floor(
    35.74 +
      0.6215 * currentTemp -
      35.75 * Math.pow(windSpeed, 0.16) +
      0.4275 * currentTemp * Math.pow(windSpeed, 0.16)
  );
}

async function weatherSummary(usableStuff) {
  apiURL = usableStuff[0];
  await fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      document.getElementById('currently').textContent =
        jsObject.weather[0].main;
      document.getElementById('highTemp').textContent = jsObject.main.temp;
      document.getElementById('humidity').textContent = jsObject.main.humidity;
      document.getElementById('windSpeed').textContent = jsObject.wind.speed;
      calcWindSpeed(jsObject);

      console.log(jsObject);
      console.log(jsObject.main.temp_max);
    });
}

function nextFiveDays() {
  const days = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'];
  const todaysDate = new Date();
  let dayNumb = todaysDate.getDay();
  const daysArray = document.querySelectorAll('.dayOfWeek');

  for (i = 0; i < daysArray.length; i++) {
    daysArray[i].innerHTML = days[dayNumb];
    dayNumb += 1;
    if (dayNumb > 6) {
      dayNumb = 0;
    }
    // console.log(dayNumb)
  }
}

function fiveDayForecast(usableStuff) {
  let iconOptions = ['wi-day-sunny','wi-cloudy', 'wi-rain', 'wi-snow']

  fetch(usableStuff[2])
    .then((response) => response.json())
    .then((jsObject) => {
      console.log('forecastWeather', jsObject);
      const forecastTemps = document.querySelectorAll('.forecastTemp');
      const forecastIcons = document.querySelectorAll('.weatherIcon');
      for (i = 0; i < 5; i++) {
        forecastTemps[i].innerHTML = Math.round(jsObject.list[i].main.temp);
        let mainWeather = jsObject.list[i].weather[0].main;
        forecastIcons[i].classList.add("wi")
        switch(mainWeather) {
          case ("Sun"):
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
