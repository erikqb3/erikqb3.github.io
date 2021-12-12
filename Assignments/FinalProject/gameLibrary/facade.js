goGameLibrary();





function goGameLibrary() {
  let currentPage = window.location.href;
  console.log(currentPage)
  let tryAgain = document.getElementById("gameMessage");
  tryAgain.addEventListener('click',e=> {
    location.href = "../gameLibrary/gameLibrary.html";
    // if (currentPage == "http://127.0.0.1:5502/Assignments/FinalProject/gameLibrary/facade.html") {
    //   location.href = "http://127.0.0.1:5502/Assignments/FinalProject/gameLibrary/gameLibrary.html";
    // }
    // else {
    //   location.href = "https://erikqb3.github.io/Assignments/FinalProject/gameLibrary/gameLibrary.html"
    // }

  })
}


