"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my website");

var favoriteColor = prompt("what is your favorite color");

console.log(favoriteColor + " is my favorite color too");

alert("Thats my favortie too!");

// exercise 3
var num = parseFloat(prompt("Give me a number"));

console.log("User entered: " + num + ". That number plus 17 is: " + (num + 17) + ".");
alert("The number plus 17 is " + (num + 17));

var littleM = prompt("Little Mermaid amount ");

console.log("Little Mermaid amount is " + littleM );
alert("Little Mermaid amount is " + littleM );

var brotherB = prompt("Brother bear amount ");

console.log("Brother bear amount is " + brotherB );

alert("Brother bear amount is " + brotherB);

var herc = prompt("Hercules amount ");

console.log("Hercules amount is " + herc );

alert("Hercules amount is " + herc );

var totalAmount = (littleM + brotherB + herc);

console.log(totalAmount);

alert("The total is " + totalAmount );

