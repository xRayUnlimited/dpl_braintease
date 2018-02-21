// function that accepts two integers and display the larger.

var num1, num2
num1 = window.prompt("enter the first integer")
num2 = window.prompt("enter the second interger")

if(parseInt(num1, 10) > parseInt(num2, 10))
    {console.log("the larger number is"+ num1+ "num1")}
    else
    if(parseInt(num2, 10) > parseInt(num1, 10)) 
    {
    console.log("the larger number is"+ num1+ "num2")}                  
    else
  {console.log("The values "+ num1+ " and "+num2+ " are equal.");}

// uppercase first letters of string
function toTitleCase(str)
    { return str.replace(/\w\S*/g, function(txt)
        {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); 
    }

