// Array
let arrayCars = data["cars"];
let arrayCities = data["colombianCities"];
let arrayCalendar = data["calendar"];
let arrayBooking = [];






// Init App
initApp();
//initAPIS();



// Init apis
function initAPIS() {
    getApiCities();
    getApiDates();
    getApiCars();
}


//---------------------------------------------------------------------------------------------------------------------
//Frontend

// Function initApp
function initApp() {
    loadInterface();
}



// Load Interface
function loadInterface() {
    loadHeader();
    loadintro();
    loadFooter();
}

//Load Header:
function loadHeader() {
    let header = document.getElementById("header");
        header.innerHTML = `<header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                                <a href="#" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                                    <span class="fs-4">Rental Car Simulator</span>
                                </a>

                                <ul class="nav nav-pills">
                                    <li class="nav-item"><a href="#" class="nav-link text-dark" aria-current="page">Home</a></li>
                                    <li class="nav-item"><a href="#booking" class="nav-link text-dark">Book</a></li>
                                    <li class="nav-item"><a href="#listFind" class="nav-link text-dark">List and Find Cars</a></li>
                                    <button type="button" class="btn btn-warning" id="reservationBtn">My Reservation</button>
                                </ul>
        </header>`;
        btnReservation();
}

//Load Intro:
function loadintro() {
    let intro = document.getElementById("intro");
        intro.innerHTML = `<div class="row flex-lg-row-reverse align-items-center g-5 py-1">
        <div class="col-10 col-sm-8 col-lg-6">
            <img src="https://res.cloudinary.com/juandacloud/image/upload/v1658032696/js-final-proyect/back-01_uqiwsf.jpg" class="d-block mx-lg-auto img-fluid"
                alt="Bootstrap Themes" width="700" height="500" loading="lazy">
        </div>
        <div class="col-lg-6">
            <h1 class="display-5 fw-bold lh-1 mb-3">Welcome!</h1>
            <p class="lead">1. Init your booking <br>
                            2. Select your location, pick up date and return date <br>
                            3. Select your car <br>
                            4. Finish your reservation</br>
                            5. Check your reservation
            </p>

            <button type="button" class="btn btn-warning btn-lg px-3 gap-3" id="initBook">Init Booking</button>
        </div>
        
    </div>`

    // Init Booking
    let initBook = document.getElementById("initBook");
    initBook.addEventListener("click", function() {
        promiseFunctionBooking(true);
    })
}

// Load Footer
function loadFooter() {
    let footer = document.getElementById("footer");
    footer.innerHTML = ` <footer class="py-3 my-4">
    <p class="text-center text-muted">By Juan David Lizarralde Niño</p>
    <p class="text-center text-muted">For JavaScript Coderhouse - 2022</p>
</footer>`;
}

// Load booking:
function loadBooking() {
    let booking = document.getElementById("booking");
    booking.innerHTML = `<h2 class="pb-2 border-bottom">Booking</h2>
    <div class="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div class="col d-flex align-items-start">
            <div
                class="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                    class="bi bi-shop" viewBox="0 0 16 16">
                    <path
                        d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
                </svg>
            </div>
            <div>
                <h2>Pickup location</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                    sentence and probably just keep going until we run out of words.</p>
                <div class="container d-inline-flex p-2">
                    <select class="form-select" aria-label="Default select example" id="countryList">
                        <option selected disabled value="0">Country</option>
                    </select>

                    <select class="form-select" aria-label="Default select example" id="cityList">
                        <option selected disabled value="0">City</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col d-flex align-items-start">
            <div
                class="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                    class="bi bi-calendar2-plus" viewBox="0 0 16 16">
                    <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path
                        d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4zM8 8a.5.5 0 0 1 .5.5V10H10a.5.5 0 0 1 0 1H8.5v1.5a.5.5 0 0 1-1 0V11H6a.5.5 0 0 1 0-1h1.5V8.5A.5.5 0 0 1 8 8z" />
                </svg>
            </div>
            <div>
                <h2>Pick up date</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                    sentence and probably just keep going until we run out of words.</p>
                <!--Dates-->
                <div class="container d-inline-flex p-2">
                    <!--Day-->
                    <select class="form-select" aria-label="Default select example" id="pickUpDay">
                        <option selected disabled value="0">Day</option>
                    </select>
                    <!--Month-->
                    <select class="form-select" aria-label="Default select example" id="pickUpMonth">
                        <option selected disabled value="0">Month</option>
                    </select>
                    <!--Year-->
                    <select class="form-select" aria-label="Default select example" id="pickUpYear">
                        <option selected disabled value="0">Year</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="col d-flex align-items-start">
            <div
                class="icon-square bg-light text-dark d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor"
                    class="bi bi-calendar2-check" viewBox="0 0 16 16">
                    <path
                        d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                    <path
                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                </svg>
            </div>
            <div>
                <h2>Return date</h2>
                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another
                    sentence and probably just keep going until we run out of words.</p>
                <!--Dates-->
                <div class="container d-inline-flex p-2">
                    <!--Day-->
                    <select class="form-select" aria-label="Default select example" id="returnDay">
                        <option selected disabled value="0">Day</option>
                    </select>
                    <!--Month-->
                    <select class="form-select" aria-label="Default select example" id="returnMonth">
                        <option selected disabled value="0">Month</option>
                    </select>
                    <!--Year-->
                    <select class="form-select" aria-label="Default select example" id="returnYear">
                        <option selected disabled value="0">Year</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-warning btn-lg px-3 gap-3" id="seeList">List Cars</button>
          </div>`;

          loadData();
          btnLoadList();
}

