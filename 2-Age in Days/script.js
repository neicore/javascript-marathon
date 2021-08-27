function ageInDays(birthYear) {
    birthYear = prompt("When were you born?");
    var today = new Date();
    var age = today.getFullYear() - birthYear;
    var ageindays = age * 365;
    document.getElementById("results").innerHTML = "You are " + ageindays + " days old!";
}

function reset() {
    document.getElementById("results").remove();
}