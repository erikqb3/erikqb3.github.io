
window.onload = (event) => {
    // const days = [
    //     'Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thurs.', 'Fri.', 'Sat.'
    // ]
    // const months = [
    //     'Jan.','Feb.','Mar.','Apr.','May','Jun.','Jul.','Aug.','Sept.','Oct.','Nov.','Dec.'
    // ]
    // const todaysDate = new Date();
    // const actualDate = todaysDate.getDate();
    // const dayName = days[todaysDate.getDay()];
    // const monthName = months[todaysDate.getMonth()];
    // const endings = ['st','nd','rd','th']
    // const hour = todaysDate.getHours();
    // var datesEnding;
    // if (actualDate == 1) {
    //     datesEnding = endings[0];
    // }
    // else if (actualDate == 2) {
    //     datesEnding = endings[1];
    // }
    // else if (actualDate == 3) {
    //     datesEnding = endings[2];
    // }
    // else if (actualDate >= 4) {
    //     datesEnding = endings[3];
    // }

    // const currentDate = dayName + ' ' + actualDate + datesEnding + '-' + monthName + '-' + todaysDate.getFullYear() + " " + hour + ":" + todaysDate.getMinutes();

    
    let lastModified = document.lastModified
    document.getElementById('currentdate').textContent = lastModified
}
