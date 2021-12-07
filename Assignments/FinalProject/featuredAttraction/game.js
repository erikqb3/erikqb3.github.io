console.log("Hellow?")
function startingVariables(){
  let variables = [];
  let namesArray = [];
  let descriptionArray = ["This is Me"];
  let inputBox = document.getElementById("userInput");
  
  variables.push(namesArray);
  variables.push(descriptionArray);
  variables.push(inputBox);

  return variables;
};

function getTimerTime(){
  return Math.floor((new Date() - startTime) / 1000); 
};
function setUpScreen() {
  let SWW = window.innerWidth; //SWW = starting Window Width
  let screen_textStream = document.getElementById("screen_textStream");
  let streamCount = 2;

  // if (SWW <= 760) {
  //   streamCount = 2;
  // }
  // else if (SWW <= 1200) {
  //   streamCount = 3;
  // }
  // else {
  //   streamCount = 4;
  // }

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
  let names = startingVariables()[0];
  let descriptions = startingVariables()[1];
  let counter = 0;
  setUpScreen();

  let randNumb = Math.floor(Math.random() * 21)
  
  let ticker = setInterval(() => { //the heartbeat of the game
    renderName(names,randNumb,counter);
    counter += 1;
    endGame(ticker);
    // if (counter==10) { //switch to another level
    //   clearInterval(ticker)
    // }
  },500); //time

  console.log(userInput)
  wordChecker(names,counter);
  console.log(counter);

}



async function renderName(names,randNumb,counter){
  // console.log("Hellow?")
  let apiURL = "https://ghibliapi.herokuapp.com/films";
  let MYjsonFile = "../featuredAttraction/characterNames.json";
  // let film;
  await fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let film = jsObject[randNumb];
    let filmLength = film.people.length;
    let APInameJson = jsObject[randNumb].people[(Math.floor(Math.random() * filmLength))] //from API

    if (film.people.length != 1) { //IF Api has multiple names listed
      fetch(APInameJson)
      .then((response) => response.json())
      .then((jsObject) => {
        // console.log(jsObject.name)
        names.push(jsObject.name)
        createNameElement(names,counter)
      })
    }
    else { //if API only has one name listed
      fetch(MYjsonFile)
      .then((response) => response.json())
      .then((jsObject) => {
        let randIndexNumb = Math.floor(Math.random() * 15);
        let characterList = jsObject[randIndexNumb];
        let charListLength = characterList.characters.length;
        let randCharName = jsObject[randIndexNumb].characters[Math.floor(Math.random() * charListLength)];
        // console.log(randCharName)
        names.push(randCharName);
        createNameElement(names,counter);
      })
    }

  })
  // createNameElement(names,counter)
}
function uniqueName(names, randCharName,counter){ //scrap
  for (i=0; i < names.length; i++) {
    if (randCharName != names[i]) {
      names.push(randCharName);
      createNameElement(names,counter)
    }
    else {};
  }

}

function createNameElement(names,counter){
  streamArray = document.getElementById("screen_textStream").children;
  // console.log(streamArray);
  randStream = streamArray[Math.floor(Math.random() * document.getElementById("screen_textStream").childElementCount)];
  // console.log(randStream)
  let nameSlot = document.createElement('p')
  // console.log(names, counter)
  nameSlot.innerHTML = names[counter]; //counter - the index number of the latest name pushed into the array
  if (randStream.childElementCount == 0 ) {
    // console.log(randStream.childElementCount);
  randStream.appendChild(nameSlot);
}
  else {
    // console.log(randStream.childElementCount,randStream)
    randStream.insertBefore(nameSlot,randStream.childNodes[0]);
  }
  return randStream;
 
}

// function placeName(titles,randStream,counter){
//   console.log(titles,counter)
//   console.log(randStream);
//   randStream.innerHTML = titles[counter];
// }

function wordChecker(names,counter) {
  let userInput = startingVariables()[2];
  userInput.addEventListener('input', ()=> { //word checker
    let streams = document.querySelectorAll(".stream");
    // spellingCheck();
    for (i=0; i < streams.length; i++) {
      let lastChild;
      try {
        lastChild = streams[i].lastChild.innerHTML;
      }
      catch(err) {
        lastChild = streams[i+1].lastChild.innerHTML; //the plus one trick wont work with more than two columns
      }
      if (lastChild == userInput.value) {
        let indexNumb = names.indexOf(lastChild);
        // names.splice(indexNumb,1);
        try {
          streams[i].lastChild.remove();
        }
        catch(err) {

          streams[i+1].lastChild.remove();
        }
        userInput.value=""
        getPoint();
      };
    }
  }
  )

}


// function spellingCheck () { //scrap
//   userInput.addEventListener('input',() => { 
//     const arrayQuote  = document.querySelectorAll(".stream"); 
//     const arrayValue = userInput.value.split('');
//     for (i=0;i<arrayQuote.length;i++) {
//       console.log(arrayQuote[i].lastChild)
//     }


//     let correct = true;
//     arrayQuote.forEach((characterSpan,index) => { 
//         const character = arrayValue[index];
//         if (character == null) {
//             characterSpan.classList.remove('correct');
//             characterSpan.classList.remove('incorrect');
//             correct = false 
//         }
//         else if (character === characterSpan.innerText) {
//             characterSpan.classList.add('correct');
//             characterSpan.classList.remove('incorrect');
//         } else {
//             characterSpan.classList.remove('correct');
//             characterSpan.classList.add('incorrect');
//             correct = false;
//         }
//         })
//     }
//   )}


function getPoint() {
  let yourPoints = parseInt(document.getElementById("yourPoints").innerHTML);
  let newScore = yourPoints+1;
  document.getElementById("yourPoints").innerHTML = newScore;


}

function endGame(ticker){
  let streamArray = document.getElementById("screen_textStream").children;
  for (i=0; i<streamArray.length;i++) {
    console.log(streamArray[i].childElementCount)
    if (streamArray[i].childElementCount >= 10) {
      clearInterval(ticker)
    }
  }
}

runGame();
