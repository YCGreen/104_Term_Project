//window.alert("Welcome to this website! Please allow chocolate chip cookies.");

var created = new Date(2022, 12, 26);

document.getElementById("dateCreated").innerText=created.toDateString();


function showConfirmation() {
    var today = new Date();
    var datePicker = document.getElementById("dateSelected");
    var nextDate = datePicker.value;
    const dateDiff = (nextDate - today) / (1000 * 60 * 60 * 24);
    window.alert("Meal plan saved on " + today + "! Congratulations on planning for " + nextDate +".");
}

