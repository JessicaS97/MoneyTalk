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

function displayBudget() {
    let index;
    
    for(i=0; i<localStorage.length; i++) {
        if(localStorage.key(i) === 'Budget') {
            index = i;
        }
    }
    let budget = localStorage.key(index);
    let budgetNumber = localStorage.getItem(budget);
    return budgetNumber;
}

function sumAll() {
    let key, value, sum=0, index;
    for(let i=0; i<localStorage.length; i++) {
        key = localStorage.key(i);
        value = localStorage.getItem(key);
        value = parseInt(value);
        sum += value;
    }
    
    for(i=0; i<localStorage.length; i++) {
        if(localStorage.key(i) === 'Budget') {
            index = i;
        }
    }
    let budget = localStorage.key(index);
    let budgetNumber = localStorage.getItem(budget);
    sum -= parseInt(budgetNumber);
    let field = document.getElementsByClassName('sumAll');
    for(let i=0; i<field.length; i++) {
        field[i].innerHTML = `Total Spendings $${sum}`;
    }
}

function storeData() {

    let category = prompt("In what did you spend?");

    if (category == null) {
        return;
    } else if(category === "") {
        alert("Please enter a spending");
        return;
    };

    let spending = prompt("How much?");

    if(spending === "") {
        alert("Please enter how much you spent");
    } else if(category && spending) {
        category = capitalizeFirstLetter(category);
        localStorage.setItem(category, spending);
    };

    location.reload();
}

function loadStorage() {

    let field = document.getElementById('spendings');

        for(let i=0; i<localStorage.length; i++) {
            
            let key = localStorage.key(i);
            let value = localStorage.getItem(key);
            field.innerHTML += `${key} ${value}<br />`;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function deleteItem() {

    let items = {};

    for(let i=0; i<localStorage.length; i++) {
        let key = localStorage.key(i);
        let value = localStorage.getItem(key);

    }
}

function deleteAll() {
    let decision = confirm("Are you sure you want to delete all?");

    if(decision) {
        localStorage.clear();
    }
}

var button = document.getElementById('budget').addEventListener('click', buttonClick);
var budget = document.getElementById('goal').addEventListener('click', setBudget);

function buttonClick(e) {
    if (document.getElementById('budget').textContent === 'Budget') {
        document.getElementById('budget').textContent = `${displayBudget()}`;
    } else if (document.getElementById('budget').textContent === `${displayBudget()}`){
        document.getElementById('budget').textContent = 'Budget';
    }
}

function setBudget(e) {
    if (document.getElementById('goal').textContent === 'Click to set budget') {
        let answer = confirm("Set budget?");
        if(answer === false) {
            return;
        } else {
            let decision = prompt("New budget");
            if(decision === null) {
                return;
            } else {
                localStorage.setItem("Budget", decision);
                document.getElementById('goal').textContent = `${decision}`;
            }
        }
    } else if (document.getElementById('goal').textContent === 'Changed') {
        document.getElementById('goal').textContent = 'Click to set budget';
    }
}