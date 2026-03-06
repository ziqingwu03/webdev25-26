/* Challenge 2: Create the function that will calculate the balance in an account using compound 
interest after t number of years.

Notes:
1) Don't let the formula scare you.  Simply translate it into JS
2) Create a for loop where the loop variable is t and the condition ends at the number of years 
the user specifies in the text input.
3) Use a build variable to create an output that looks like this
Year 1: $xxxxxx
Year 2: $xxxxxx
Year 3: $xxxxxx
...
Year N: $xxxxxx
*/

function compound_int (){
    let output= document.getElementBy("output");
    let Amount = parseFloat(document.getElementBy("A").value);
    let p = parseFloat(document.getElementBy("A").value);
    let yrs = parseInt(document.getElementBy("T").value);
    let r = parseFloat(document.getElementBy("R").value);
    let n = parseInt(document.getElementBy("N").value);
    let buttom = document.getElementBy("buttom").value);
    let bulid ="";

    for (let t=0; t<=yrs; t+=1){
        let A = p *Math.pow(1 + r/n, n*t);
        build += 'year ${t}: $ $[A.toFixed(2)} <br>';
    }
 output.innerHtml=bulid;

}


