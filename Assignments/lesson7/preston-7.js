window.onload = (event) => {
    let lastModified = document.lastModified
    document.getElementById('currentdate').textContent = lastModified
}

let hamburger = document.querySelector("#navMenuButton");
// console.log(hamburger);
hamburger.addEventListener('click',toggleNav);

function toggleNav() {
    document.querySelector("#navBar").classList.toggle("hidden")
    console.log("Hello")
}

let startingWindowWidth = window.innerWidth;
console.log(startingWindowWidth);
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

prestonPancakes = () => {
    const date = new Date();
    const today = date.getDay();
    
    if (today == 5) {
        let message = document.getElementById("mainArticles_text1_p1");
        message.textContent = "Saturday = Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion."
        // console.log(message);
    }
}

prestonPancakes();