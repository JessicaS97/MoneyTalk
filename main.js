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

function sumAll() {

}

function storeData() {
    let category = prompt("In what did you spend?");
    let spending = prompt("And how much?");

    if(category === "") {
        alert("Please enter in what did you spend your money");
    } else if(spending === "") {
        alert("Please enter how much you spent");
    } else if(category && spending) {
        category = capitalizeFirstLetter(category);
        localStorage.setItem(category, spending);
    } else {
        alert("User cancelled");
    }

    loadStorage();
}

function loadStorage() {

    let field = document.getElementById('pieChart');

        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            field.innerHTML += `${key} ${value}<br />`;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}