
//while loop
// var whileInput = 2;
// while (whileInput <= 65536) {
//     console.log(whileInput);
//     whileInput = whileInput * 2;
// }

//do-while loop
// var number = Math.floor(Math.random() * 6) + 1;
// var guess;
//
// do {
//     guess = parseInt(prompt("Enter a number between 1 and 6"));
// }while (guess !== number) {
//     alert("your guess of " + guess + " matches the number" + number);
// }

//ice cream loop

var allCones = Math.floor(Math.random() * 50) + 50;
//first attempt
// do {
//     var conesSold = Math.floor(Math.random() * 5) + 1;
//     console.log("you sold " + conesSold + " cones");
//     allCones = allCones - conesSold;
//     console.log(allCones);
//     if ((conesSold >= allCones) && (allCones > 0)) {
//         console.log("We dont have that many cones!");
//     }
//
// } while (allCones > 0) {
//     console.log("we sold all the cones!");
//
// }

// walkthrough
do {
    var conesBought = Math.floor(Math.random() * 5) + 1;
    if (conesBought > allCones) {
        console.log("I cant sell " + conesBought + " I only have  " + allCones + " left sorry");
    } else {
        allCones = allCones - conesBought;
        console.log("Cones Sold " + conesBought + " I have " + allCones + " left to sell");
    }
} while (allCones > 0);
console.log(allCones + " cones left!");