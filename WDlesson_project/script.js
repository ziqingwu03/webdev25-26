let data, info;

async function init(){   
  let link = "data.json"; //let link = "https://data.cityofnewyork.us/resource/c3uy-2p5r.json";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i++){
    let tree  = data[i];
    build += `<div class="fitted card">
                  <h3>${tree.name}</h3>
                 <hr>
                 <p>measure: ${tree.measure}</p>
                <p> geo type name: ${tree.geo_type_name}</p>
                <hr>
                <p> time period:${tree.time_period}</p>
                 <hr>
                <p>geo_place_name: ${tree.geo_place_name}</p>
                <hr>
                <p>start date: ${tree.start_date}</p>
              </div>`;    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByName(){
  let output = document.getElementById("output");
  let Name = document.getElementById("name").value;
  let result = document.getElementById("result");
  
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let tree = data[i];
    if (tree.name ==Name){
  
       build += `<div class="fitted card">
                  <h3>${tree.name}</h3>
                 <hr>
                 <p>measure: ${tree.measure}</p>
                <p> geo type name: ${tree.geo_type_name}</p>
                <hr>
                <p> time period:${tree.time_period}</p>
                 <hr>
                <p>geo_place_name: ${tree.geo_place_name}</p>
                <hr>
                <p>start date: ${tree.start_date}</p>
              </div>`;

      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

function filterByGeoPlaceName(){
  let output = document.getElementById("output");
  let result = document.getElementById("result");
  let GeoPlaceName = document.getElementById("geoplacename").value;

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){
    let tree = data[i];

     if(tree.geo_place_name === GeoPlaceName){
      build += `<div class="fitted card">
                  <h3>${tree.name}</h3>
                 <hr>
                 <p>measure: ${tree.measure}</p>
                <p> geo type name: ${tree.geo_type_name}</p>
                <hr>
                <p> time period:${tree.time_period}</p>
                 <hr>
                <p>geo_place_name: ${tree.geo_place_name}</p>
                <hr>
                <p>start date: ${tree.start_date}</p>
              </div>`;
       ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}


function filterByGeoTypeName(){
  let output = document.getElementById("output");
  let result = document.getElementById("result");
  let GeoTypeName = document.getElementById("Type").value;

  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i++){

    let tree = data[i];
    if(tree.geo_type_name == GeoTypeName){
      build +=`<div class="fitted card">
                  <h3>${tree.name}</h3>
                 <hr>
                 <p>measure: ${tree.measure}</p>
                <p> geo type name: ${tree.geo_type_name}</p>
                <hr>
                <p> time period:${tree.time_period}</p>
                 <hr>
                <p>geo_place_name: ${tree.geo_place_name}</p>
                <hr>
                <p>start date: ${tree.start_date}</p>
              </div>`;
       ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}




///following code is for charts//


function complaintsByBrough(){
  //Discussion 1: Define variables to keep tally of complaints by borough
  let n20 = 0, pm = 0, O3 = 0;
  
  //Discussion 2: Traverse the data and use a decision to aggregate data by borough.
 for(let i = 0; i < data.length; i++){
    let complaint = data[i];
    if(complaint.borough == "QUEENS"){
      q++;
    }else if(complaint.borough == "MANHATTAN"){
      m++;
    }else if(complaint.borough == "BROOKLYN"){
      bk++;
    }else if(complaint.borough == "BRONX"){
      bx++;
    }else if(complaint.borough == "STATEN ISLAND"){
      s++;
    }
  }

  //Discussion 3: Setup the aggregated data as array of arrays to generate chart.
  // 1st position in each array is the label for the data
  let chartData = [
    ["QUEENS", q],
    ["MANHATTAN", m],
    ["BROOKLYN", bk],
    ["BRONX", bx],
    ["STATEN ISLAND", s]
  ];
  
  //Discussion 4: Retrieve chart type via user selection from drop-down.
  let chartType = document.getElementById("chartType").value;
  
  //Discussion 5: Display chart using displayChart() function.
  displayChart(chartData, "output", chartType);
}


// displayChart() accepts the data, an id of the container where to display the chart, and the type of chart to display in the container.
function displayChart( data, chart_id, chart_type ){
  let chart = c3.generate({
    bindto: `#${chart_id}`,
    data: {
      columns: data,
      type: chart_type
    }
  });
}


