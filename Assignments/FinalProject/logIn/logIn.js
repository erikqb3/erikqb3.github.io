goCreateLogIn();

function goCreateLogIn() {
  let createAccountBtn = document.getElementById("createAccount");
  createAccountBtn.addEventListener('click', e=> {
    location.href="../createAcount/createAcount.html";
    console.log("hellow")
  })
}