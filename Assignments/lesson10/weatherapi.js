const key = "fa5461ada34b7f39fee29ec7f416ffb6";
const cityID = 5604473;
const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=${cityID}&units=imperial&appid=${key}`


// async function fetchFunction () {
//   response = await fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//   console.log(jsObject);
//   })

//   console.log(response)
// };

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.getElementById('current-temp').textContent = jsObject.main.temp;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    const description = jsObject.weather[0].description;
    document.getElementById('imagesrc').textContent=imagesrc;
    document.getElementById('icon').setAttribute('src',imagesrc);
    document.getElementById('icon').setAttribute('alt',description);

  console.log(jsObject);
  })

  