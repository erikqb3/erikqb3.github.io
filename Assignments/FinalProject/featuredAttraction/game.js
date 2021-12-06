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
function setUpScreen() {
  let SWW = window.innerWidth; //SWW = starting Window Width
  let screen_textStream = document.getElementById("screen_textStream");
  let streamCount;

  if (SWW <= 760) {
    streamCount = 2;
    console.log("Hellow?")
  }
  else if (SWW <= 1200) {
    streamCount = 3;
  }
  else {
    streamCount = 4;
  }

  for (i=0; i < streamCount; i++) {
    let stream = document.createElement('div');
    stream.classList.add("stream")
    screen_textStream.appendChild(stream);
  }
  
  let backgroundPic = document.createElement('div');
  backgroundPic.setAttribute("id","screen_background");
  document.getElementById("mainScreen").appendChild(backgroundPic);
}


function runGame(){
  let titles = startingVariables()[0];
  let descriptions = startingVariables()[1];
  let counter = 0;
  setUpScreen();

  let randNumb = Math.floor(Math.random() * 21)
  
  let ticker = setInterval(() => { //the heartbeat of the game
    renderName(titles,randNumb,counter);
    counter += 1;
    if (counter==10) { //switch to another level
      clearInterval(ticker)
    }
  },2000);
}



async function renderName(titles,randNumb,counter){
  apiURL = "https://ghibliapi.herokuapp.com/films"
  let film;
  await fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    randNumb = Math.floor(Math.random() * 21);
    film = jsObject[randNumb];
    titles.push(film.title)
  })
  createNameElement(titles,counter)
}


function createNameElement(titles,counter){
  streamArray = document.getElementById("screen_textStream").children;
  // console.log(streamArray);
  randStream = streamArray[Math.floor(Math.random() * document.getElementById("screen_textStream").childElementCount)];
  // console.log(randStream)
  let nameSlot = document.createElement('p')
  console.log(titles, counter)
  nameSlot.innerHTML = titles[counter];
  randStream.appendChild(nameSlot);
  return randStream;
 
}

function placeName(titles,randStream,counter){
  console.log(titles,counter)
  console.log(randStream);
  randStream.innerHTML = titles[counter];
}

runGame();