// Load ListCars
function btnLoadList() {
    let btnListBook = document.getElementById("seeList");
    btnListBook.addEventListener("click", function() {
        bookingSteps();
    })
}

function loadListCars() {
    let listFind = document.getElementById("listFind");
    listFind.innerHTML = `<nav class="navbar mb-4">
    <div class="container-fluid">
        <h2 class="pb-2 border-bottom">List Cars</h2>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search Car" aria-label="Search" id="inputSearch">
            <button class="btn btn-success" id="btnSearch">Search</button>
        </form>
    </div>
</nav>
<nav class="navbar mb-4">
    <div class="container-fluid d-flex justify-content-center">
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-warning btn-lg px-3 gap-3" id="listCars">Available cars</button>
          </div>
    </div>
</nav>

<div class="carListContainer text-center" id="carListFind">
</div><!-- /.row -->`;

    printListcars();
}


//---------------------------------------------------------------------------------------------------------------------
//Load data
function loadData() {
    // Booking
    loadDatesDays();
    loadDatesMonths();
    loadDatesYear();
    loadCountries();
    loadCities();
}



//---------------------------------------------------------------------------------------------------------------------
// Scripts


// Function load dates days
function loadDatesDays() {

    let container = "";
    let containerTwo = "";

    for (const day of arrayCalendar[0]["days"]) {

        let yearContainer = document.getElementById("pickUpDay");
        container = document.createElement("option");

        container.innerHTML = `<option>${day}</option>`;

        yearContainer.appendChild(container);

        let yearContainer2 = document.getElementById("returnDay");
        containerTwo = document.createElement("option");

        containerTwo.innerHTML = `<option>${day}</option>`;

        yearContainer2.appendChild(containerTwo);
    }
}


// Function load dates months
function loadDatesMonths() {

    let container = "";
    let containerTwo = "";

    for (const day of arrayCalendar[0]["months"]) {

        let yearContainer = document.getElementById("pickUpMonth");
        container = document.createElement("option");

        container.innerHTML = `<option>${day}</option>`;

        yearContainer.appendChild(container);

        let yearContainer2 = document.getElementById("returnMonth");
        containerTwo = document.createElement("option");

        containerTwo.innerHTML = `<option>${day}</option>`;

        yearContainer2.appendChild(containerTwo);
    }
}


// Function load dates year
function loadDatesYear() {

    let container = "";
    let containerTwo = "";

    let year = arrayCalendar[0]["year"];

    let yearContainer = document.getElementById("pickUpYear");
    container = document.createElement("option");

    container.innerHTML = `<option value="1">${year}</option>`;

    yearContainer.appendChild(container);

    let yearContainer2 = document.getElementById("returnYear");
    containerTwo = document.createElement("option");

    containerTwo.innerHTML = `<option value="1">${year}</option>`;

    yearContainer2.appendChild(containerTwo);
}


//--------------- Funcion imprimir datos locaciones:
// Dates

// Function load countries
function loadCountries() {

    let container = "";

    let city = arrayCities[0].country;

    let yearContainer = document.getElementById("countryList");
    container = document.createElement("option");

    container.innerHTML = `<option>${city}</option>`;

    yearContainer.appendChild(container);

}

// Function load cities
function loadCities() {

    for (let i = 0; i < arrayCities.length; i++) {

        let city = arrayCities[i].city;

        let cityContainer = document.getElementById("cityList");
        let container = document.createElement("option");

        container.innerHTML = `<option>${city}</option>`;

        cityContainer.appendChild(container);
    }
}


// Booking:
function bookingSteps() {
    let bookGeneral = bookingGeneral();
    let bookObject = bookingObject(bookGeneral);

    if(bookObject != undefined) {
        arrayBooking.push(bookObject);// Booking data
        promiseFunctionLoadCars(true);
    }
}



