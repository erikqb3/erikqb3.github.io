// unicode a = 97 unicode A = 65
displayAlphaNav();

function displayAlphaNav() {
  let alphaNav = document.getElementById("alphaNav");
  let unicodeStart = 65;
  let divLetter;
  for (i=0; i<26; i++) {
    // divLetter = `&#${unicodeStart+i}`;
    divLetter = document.createElement('div')
    divLetter.innerHTML = `&#${unicodeStart+i}`;
    divLetter.classList.add("sortingLetter")
    alphaNav.appendChild(divLetter);
    divLetter.addEventListener('click', e=> {
      let letter = e.target.closest('div');
      console.log(letter.innerHTML);
    })
  }
}

function createDropDown() {

}
function showDropDown() {
  let dropDownBtn = document.getElementById("dropDown_button");
  dropDownBtn.addEventListener('')
}

function displayGameCards() {
  let GC_holder = document.getElementById('gameCard_holder');
  let jsonFile  = "../gameLibrary/gamesList.json";


  fetch(jsonFile)
  .then((response) => response.json())
  .then((jsObject) => {
    jsObject.forEach((game)=> {
      let GC_card = document.createElement('div');
      GC_card.classList.add('gameCard')
      let side_L = document.createElement('div');
      side_L.classList.add('section_L');
      let info = document.createElement('div');
      info.classList.add('gameInfo');
      let side_R = document.createElement('div');
      side_R.classList.add('section_R');
      side_R.innerHTML = game.description;
  
  
      let img = document.createElement('img');
      img.setAttribute('src',game.picture);
      let title = document.createElement('h4');
      title.innerHTML = game.title;
      let author = document.createElement('p');
      author.innerHTML = game.author;
      let date = document.createElement('p');
      date.innerHTML = game.dateAdded;
      // console.log(jsObject)

      GC_holder.appendChild(GC_card);
      GC_card.appendChild(side_L);
      GC_card.appendChild(side_R);
    
      side_L.appendChild(img);
      side_L.appendChild(info);
      info.appendChild(title);
      info.appendChild(author);
      info.appendChild(date);

      GC_card.addEventListener("click", e=> {
        let card = e.target.closest('div.gameCard');
        console.log(card);
        location.href = game.game_url
      })
      // divLetter.addEventListener('click', e=> {
      //   let letter = e.target.closest('div');
      //   console.log(letter.innerHTML);
      // })
    })

    // let GC_card = document.createElement('div');
    // GC_card.classList.add('gameCard')
    // let side_L = document.createElement('div');
    // side_L.classList.add('section_L');
    // let info = document.createElement('div');
    // info.classList.add('gameInfo');
    // let side_R = document.createElement('div');
    // side_R.classList.add('section_R');
    // side_R.innerHTML = game.description;


    // let img = document.createElement('img');
    // img.setAttribute('src',game.picture);
    // let name = document.createElement('h4');
    // name.innerHTML = game.aurthor;
    // let date = document.createElement('p');
    // date.innerHTML = game.dateAdded
    // console.log(jsObject)
  })

}

displayGameCards();