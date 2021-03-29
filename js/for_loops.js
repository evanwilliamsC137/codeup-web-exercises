"use strict"

// for loop syntax

//for (/*initialization*/; /*condition*/; /*increment*/) {
    // body
//}

//long hand

// var count = 0;
// while (count <= 100) {
//     console.log(count);
//     count = count + 1;
// }

//for loop

// for (count = 0; count <= 100; count = count + 1) {
//     console.log(count);
// }
//
// //even shorter
//
// for (var i = 0; i <= 100; i++) {
//     console.log(i);
// }

// function showMultiplicationTable(input) {
//     return input * 7;
// }
// console.log(showMultiplicationTable(1));
// console.log(showMultiplicationTable(2));
// console.log(showMultiplicationTable(3));
// console.log(showMultiplicationTable(4));
// console.log(showMultiplicationTable(5));
// console.log(showMultiplicationTable(6));
// console.log(showMultiplicationTable(7));

// exercise 1

// var number = 7;
// function showMultiplicationTable(number) {
//     for (var multiplier = 1; multiplier <= 10; multiplier++) {
//         console.log(number + " *  " + multiplier + " = " + number * multiplier);
//     }
// }
// showMultiplicationTable(7);

//exercise 2

// function randomLoop() {
//     for (var x = 1; x <= 10; x++){
//         var random = Math.floor(Math.random() * 201)+20;
//         if (random % 2 ===0) {
//             console.log(random + " is even!");
//         }else{
//             console.log(random + " is odd")
//         }
//     }
// }
// console.log(randomLoop());

// function randomVersion(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
//
// var random, evenOddString;
// for (var i = 0; i < 10; i++) {
//     random = randomVersion(20, 200);
//     evenOddString = (random % 2 === 0) ? "even" : "odd";
//     console.log(random + ' is ' + evenOddString);
// }

// exercise 3

//my version

// for(var i= 1; i <= 9; i++)
// {
//     for (var x = 0; x < i; x++) {
//         console.log(i);
//     }
// }

//easier version

// for (var i = 1; i <= 9; ++i) {
//     console.log(i.toString().repeat(i));
// }


//exercise 4

for (var i = 100; i > 0; i = i - 5) {
    console.log(i);
}
