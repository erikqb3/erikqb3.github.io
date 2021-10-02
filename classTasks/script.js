changeBackgroundColor();
doubleSize();

function showIt() {
    document.getElementById('personal_section').style.visibility = "visible";
}
setTimeout("showIt()", 1000); //Shows after 1 second

function showIt2() {
    document.getElementById('business_section').style.visibility = "visible";
}
setTimeout("showIt2()", 2000); //Shows after 2 second

function showIt3() {
    document.getElementById('enterprise_section').style.visibility = "visible";
}
setTimeout("showIt3()", 3000); //Shows after 3 second

function changeBackgroundColor() {
    document.getElementById("popular_heading").style.backgroundColor = "#ffcf2d";
}


function doubleSize() { //bulletpoint4, Erik
    document.querySelectorAll(".price_span")[1].style.fontSize = "90px";
    document.querySelectorAll(".sups")[2].style.fontSize = "50px";
    document.querySelectorAll(".sups")[3].style.fontSize = "50px";
    document.querySelector("#business_section").style.height ="655px";
}

let buttons = document.querySelectorAll(".signupbtn")
buttons.forEach(button => {
    button.style.backgroundColor = "#17ace8";
    button.onclick = function() { signUpAlert() };
})

function signUpAlert() {
    alert("You have signed up!");
}
