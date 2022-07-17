
// Get Cars
function getApiCars() {
    fetch("http://localhost:3000/cars")
    .then(response => response.json()).then(cars => arrayApiCars(cars));
}

function arrayApiCars(api) {
    arrayCars = api;
}

// Get Cities
function getApiCities() {
    fetch("http://localhost:3000/colombianCities")
    .then(response => response.json()).then(cities => arrayApiCities(cities));
}

function arrayApiCities(api) {
    arrayCities = api;
}

// Get Dates
function getApiDates() {
    fetch("http://localhost:3000/calendar")
    .then(response => response.json()).then(dates => arrayApiDates(dates));
}

function arrayApiDates(api) {
    arrayCalendar = api;
}