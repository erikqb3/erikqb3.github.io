//JS FOR ALL HTML

//NAV TOGGLE STUFF...?
window.onload = (event) => {
    let lastModified = document.lastModified
    document.getElementById('currentdate').textContent = lastModified
}

let hamburger = document.querySelector("#navMenuButton");
// console.log(hamburger);
hamburger.addEventListener('click',toggleNav);

function toggleNav() {
    document.querySelector("#navBar").classList.toggle("hidden");
}

let startingWindowWidth = window.innerWidth;
// console.log(startingWindowWidth);
if (startingWindowWidth > 1000) {
    // console.log("Hi! I'm Honest!");
    document.querySelector('#navBar').classList.remove('hidden');
    document.querySelector('#socialMediaLinks').classList.remove('hidden');
    // document.querySelector("#navMenuButton").classList.add('hidden');
    document.querySelector('#name').setAttribute('text-size','4em');
}
else {
    document.querySelector('#navBar').classList.add('hidden');
    document.querySelector('#socialMediaLinks').classList.add('hidden');
    // ocument.querySelector("#navMenuButton").classList.remove('hidden');
}

////////////////////////////////////////////////////////////////////////////////////////////////

// MAP ON ARTICLE PAGES ONLY
const fromPortal = window.location.href
const fromLiveServer = window.location.href


// if currentPage == 


