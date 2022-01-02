/* Script.js */

//Custom Function
function calculateTip() {
    
    //Store the data of inputs
    var billAmount = document.getElementById("billAmount").value;
    var serviceQuality = document.getElementById("serviceQuality").value;
    var numPeople = document.getElementById("totalPeople").value;
    
    //Quick Validation
    if(billAmount === "" || serviceQuality == 0) {
        return window.alert("Please enter some value to use the calculator.");
        //the return will prevent the function from going on forever
    }
    
    // Check to see if this input is empty or less than or equal to 1
    if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
        
        document.getElementById("each").style.display = "none"; //hide each id
    } else {
        document.getElementById("each").style.display = "block";
    }
  if(numPeople === "" || numPeople <= 1) {
        numPeople = 1;
    document.getElementById("sab").style.display = "none"; //hide each id
    } else {
        document.getElementById("sab").style.display = "block";
    }
    
    //Do the Math for the Tip
    var total = (billAmount * serviceQuality) / numPeople;
    total = Math.round(total * 100) / 100;
    total = total.toFixed(2);   //make sure they always have two decimal places
    var total1 = total* numPeople;
    //total1 = Math.round(total1 * 100);
    total1 = total1.toFixed(2);
    //Display the Tip!
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;


document.getElementById("totalAmount").style.display = "block";
    document.getElementById("total1").innerHTML = total1;
}


// Hide tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";
document.getElementById("totalAmount").style.display = "none";
document.getElementById("sab").style.display = "none";

//Clicking the button calls our custom function

document.getElementById("calculate").onclick = function () { calculateTip(); }