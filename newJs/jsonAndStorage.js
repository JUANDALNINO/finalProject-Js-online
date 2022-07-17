// Function for save on LocalStorage:
function reservationSave(array) {
    let bookJson = JSON.stringify(array);
    localStorage.setItem("myReservation", bookJson);
}


// Function for Load of localstorage:
let arrayReservationLoad = [];
function reservationLoad() {
    let loadBookJson = localStorage.getItem("myReservation");
    arrayReservationLoad = JSON.parse(loadBookJson);
    loadFinishCheck(arrayReservationLoad);
}
