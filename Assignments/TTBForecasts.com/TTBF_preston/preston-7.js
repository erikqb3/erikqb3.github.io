//JS FOR PRESON TAB ONLY
if ((window.location.href == "https://erikqb3.github.io/Assignments/lesson7/preston-7.html") || (window.location.href =="http://127.0.0.1:5502/Assignments/lesson10/preston-10.html")) {
    prestonPancakes()
    fiveDayForecast()
}
else{}

function prestonPancakes () {
    const date = new Date();
    const today = date.getDay();
    console.log(today);
    
    if (today == 5) {
        let message = document.getElementById("mainArticles_text1_p1");
        message.textContent = "Saturday = Preston Pancakes in the Park! \n9:00 a.m. Saturday at the city park pavilion."

    }
}

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

