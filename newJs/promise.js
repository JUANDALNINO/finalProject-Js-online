

// Function reservation
function promiseFunctionReservation(key) {
    
    const promiseRequest = new Promise((resolve, reject) => {
    
        loadingAlertThree();
    
        setTimeout(() => {
            
            if(key) {
                resolve(reservationLoad())
            } else {
                reject(alertNotReservation())
            }
    
        }, 2000);
    
    });
    
    promiseRequest.then(result => {
        console.log(result)
    })
    
    promiseRequest.catch(error => {
        console.log(error)
    })
}



// Function Init booking
function promiseFunctionBooking(key) {

    const promiseRequest = new Promise((resolve, reject) => {
    
        loadingAlertThree();
    
        setTimeout(() => {
            
            if(key) {
                resolve(loadBooking())
            } else {
                reject(somethingError())
            }
    
        }, 1500);
    
    });
    
    promiseRequest.then(result => {
        console.log(result)
    })
    
    promiseRequest.catch(error => {
        console.log(error)
    })
}


// Loading cars
function promiseFunctionLoadCars(key) {
    const promiseRequest = new Promise((resolve, reject) => {
    
        savingBooking();
    
        setTimeout(() => {
            
            if(key) {
                resolve(loadListCars())
            } else {
                reject(somethingError())
            }
    
        }, 1800);
    
    });
    
    promiseRequest.then(result => {
        console.log(result)
    })
    
    promiseRequest.catch(error => {
        console.log(error)
    })
}