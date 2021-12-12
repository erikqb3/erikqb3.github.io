afterLogIn();
checkLoggedIn();
afterContribute();
// prompt("Hellow Type something") //Cool!

function afterLogIn() {
  let prevPage = document.referrer;
  let fromVSC = "http://127.0.0.1:5502/Assignments/FinalProject/logIn/logIn.html"
  let fromPortal = "https://erikqb3.github.io/Assignments/FinalProject/logIn/logIn.html"
  console.log(prevPage);


  if ((prevPage == fromVSC) || (prevPage == fromPortal)) {
  //change card label
  let logInCard = document.getElementById("logIn");
  let logInLabel = logInCard.children[1]
  logInLabel.innerHTML = "Your Works"

  //change tab label
  let logInTab = document.getElementById("navBar").children[0].children[1].children[0];
  logInTab.innerHTML = "Your Works"

  // Logged In = True
  let loggedIn = true;
  localStorage.setItem("loggedIn",loggedIn)
  }
}

function afterContribute() {
  // console.log("help")
  let prevPage = document.referrer;
  let fromVSC = "http://127.0.0.1:5502/Assignments/FinalProject/contribute/contribute.html"
  let fromPortal = "https://erikqb3.github.io/Assignments/FinalProject/contribute/contribute.html"
  let thankYou = document.getElementById("thankYouMessage")
  
  console.log(prevPage);

  if ((prevPage == fromVSC) || (prevPage == fromPortal)) {
    thankYou.classList.remove("hidden");
    console.log("Works")
  }
  else {
    thankYou.classList.add("hidden");
    console.log("Still Works")
  }
  let welcomeBtn = document.getElementById("welcomeBtn");
  welcomeBtn.addEventListener('click',e=> {
    thankYou.classList.add("hidden");
  })
}


function checkLoggedIn() {
  // window.onload = console.log(localStorage.getItem("loggedIn"));
  isLoggedIn = localStorage.getItem("loggedIn");
  console.log(isLoggedIn);
}