var firstName = "Neema";
var secondName = "Adam";
console.log("Habari Dunia, \nnaitwa " + firstName + " " + secondName);

var birthYear = 1999;
var today = new Date();
var myAge = today.getFullYear() - birthYear;
console.log("My age is " + myAge);

//Function to get someone's birth year and calculate their age.
function calculateAge(birthyear) {
    var thatDay = new Date();
    var age = thatDay.getFullYear() - birthyear;
    console.log("\nYour Age is: " + age);
}
// var getBirthYear = prompt("What year were you born?");
//calculateAge(getBirthYear);

//Output to DOM
document.getElementById("habari-dunia").innerHTML = firstName + " " + secondName;

document.getElementById("footer").innerHTML = "Doge Lang&copy;" + " " + today.getFullYear();

//Array
let cars = new Array("audi, tata, toyota, ferari", "tesla, apple");

let countries = ['Tanzania', 'Kenya', 'Uganda', 'Rwanda', 'Burundi', [
    'nairobi', 'dodoma', 'kigali'
]];

console.log(cars[0]);

console.log(countries[5][0]);

// JSON is an array with objects as it's components.

//Objects
var employee = {
    'name': 'Bob',
    'skills': 'builder',
    'experience': 'entry',
    'age': '23'
}

var employees = [
    {
        'name': 'Bob',
        'skills': 'builder',
        'experience': 'entry',
        'age': '23'
    },

    {
        'name': 'Charles',
        'skills': 'accountant',
        'experience': 'juniour',
        'age': '25'
    },

    {
        'name': 'Bobo',
        'skills': 'IT',
        'experience': 'intern',
        'age': '16'
    }
]

console.log(employees[1].age);