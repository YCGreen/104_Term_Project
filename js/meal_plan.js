function showConfirmation() {
    let today = new Date();
    const newDate = getNum();
    let dateDiff = (newDate - today) / (1000 * 60 * 60 * 24);
    var dateD = Math.ceil(dateDiff);
    window.alert("Meal plan saved on " + today + "! Congratulations on planning for " + newDate + ", " + dateD + " days in advance.");
}

function getNum() {
    const datePicker = document.getElementById("dateSelected");
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

    const newDate1 = new Date(yearInt, monthInt-1, dayInt);

    return newDate1;

}
