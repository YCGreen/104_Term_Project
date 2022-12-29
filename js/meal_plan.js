//window.alert("Welcome to this website! Please allow chocolate chip cookies.");

var dateCreated = new Date(2022, 12, 26);

document.getElementById("dateCreated").innerText=dateCreated.toDateString();

function showConfirmation() {
    var today = new Date();
    const datePicker = document.getElementById("dateSelected");
    const nextDate = datePicker.value;
    const nextDate1 = new Date(nextDate);
    var dateDiff = (nextDate1 - today) / (1000 * 60 * 60 * 24);
    var dateD = Math.floor(dateDiff);
    window.alert("Meal plan saved on " + today + "! Congratulations on planning for " + nextDate1 + ", " + dateD + " days in advance.");
}

