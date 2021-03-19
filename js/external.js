"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my website");

// var favoriteColor = prompt("what is your favorite color");
//
// console.log(favoriteColor + " is my favorite color too");
//
// alert(favoriteColor + " is my favorite color too!");

// exercise 3
// var num = parseFloat(prompt("Give me a number"));
//
// console.log("User entered: " + num + ". That number plus 17 is: " + (num + 17) + ".");
// alert("The number plus 17 is " + (num + 17));
//
// var littleM = parseFloat(prompt("Little Mermaid days? "));
//
// alert("Little Mermaid amount is " + littleM );
// var brotherB = parseFloat(prompt("Brother bear amount "));
//
// alert("Brother bear amount is " + brotherB);
//
// var herc = parseFloat(prompt("Hercules amount "));
//
// alert("Hercules amount is " + herc );
//
// var rentalRate = 3;
//
// alert("The rental rate is $3.00")
//
// var totalAmount = parseFloat((littleM + brotherB + herc) * rentalRate);
//
// alert("The total amount is $" + totalAmount );

// var googlePay = prompt("How much does Google pay?");
// var facebookPay = prompt("How much does Facebook pay?");
// var amazonPay = prompt("How much does Amazon pay?");
//
// var googleHours = prompt("How many hours did you work at google? ");
// var facebookHours = prompt("how many hours did you work at facebook? ")
// var amazonHours = prompt("How many hours did you work at amazon? ");
//
// var totalPay = parseFloat((googlePay * googleHours) + (facebookPay * facebookHours) + (amazonPay * amazonHours)).toFixed(2);
//
// alert("Your total pay is $" + totalPay);

// var classHasRoom = confirm("Is there room in class?");
// var classTime = confirm("can you attend at 9 am?")
//
// alert("Can you attend?  " + (classHasRoom && classTime));


var offerValid = confirm("Is the offer valid");
var isPremium = confirm("Are you a premium member");
var amountBought = parseFloat(prompt("How many did you buy?"))

alert("Do you get the discount? " + (((amountBought >= 2 || isPremium) && offerValid)) && amountBought > 0);

