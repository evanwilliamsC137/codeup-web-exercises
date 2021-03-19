"use strict";

//Immediately invoked function expression (IIFE's)
//(function IIFE {


    console.log("hello world");

//lets define a function

// function doTheThing(input) {
//     var output = input + " was pulled into the function. now it is this concat string.";
//     return output;
// }
// console.log(doTheThing("hot dog"));
//
// function addStuff(x, y) {
//     return x + y;
// }
//
// console.log(addStuff(17, 18));
//
//
// //lets make a bad function...no info passed on
//
// function logToConsole(info) {
//     return console.log(info + " is something important to keep in mind");
// }
//
// //in defense of console.logging during a function
//
// function addingToString(str) {
//     var finalString = str + " is a string. "
//     console.log(typeof finalString);
//     finalString += " and if it wasnt originally a string it sure is now!";
//     console.log(finalString);
//     return finalString;
// }
//
// alert(addingToString("Antelope"));
//
// // Global vs Local variables
//
// var global = "Earth";
//
// console.log(global);
//
// function getGlobalAndLogIt() {
//     var local = "Neptune";
//     console.log(global);
//     console.log(local);
// }
// var local = "whatevs"; //unless this is declared outside of function...VV
// getGlobalAndLogIt();
// console.log(local); // local is declared inside a function so this returns an error

// Another way to define functions

//     var coolGuyFunction = function (string) {
//         return string + ", but with sunglasses. B)";
//     }
//
//     console.log(coolGuyFunction("skunk"));
//




/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */

function sayHello(name) {
    return "Hello " + name;
}

alert(sayHello(name));

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

var helloMessage = sayHello("Evan Williams");

console.log(helloMessage);


/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

var myName = "Evan Williams";
console.log(sayHello(myName));

// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
function isTwo(x) {
    return x === 2;
}
console.log(isTwo(1));
console.log(isTwo(2));
console.log(isTwo(3));

console.log(isTwo(random));

/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */

var calculateTip = function (tip, bill) {
    return tip * bill;
}

var tip1 = calculateTip(20, 20)
console.log("your caclulated tip was: $" + tip1.toFixed(2));

// function calculateTip(per, bill) {
//     var totalTip = (per/100) * bill;
//     return totalTip.toFixed(2);
// }
// console.log(calculateTip());

/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

var billAmount = parseFloat(prompt("How much was your bill? "));
var tipPercent = parseFloat(prompt("What percent would you like to tip? (In decimal)"));

var tipAmount = calculateTip(tipPercent, billAmount);
var total = billAmount + tipAmount;

alert("Your bill came out to $" + billAmount.toFixed(2) + " . You decided to tip" + (tipPercent * 100) + "%, which will result in $" + total);


//alert("$" + (billAmount * 0.09) + " is your tip amount.");



/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */




function applyDiscount(price, percent) {
    var discountAmount = price - (price * percent);
    return discountAmount;
}
console.log(applyDiscount(100, .2));
