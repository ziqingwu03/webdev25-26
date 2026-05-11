//The function get() below accepts an id of an element and returns the actual element with that id.
//This function serves to shorten the code previously used to get an element with getElementByID().
function get(id){
  return document.getElementById(id);
}

//Challenge 1: Create a function card() that accepts the JSON data for each violation, then generates and returns an appropriate card for the violation.
function card(parking){
  let build="";
    build+= `<div class="card">
               <h3>state: ${parking.state}</h3>
                <p>license type: ${parking.license_type}</p>
                <p>county: ${parking.county}</p>
                <p>parking date: ${parking.issue_date}</p>
    </div>`;
    return build;
}


