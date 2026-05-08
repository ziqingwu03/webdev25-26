//Data Source: https://data.cityofnewyork.us/City-Government/Open-Parking-and-Camera-Violations/nc67-uf89

let data, info, output; // global variables

async function init(){  
  let link = "data.js"; //let link = "https://data.cityofnewyork.us/resource/nc67-uf89.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();

  output = get("output");
  let build = "";
  let ct = 0;

  //Challenge 2: Test the function card() developed in Challenge 1 by displaying only the first violation to the webpage.(no for loop) data[0]
  
  output.innerHTML = card( data[0] );
}


  //Challenge 3: Display all the violations to the web page using the function card().(for loop

  for(let i = 0; i < data.length; i++){
    let parking = data[i];
    build += card(parking); 
    ct++;
  }
  result.innerHTML = `${ct} Results found`;
  output.innerHTML = build;


// Challenge 4: Create a function to filter the information and display only the cards that satisfy specfic condition(s). (searh)