// Booking General:
function bookingGeneral() {
    //Location
    let countryList = document.getElementById("countryList").value;
    let cityList = document.getElementById("cityList").value;
    //PickUp Date
    let pickUpDay = document.getElementById("pickUpDay").value;
    let pickUpMonth = document.getElementById("pickUpMonth").value;
    let pickUpYear = document.getElementById("pickUpYear").value;
    //Return date
    let returnDay = document.getElementById("returnDay").value;
    let returnMonth = document.getElementById("returnMonth").value;
    let returnYear = document.getElementById("returnYear").value;

    // Conditional
    if(countryList != 0 && cityList != 0 &&
        pickUpDay != 0 && pickUpMonth != 0 && pickUpYear != 0 &&
        returnDay != 0 && returnMonth != 0 && returnYear != 0) {
        return {countryList, cityList, pickUpDay, pickUpMonth, pickUpYear, returnDay, returnMonth, returnYear}
    } else {
        alertFirstBook();
    }
}

// Booking object
function bookingObject(bookGeneral) {
    let finalObjectBooking = {
        location: {
            country: bookGeneral.countryList,
            city: bookGeneral.cityList
        },
        pickUpDate: {
            day:  Number(bookGeneral.pickUpDay),
            month: bookGeneral.pickUpMonth,
            year: Number(bookGeneral.pickUpYear),
        },
        returnDate: {
            day: Number(bookGeneral.returnDay),
            month: bookGeneral.returnMonth,
            year: Number(bookGeneral.returnYear),
        }
    }
    return finalObjectBooking;
}




//--------------- Funcion imprimir carros:
function printListcars() {
    const btnListCars = document.getElementById("listCars");
    btnListCars.addEventListener("click", function () {
        loadCars(arrayCars);
    });

    // Btn
    const btnSearch = document.getElementById("btnSearch");
    btnSearch.addEventListener("click", function (event) {
        event.preventDefault();

        inputSearching();
    });
}

//console.log(jsonArray["cars"]);

function loadCars(listCars) {

    let carContainer = document.getElementById("carListFind");
    carContainer.innerHTML = "";

    listCars.forEach((car) => {

        let carContainer = document.getElementById("carListFind");
        let container = document.createElement("div");

        container.innerHTML = `<div class="card p-2 cardCar">
        <img src="https://res.cloudinary.com/juandacloud/image/upload/v1658024363/js-final-proyect/carB_yavtjq.svg" class="card-img-top" alt="">
        <div class="card-body">
            <h5 class="card-title">${car.carMake}</h5>
            <p class="card-text">Model: ${car.carModel}</p>
            <p class="card-text">Year: ${car.carModelYear}</p>
            <a class="btn btn-primary carSelected" id=${car.id}>Select</a>
        </div>
    </div>`;

        carContainer.appendChild(container);
    });
    selectCar(listCars);
}


// Buscar
function inputSearching() {
    const inputSearch = document.getElementById("inputSearch").value;

    let foundCar = findCar(inputSearch);
    loadCars(foundCar);
}

// Input
// Buscar Carro
function findCar(inputSearch) {
    let returnFind = arrayCars.filter(car =>
        car.carMake.toLowerCase().includes(inputSearch.toLowerCase()) ||
        car.carModel.toLowerCase().includes(inputSearch.toLowerCase())
    );

    return returnFind;
}



// Select car
function selectCar(listCars) {
    let carSelected = document.getElementsByClassName("carSelected");
    for (let i = 0; i < carSelected.length; i++) {
        carSelected[i].addEventListener("click", function () {
            let saveCar = {
                id: this.id,
                carMake: listCars[i].carMake,
                carModel: listCars[i].carModel,
                carModelYear: listCars[i].carModelYear,
            }
            savingCar(saveCar);
            }
        )
    }
}


function carSaved(saveCar) {
    if(arrayBooking.length >= 2) {
        arrayBooking.pop();
        arrayBooking.push(saveCar);
        loadFinishCheck(arrayBooking);
        reservationSave(arrayBooking);
    } else {
        arrayBooking.push(saveCar);
        loadFinishCheck(arrayBooking);
        reservationSave(arrayBooking);
    }
}


// Btn reservation
function btnReservation() {
    let btnReservation = document.getElementById("reservationBtn");
    btnReservation.addEventListener("click", function() {
        // Load reservation

        let actReser = localStorage.getItem("myReservation");

        if(!actReser) {
            promiseFunctionReservation(false);
        } else {
            promiseFunctionReservation(true);
        }
    })
}