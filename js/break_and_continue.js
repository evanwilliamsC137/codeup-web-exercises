"use strict";

console.log("hello peeps!");
//
// for (var i = 1; i < 50; i++) {
//     // var number = prompt("Give me a number between 1 and 50.");
//     if (i > 50 || i < 0) {
//         console.log("Not the right number!");
//         break;
//     }else if (i % 2 === 0){
//         console.log("Here is an even number: " + i);
//         break;
//     }else{
//         console.log("That's odd!");
//         break;
//
//     }
// }

//my attempt

// for (var i = 1; i < 50; i++) {
//     if (i === 27) {
//         var numInput = prompt("Give me a number between 1-50")
//         console.log("number to skip is " + numInput);
//     }else if (i % 2 === 0) {
//         continue;
//     }
//
//     console.log('Here is an odd number: ' + i);
// }

//walkthrough

// var userInput = 0;

// while (userInput !== "Never gonna guess it") {
//     userInput = parseFloat(prompt("Enter a number between 1 and 50"));
//     if (userInput % 2 === 1 || (userInput > 0 && userInput < 50)) {
//         break;
//     }
// }

//better walkthrough

var oddNumber = parseInt(prompt("Give me an odd number between 1-50"));

while (true) {
    if (oddNumber % 2 === 1 || (oddNumber > 0 && oddNumber < 50)){
        break;
    }
    oddNumber = parseInt(prompt("Give me an odd number between 1-50"));
}




for (var i = 1; i < 50; i+=2) {
    if (i === userInput) {
        console.log("yikes wrong number");
        continue;
    }
    console.log(i);
}