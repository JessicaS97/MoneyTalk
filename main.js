function renderTime() {
    let myDate = new Date();
    let day = myDate.getDay();
    let month = myDate.getMonth();
    let monthDay = myDate.getDate();
    let dayArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let clock = document.getElementById("displayDate");
    clock.textContent = `${dayArray[day]}, ${monthDay} ${monthArray[month]}`;
    clock.innerText = `${dayArray[day]}, ${monthDay} ${monthArray[month]}`;

    setTimeout("renderTime()", 1000);
}

function renderMonth() {
    let myDate = new Date();
    let month = myDate.getMonth();
    let monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let clock = document.getElementById('displayDate');
    clock.textContent = `${monthArray[month]}`;
    clock.innerHTML = `${monthArray[month]}`;

    setTimeout("renderMonth()", 1000);
}