async function myFetch() {
  let response = await fetch("https://byui-cit230.github.io/weather/data/towndata.json")
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  return await response.json();
}

myFetch().then((jsonData) => {
  // console.log(jsonData.towns);
  main(jsonData);
})



function main (jsonData) {
  //websites both live and committed
  const prestonPage = "https://erikqb3.github.io/Assignments/lesson11/prestonFolder/preston.html"; //github
  const sodaSpringsPage = "https://erikqb3.github.io/Assignments/lesson11/sodaSpringsFolder/sodaSprings.html";
  const fishHavenPage = "https://erikqb3.github.io/Assignments/lesson11/fishHavenFolder/fishHaven.html";
  const prestonPage_temp = "http://127.0.0.1:5502/Assignments/lesson11/prestonFolder/preston.html"; //live server
  const sodaSpringsPage_temp = "http://127.0.0.1:5502/Assignments/lesson11/sodaSpringsFolder/sodaSprings.html";
  const fishHavenPage_temp = "http://127.0.0.1:5502/Assignments/lesson11/fishHavenFolder/fishHaven.html";
  let indexNumber;
  
  // console.log(jsonData);
  
  const currentPage = window.location.href;
  
  switch (currentPage) {
    case prestonPage:
    case prestonPage_temp:
      indexNumber = 6;
      prestonPancakes();
      setupEventHolder(jsonData,indexNumber);
      // console.log("You are on the Preston Page");
      break;
    case sodaSpringsPage:
    case sodaSpringsPage_temp:
      indexNumber = 0;
      setupEventHolder(jsonData,indexNumber);
      // console.log("You are on the Soda Springs Page");
      break;
    case fishHavenPage:
    case fishHavenPage_temp:
      indexNumber = 2;
      setupEventHolder(jsonData,indexNumber);
      // console.log("You are on the Fish Haven Page");
      break;
    default:
  }
}


function prestonPancakes () {
  const date = new Date();
  const today = date.getDay();
  // console.log(today);
  
  if ((today == 5) || (today == 6)) {
      let newArticle_holder = document.createElement("div");
      newArticle_holder.classList.add('naHolder');
      let newArticle_content = document.createElement("div");
      newArticle_content.classList.add('naContent');
      // newArticle_content.classList.add('acticleContent')
      let newArticle_text = document.createElement('div');
      newArticle_text.classList.add('naText');
      let articleHeader = document.createElement("h4");
      let articleText = document.createElement("p");
      let articlePic = document.createElement('img');
      articlePic.setAttribute('src','../prestonFolder/preston_imgs/Pancakes_small.jpg');
      articlePic.setAttribute('class','articleImg');
      articlePic.setAttribute('alt',"pictureHolder");

      // document.getElementById("articleHolder").unshift(newArticle_holder);
      let fullArticleHolder = document.getElementById("articleHolder")

      newArticle_holder.classList.add("article");
      newArticle_holder.appendChild(newArticle_content);
      newArticle_content.appendChild(newArticle_text);
      newArticle_text.appendChild(articleHeader);
      newArticle_text.appendChild(articleText);
      newArticle_content.appendChild(articlePic);



      fullArticleHolder.insertBefore(newArticle_holder,fullArticleHolder.childNodes[0]) 



      articleHeader.textContent = "Saturday = Preston Pancakes in the Park!";
      articleText.textContent = "9:00 a.m. Saturday at the city park pavilion. Come and get some pancakes while they're hot!"

  }
}

function setupEventHolder(jsonData,indexNumber) {
  // console.log(indexNumber)
  let fullArticleHolder = document.getElementById("articleHolder")
  let newArticle_holder = document.createElement("div");
  newArticle_holder.classList.add('naHolder');
  let newArticle_content = document.createElement("div");
  newArticle_content.classList.add('naContent');
  // newArticle_content.classList.add('acticleContent')
  let newArticle_text = document.createElement('div');
  newArticle_text.classList.add('naText');
  let articleHeader = document.createElement("h4");
  articleHeader.innerHTML = "Events"
  let articleList = document.createElement("ul");
  // console.log(jsonData.towns[indexNumber].name,jsonData.towns[indexNumber].events)
  for (i=0; i < jsonData.towns[indexNumber].events.length; i++) {
    // console.log(jsonData.towns[indexNumber].events[i]);
    let articleListItem = document.createElement('li');
    articleListItem.innerHTML = jsonData.towns[indexNumber].events[i];
    articleList.appendChild(articleListItem)
  }
  // console.log(articleList);

  newArticle_holder.classList.add("article");
  newArticle_holder.appendChild(newArticle_content);
  newArticle_content.appendChild(newArticle_text);
  newArticle_text.appendChild(articleHeader);
  newArticle_text.appendChild(articleList);
  fullArticleHolder.appendChild(newArticle_holder);
}
