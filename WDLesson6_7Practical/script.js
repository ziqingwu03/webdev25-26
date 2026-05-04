let data, info;

async function init(){   
  let link = "mvc.json"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision  = data[i];
    build += `<div class="fitted card">
                  <h3>${collision.crash_date}</h3>
                 <hr>
                 <p>Crashtime: ${collision.crash_time}</p>
                <p> borough: ${collision.borough}</p>
                <hr>
                <p># of persons killed:${collision.number_of_persons_killed}</p>
                 <hr>
                <p>factor vehicle: ${collision.contributing_factor_vehicle_1}</p>
                <hr>
                <p>Vehicle Type: ${collision.vehicle_type_code2}</p>
              </div>`;    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByBorough(){
  let output = document.getElementById("output");
  let borough = document.getElementById("borough").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let collision = data[i];
    if (collision.borough == borough){
  
       build += `<div class="fitted card">
                  <h3>${collision.crash_date}</h3>
                 <hr>
                 <p>Crashtime: ${collision.crash_time}</p>
                <p>borough: ${collision.borough}</p>
                <hr>
                <p># of persons killed:${collision.number_of_persons_killed}</p>
                 <hr>
                <p>factor vehicle: ${collision.contributing_factor_vehicle_1}</p>
                <hr>
                <p>Vehicle Type: ${collision.vehicle_type_code2}</p>
              </div>`; 

      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByContributingFactorVehicle(){
  let output = document.getElementById("output");
  let result = document.getElementById("result");
  let ContributingFactorVehicle = document.getElementById("contribuingfactorvehcile").value;

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let collision = data[i];

     if(collision.contributing_factor_vehicle_1 === ContributingFactorVehicle){
      build += `<div class="fitted card">
        <h3>${collision.crash_date}</h3>
                 <hr>
                 <p>Crashtime: ${collision.crash_time}</p>
                <p>borough: ${collision.borough}</p>
                <hr>
                <p># of persons killed:${collision.number_of_persons_killed}</p>
                 <hr>
                <p>factor vehicle: ${collision.contributing_factor_vehicle_1}</p>
                <hr>
                <p>Vehicle Type: ${collision.vehicle_type_code2}</p>
              </div>`; 
       ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.
function filterByVehicleType(){
  let output = document.getElementById("output");
  let result = document.getElementById("result");
  let VehicleType = document.getElementById("Type").value;

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){

    let collision = data[i];
    if(collision.vehicle_type_code2 == VehicleType){
      build += `<div class="fitted card">
        <h3>${collision.crash_date}</h3>
                 <hr>
                 <p>Crashtime: ${collision.crash_time}</p>
                <p>borough: ${collision.borough}</p>
                <hr>
                <p># of persons killed:${collision.number_of_persons_killed}</p>
                 <hr>
                <p>factor vehicle: ${collision.contributing_factor_vehicle_1}</p>
                <hr>
                <p>Vehicle Type: ${collision.vehicle_type_code2}</p>
              </div>`; ;
       ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

