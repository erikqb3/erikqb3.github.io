async function myFetch() {
  let response = await fetch("https://byui-cit230.github.io/weather/data/towndata.json")
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  return await response.json();
}

myFetch().then((jsonData) => {
  console.log(jsonData.towns)
})



function main () {
  const prestonPage = "http://127.0.0.1:5502/Assignments/lesson11/prestonFolder/preston.html"; //temporarily use live server
  const sodaSpringsPage = "http://127.0.0.1:5502/Assignments/lesson11/sodaSpringsFolder/sodaSprings.html";
  const fishHavenPage = "http://127.0.0.1:5502/Assignments/lesson11/fishHavenFolder/fishHaven.html";
  
  
  
  const currentPage = window.location.href;
  
  switch (currentPage) {
    case prestonPage:
      prestonPancakes()
      console.log("You are on the Preston Page");
      break;
    case sodaSpringsPage:
      console.log("You are on the Soda Springs Page");
      cityID = 5607916;
      break;
    case fishHavenPage:
      console.log("You are on the Fish Haven Page");
      cityID = 5585010;
      break;
    default:
  }
}


function prestonPancakes () {
  const date = new Date();
  const today = date.getDay();
  console.log(today);
  
  if ((today == 5) || (today == 6)) {
      let newArticle_holder = document.createElement("div");
      newArticle_holder.classList.add('naHolder')
      let newArticle_content = document.createElement("div");
      newArticle_content.classList.add('naContent')
      // newArticle_content.classList.add('acticleContent')
      let newArticle_text = document.createElement('div');
      newArticle_text.classList.add('naText')
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


main()