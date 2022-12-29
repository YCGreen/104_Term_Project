//window.alert("Welcome to this website! Please allow chocolate chip cookies.");

let dateCreated = new Date(2022, 12, 26);

document.getElementById("dateCreated").innerText=dateCreated.toDateString();

function showConfirmation() {
    let today = new Date();
    const newDate = getNum();
    let dateDiff = (newDate - today) / (1000 * 60 * 60 * 24);
   // var dateD = Math.floor(dateDiff);
    window.alert("Meal plan saved on " + today + "! Congratulations on planning for " + newDate + ", " + dateDiff + " days in advance.");
}

function getNum() {
  //  const datePicker = document.getElementById("dateSelected");
    const datePicker = "2023-01-01";
    let nextDate = datePicker.value;

    var year = "";
    for(let i = 0; i < 4; i++) {
        year += nextDate.charAt(i);
    }
    let yearInt = parseInt(year);

    var month = "";
    for(let i = 5; i < 7; i++) {
        month += nextDate.charAt(i);
    }
    let monthInt = parseInt(month);

    var day = "";
    for(let i = 8; i < nextDate.length; i++) {
        day += nextDate.charAt(i);
    }
    let dayInt = parseInt(day);

    const newDate1 = new Date(yearInt, monthInt, dayInt);

    return newDate1;

}
