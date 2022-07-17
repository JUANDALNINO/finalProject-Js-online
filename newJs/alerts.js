//Loading Data Alert
function loadingAlertThree() {
  Swal.fire({
    icon: 'info',
    title: 'Loading...',
    showConfirmButton: false,
    timer: 3000
  })
}

// Something error
function somethingError() {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: 'Something went wrong!',
    timer: 3000
  })
}


// First book:
function alertFirstBook() {
    Swal.fire({
        title: "Missing Data",
        text: "Please select your data calendar",
        icon: "info",
    })
}


//Saving Booking:
function savingBooking() {
    Swal.fire({
        icon: 'warning',
        title: 'Saving and loading available cars',
        showConfirmButton: false,
        timer: 1800
      })
}


// Saving Car:
function savingCar(saveCar) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success m-2',
          cancelButton: 'btn btn-danger m-2'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "This will be your car",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Excellent!',
            'Your car has been saved',
            'success'
          )
          carSaved(saveCar);
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Choose another car',
            'error'
          )
        }
      })
}

// Load Finish Check
function loadFinishCheck(arrayBooking) {
  console.log(arrayBooking)
  Swal.fire(
    'Your reservation:',
    `Your pick up place: ${arrayBooking[0].location.country} ${arrayBooking[0].location.city} <br>
     From: ${arrayBooking[0].pickUpDate.day} ${arrayBooking[0].pickUpDate.month} ${arrayBooking[0].pickUpDate.year}<br>
     To: ${arrayBooking[0].returnDate.day} ${arrayBooking[0].returnDate.month} ${arrayBooking[0].returnDate.year}<br>
     Your Car: ${arrayBooking[1].carMake} ${arrayBooking[1].carModel} ${arrayBooking[1].carModelYear}<br>`,
    'success'
  )
}


// Don't exist reservations:
function alertNotReservation() {
  Swal.fire({
      title: "Sorry",
      text: "You don't have any reservations. Please book one.",
      icon: "error",
  })
}