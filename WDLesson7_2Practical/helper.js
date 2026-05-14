// get() returns the element using document.getElementById().
function get(id){
  return document.getElementById(id);
}

// Challenge 3: Create the function showMap() that displays the map for a location [lat, lon]
function showMap(lat,lon){
  let location = [lat, lon];

    if(!mapObj){
      mapObj = L.map("map");
  } 
  let map = mapObj.setView(location, 14);// [lat, lon], zoom

  const tiles = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a>"
  }).addTo(map);

  let marker = L.marker(location).addTo(map)

}

// Challenge 4: Create the function card() to generate an appropriate info card with the button to view map
function card( info ){ 
  let build = `<div class="card fitted">
                  <h3>${info.crash_date}</h3>
                 <hr>
                 <p>Crashtime: ${info.crash_time}</p>
                <p>borough: ${info.borough}</p>
                <hr>
                <p># of persons killed:${info.number_of_persons_killed}</p>
                 <hr>
                <p>factor vehicle: ${info.contributing_factor_vehicle_1}</p>
                <hr>
                <p>Vehicle Type: ${info.vehicle_type_code2}</p>
                `;
                
                if(info.latitude && info.longitude){
                    build += `<input type="button" value="Map" 
                    onclick="showMap( ${info.latitude}, ${info.longitude})">
                    `;
                  }
    build +=    `</div>`;
  return build;  
}