function startingStuff() {
  window.onload = (event) => {
    let lastModified = document.lastModified
  }
  
  let hamburger = document.querySelector("#navMenuButton");
  hamburger.addEventListener('click',toggleNav);

  let startingWindowWidth = window.innerWidth;
  if (startingWindowWidth > 1200) {
    document.querySelector('#navBar').classList.remove('hidden');
  }
  else {
    document.querySelector('#navBar').classList.add('hidden');
  }


  let logo = document.getElementById('logo');
  logo.addEventListener('click', e=> {
    console.log("hellow")
    location.href = "../home/index.html";
  })
}


function toggleNav() {
  document.querySelector("#navBar").classList.toggle("hidden");
}

startingStuff();