// function fizzBuzz() {
//     for (var i = 0; i <= 30; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             console.log("Fizz");
//         }else if (i % 3 === 0) {
//             console.log("Buzz");
//         }else if (i % 5 === 0) {
//             console.log("FizzBuzz");
//         }else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();


//Walkthrough
// (() => {
//     const fizzBuzz = numTil => {
//         for (let x = 1; x <= numTil; x++) {
//             if (x % 3 === 0 && x % 5 === 0) {
//                 console.log("FizzBuzz");
//             }else if (x % 3 === 0) {
//                 console.log("Fizz");
//             }else if (x % 5 === 0) {
//                 console.log("Buzz");
//             }else {
//                 console.log(x);
//             }
//         }
//     }
//     fizzBuzz(30)
// })();

// function seven() {
//     return 7;
// }seven();
// console.log(seven());

const returnSeven = () => 7;
console.log(returnSeven());