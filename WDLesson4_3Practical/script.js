/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
       function BMI() {
          let wt =parseFloat (document.getElemetById("weight").value);
          let ht =parseFloat (document.getElemetById("height").value);
          let output =document.getElementById("output")
          let status =" ";
          let imagefilename=" ";
          let BMI = 703 * wt/(ht)**2
              if(BMI < 18.5){
                     status ="udnerweight";
                     filename="underweight.jpg";
              } else if(BMI >= 18.5 && BMI <=24.9){
                     status ="Healthy Weight";
                     filename ="healthyweight.png";

              } else if (BMI >= 25 && BMI <=29.9) {
                     status= "overweight";
                     filename= "overweight.png";
              } else if (BMI >=30){
                     status ="Obesity";
                     filename="obeseweight.png";
              }
              
              
       }
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

