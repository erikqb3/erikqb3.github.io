let startTime = new Date().getMilliseconds();


async function myFetch() {
  let response = await fetch("https://randomuser.me/api/")
  if (!response.ok) {
    throw new Error(`HTTP error! status : ${response.status}`);
  }
  return await response.json();
}

myFetch().then((jsonData) => {
let picture = jsonData.results[0].picture.large;
document.getElementById('picture').setAttribute('src', picture);

let fullName = jsonData.results[0].name.first+ " " +jsonData.results[0].name.last;
document.querySelector('.name').innerHTML = fullName;

let gender = jsonData.results[0].gender;
document.querySelector('.gender').innerHTML = gender;

let email = jsonData.results[0].email;
document.querySelector('.email').innerHTML = email;

let password = jsonData.results[0].login.password;
document.querySelector('.password').innerHTML = password;

let cityCountry  = jsonData.results[0].location.city + ", " + jsonData.results[0].location.country;
document.querySelector('.location').innerHTML = cityCountry;

let dob = jsonData.results[0].dob.date;
let birthYear = new Date(dob).getFullYear();
document.querySelector('.birthYear').innerHTML = birthYear;

let months = [
    'January','Febuary','March','April','May','June','Jul.','August','September','October','November','December'
]
let birthMonth = months[new Date(dob).getMonth()];
document.querySelector('.birthMonth').innerHTML = birthMonth;


let endTime = new Date().getMilliseconds();
let timeDiff = endTime-startTime;
if (timeDiff < 0) {
  timeDiff = (1000-startTime)+endTime;
}
else {
}

document.querySelector('#timeDiff').innerHTML = timeDiff;
})