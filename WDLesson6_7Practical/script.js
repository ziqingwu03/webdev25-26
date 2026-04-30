let data, info;

async function init(){   
  let link = "mvc.jason"; //let link = "https://data.cityofnewyork.us/resource/h9gi-nx95.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let collision  = data[i];
    build += `<div class="fitted card">
                  <h3>${collision.crash_date}</h3>
                 <hr>
                 <p>${collision.crash_time}</p>
                <p>${collision.number_of_persons_injured}</p>
                <p>${collision.number_of_persons_killed}</p>
                 <hr>
                <p>${collision.number_of_pedestrians_injured}</p>
                <hr>
                <p>${collision.number_of_pedestrians_killed}</p>
              </div>`    
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
    if(collison.borough == borough){
       build += `<div class="fitted card">
        <h3>${collision.crash_date}</h3>
        <hr>
        <p>${collision.crash_time}</p>
        <p>${collision.number_of_persons_injured}</p>
        <p>${collision.number_of_persons_killed}</p>
        <hr>
        <p>${collision.number_of_pedestrians_injured}</p>
        <hr>
        <p>${collision.number_of_pedestrians_killed}</p>
      </div>`;
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.
function filterByZip(){
  let output = document.getElementById("output");
  let result = document.getElementById("result");
  let zipcode = document.getElementById("zipcode").value;

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let collision = data[i];

     if(collison.zipcode == zipcode){
      build += `<div class="fitted card">
        <h3>${collision.crash_date}</h3>
        <hr>
        <p>${collision.crash_time}</p>
        <p>${collision.number_of_persons_injured}</p>
        <p>${collision.number_of_persons_killed}</p>
        <hr>
        <p>${collision.number_of_pedestrians_injured}</p>
        <hr>
        <p>${collision.number_of_pedestrians_killed}</p>
      </div>`;
       ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.
function filterByCrash(){
  let output = document.getElementById("output");
  let result = document.getElementById("result");
  let crash = document.getElementById("record").value;

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let collision = data[i];
    
     if(collison.crash == crash){
      build += `<div class="fitted card">
        <h3>${collision.crash_date}</h3>
        <hr>
        <p>${collision.crash_time}</p>
        <p>${collision.number_of_persons_injured}</p>
        <p>${collision.number_of_persons_killed}</p>
        <hr>
        <p>${collision.number_of_pedestrians_injured}</p>
        <hr>
        <p>${collision.number_of_pedestrians_killed}</p>
      </div>`;
       ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
