window.addEventListener('DOMContentLoaded', async function() {
  let response = await fetch('https://kiei451.com/api/rides.json')
  let json = await response.json()

  // writes the returned JSON to the console
  console.dir(json)
  
  // 🔥 start here: write the recipe (algorithm), then write the code
  // starting to define necessary variables, etc. upfront 

  // Loop through the products data
  for (let i=1; i<json.length; i++) {

    // define looped variables
    let details = json[i].passengerDetails
      let name = `${details.first} ${details.last}`
    let pickup = json[i].pickupLocation
      let pickupAdd1 = pickup.address
      let pickupAdd2 = `${pickup.city}, ${pickup.state} ${pickup.zip}`
    let dropoff = json[i].dropoffLocation
      let dropoffAdd1 = dropoff.address
      let dropoffAdd2 = `${dropoff.city}, ${dropoff.state} ${dropoff.zip}`
    let purpleReq = json[i].purpleRequested
    let numOfPass = json[i].numberOfPassengers
    let rideStatus

    // Uber status if loop to define
    if (purpleReq == 1) {rideStatus = `Purple`}
    else if (purpleReq == 0 && numOfPass > 3) {rideStatus = `XL`}
    else {rideStatus = `X`}

    // Create a variable for the HTML element we're going to add to
    let rides = document.querySelector(`.rides`)

    // Insert HTML into the page using javascript with .rides objects
    rides.insertAdjacentHTML(`beforeend`,`
      <h1 class="inline-block mt-8 px-4 py-2 rounded-xl text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
        <i class="fas fa-car-side"></i>
        <span>Noober ${rideStatus}</span>
      </h1>

      <div class="border-4 border-gray-900 p-4 my-4 text-left">
        <div class="flex">
          <div class="w-1/2">
            <h2 class="text-2xl py-1">${name}</h2>
            <p class="font-bold text-gray-600">${details.phoneNumber}</p>
          </div>
          <div class="w-1/2 text-right">
            <span class="rounded-xl bg-gray-600 text-white p-2">
              ${numOfPass} passengers
            </span>
          </div>
        </div>
        <div class="mt-4 flex">
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">PICKUP</div>
            <p>${pickupAdd1}</p>
            <p>${pickupAdd2}</p>
          </div>
          <div class="w-1/2">
            <div class="text-sm font-bold text-gray-600">DROPOFF</div>
            <p>${dropoffAdd1}</p>
            <p>${dropoffAdd2}</p>
          </div>
        </div>
      </div>
    `)
  }
})
