//JS FOR ALL HTML
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




function fiveDayForecast () {
    console.log("hellow")
    const days = [
        'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'
    ]
    const todaysDate = new Date();
    let dayNumb = todaysDate.getDay()
    let dayName = days[dayNumb];
    const daysArray = document.querySelectorAll(".dayOfWeek")
     
    
    
    for (i=0; i < daysArray.length; i++) {
        daysArray[i].innerHTML = days[dayNumb];
        dayNumb += 1;
        if (dayNumb > 6) {
            dayNumb = 0;
        }
        console.log(dayNumb)
    }

}

