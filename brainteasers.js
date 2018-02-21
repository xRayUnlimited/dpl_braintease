// function that accepts two integers and display the larger.

var num1, num2
num1 = window.prompt("enter the first integer")
num2 = window.prompt("enter the second interger")

if(parseInt(num1, 10) > parseInt(num2, 10))
    {console.log("the larger number is"+ num1+ "num1")}
    else
    if(parseInt(num2, 10) > parseInt(num1, 10)) 
    {
    window.alert("the larger number is"+ num1+ "num2")}                  
    else
  window.alert("The values "+ num1+ " and "+num2+ " are equal.");

// string checker

var x = "this is a string";
if (typeof x === 'string') {}

// sort numbers

var score = [50,  100, 99, 2, 67, 70];
score.sort(function (a, b) {b-a});

// uppercase first letters of string
var str = prompt()
function toTitleCase(str)
    { return str.replace(/\w\S*/g, function(txt)
        {return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}); 
    }

// sum the multiples of 3, 5
var sum = 0;
for (var x = 0; x < 1000; x++)
{ if (x % 3 === 0 || x % 5 === 0)
    { sum += x;}
}
console.log(sum);

//construct pattern using loop

var x,y,chr;
for(x = 1; x <= 6; x++)
{ for (y = 1; y < x; y++)
     {chr = chr+("*");}
 console.log(chr);
 chr='';    
}

//prime checker

const isPrime = num => {
    for(let i = 2; i< num; i++)
    if(num % i === 0) return false;
    return num !== 1;
}

//case swapper

var text = prompt();

var ans = text.split('')
.map((c) =>
 c === c.toUpperCase() 
 ? c.toLowerCase()
 : c.toUpperCase()
).join('')

console.log(ans)