window.onload = (event) => {
  let lastModified = document.lastModified
  // document.getElementById('currentdate').textContent = lastModified
}

let hamburger = document.querySelector("#navMenuButton");
// console.log(hamburger);
hamburger.addEventListener('click',toggleNav);

function toggleNav() {
  document.querySelector("#navBar").classList.toggle("hidden");
}

let startingWindowWidth = window.innerWidth;
// console.log(startingWindowWidth);
if (startingWindowWidth > 1200) {
  // console.log("Hi! I'm Honest!");
  document.querySelector('#navBar').classList.remove('hidden');
  // document.querySelector("#navMenuButton").classList.add('hidden');
  // document.querySelector('#name').setAttribute('text-size','4em');
}
else {
  document.querySelector('#navBar').classList.add('hidden');
  // ocument.querySelector("#navMenuButton").classList.remove('hidden');
}
