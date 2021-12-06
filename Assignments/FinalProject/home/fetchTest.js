function startingVariables(){
  let variables = [];
  let titlesArray = [];
  let descriptionArray = ["This is Me"];
  
  variables.push(titlesArray);
  variables.push(descriptionArray);

  return variables;
};

function getTimerTime(){
  return Math.floor((new Date() - startTime) / 1000); 
};

function runGame(){
  let titles = startingVariables()[0];
  let descriptions = startingVariables()[1];

  let counter = 0;

  let randNumb = Math.floor(Math.random() * 21)
  
  let ticker = setInterval(() => { //the heartbeat of the game
    renderName(titles,randNumb);
    console.log(titles, counter);
    counter += 1;
    if (counter==10) { //switch to another level
      clearInterval(ticker)
    }
  },1000);
}



function renderName(titles,randNumb){
  apiURL = "https://ghibliapi.herokuapp.com/films"
  let film;
  fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    randNumb = Math.floor(Math.random() * 21);
    film = jsObject[randNumb];
    titles.push(film.title)
    console.log(film.title, randNumb)
  })
}
function createNameElement(){}
function placeName(){
}

runGame();


// apiURL = "https://ghibliapi.herokuapp.com/films"

// fetch(apiURL)
// .then((response) => response.json())
// .then((jsObject) => {
//   length = jsObject.length
//   console.log(jsObject)
//   let film = jsObject[Math.floor(Math.random() * (length+1))]
//   console.log(film)
//   console.log(film.title)
//   console.log(film.image)
//   console.log(film.people) //people

//   let x = Math.floor(Math.random() * (film.people.length))
//   let y = film.people[x]
  
//   console.log(y,x)
//   console.log(y.name)
  
//   fetch(y) //fetch name API
//   .then((response => response.json()))
//   .then((jsObject) =>
//   console.log(jsObject.name))
// })


// console.log("hellow World")


// let startTime = new Date();
// let intervalTime = 000;

// let counter = getTimerTime()
// console.log(counter);


// startTimer(intervalTime);
// console.log("hellow");

// while (counter < 100) {
//   switch(counter) {
//     case 10:
//       intervalTime = 1000;
//       break;
//     case 20:
//       intervalTime = 2000;
//       break;
//     case 30:
//       intervalTime = 3000;
//       break;
//     case 40:
//       intervalTime = 4000;
//       break;
//     case 50:
//       intervalTime = 5000;
//       break;
//     case 60:
//       intervalTime = 6000;
//       break;
//     case 70:
//       intervalTime = 7000;
//       break;
//     case 80:
//       intervalTime = 8000;
//       break;
//     default:
//   }
//   startTimer(intervalTime);
// }


// function startTimer(intervalTime) {
//     let ticker = setInterval(() => { 
//       let counter = getTimerTime()
//        console.log(counter, intervalTime);
//     }, (counter*1000+1000));
// }

// function getTimerTime() {
//    return Math.floor((new Date() - startTime) / 1000); 
// }


// function startingVariables(){};
// function getTimerTime(){
//   return Math.floor((new Date() - startTime) / 1000); 
// };
// function runGame(){
//   let ticker = setInterval(() => {
//     let name = renderName();
//     console.log(name)
//   },1000);
// }
// function renderName(){
//   apiURL = "https://ghibliapi.herokuapp.com/films"
//   let film;
//   fetch(apiURL)
//   .then((response) => response.json())
//   .then((jsObject) => {
//     film = jsObject[Math.floor(Math.random() * (length+1))];
//   })
//   return film;
// }


// function createNameElement(){}
// function placeName(){
// }

// runGame();

