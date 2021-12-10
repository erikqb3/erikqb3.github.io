goLogIn();

function goLogIn() {
  let createAccountBtn = document.getElementById("goBack");
  createAccountBtn.addEventListener('click', e=> {
    location.href="../logIn/logIn.html";
  })
}