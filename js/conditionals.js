"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// function analyzeColor(color){
//     if (color === "blue") {
//         console.log("My favorite Color " + color)
//     }else if (color === "red"){
//     console.log("My Favorite fruit is " + color)
// } else if (color === "brown"){
//     console.log("My Favorite candy Twix are " + color)
// } else if (color === "green"){
//     console.log("Money is the color " + color)
// } else {
//     console.log("There is no response for this" + color)
// }
// }
//  analyzeColor("blue")

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// let randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */

// analyzeColor(randomColor)

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

// function analyzeColor(color) {
//     switch (color) {
//         case 'blue':
//             return("The Sky is Blue!");
//         case 'red':
//             return("Strawberries are Red!");
//         case 'brown':
//             return("Brown is My Favorite Color.")
//         case 'orange':
//             return("Orange is a cool color.")
//     }
// }

// console.log(analyzeColor("orange"));
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// let userColor = prompt("Please enter a color from the rainbow");
//
// alert(analyzeColor(userColor))



/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount){
  if(luckyNumber === 0) {
      return totalAmount;
  } else if (luckyNumber === 1){
      return totalAmount - (.10 * totalAmount)
  } else if (luckyNumber === 2){
      return totalAmount - (.25 * totalAmount)
  } else if (luckyNumber === 3){
      return totalAmount - (.35 * totalAmount)
    } else if (luckyNumber === 4){
      return totalAmount - (.50 * totalAmount)
  } else if (luckyNumber === 5){
      return totalAmount - (1 * totalAmount)
  }
}

// console.log(calculateTotal(luckyNumber:0, totalAmount:100))
// // returns 100
// console.log(calculateTotal(luckyNumber:4, totalAmount:100))
// // returns 50
// console.log(calculateTotal(luckyNumber:6, totalAmount:100))
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
let luckyNumber = Math.floor(Math.random() * 6);

let total = prompt("Enter total bill amount")
alert("Your lucky number is " + luckyNumber  + " Your total before discount is "
    + total + " Your total after discount is " +
    (calculateTotal(luckyNumber, total)))
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

let userConfirm = confirm("Would you like to enter a number?")
if(userConfirm) {
    let userNum = parseFloat(prompt("Enter a number!"));
    if(userNum === 0){
        alert(userNum + "is neither even or odd")
        alert(userNum + 100)
        alert(userNum + "is neither negative or positive")
    } else if (!isNaN(userNum)){
        // Ternary operator
        alert(userNum % 2 === 0 ? "Number is even" : "Number is odd")
        alert("Your Number + 100 is = " + (userNum + 100))
        // Ternary operator
        alert(userNum > 0 ? "Number is positive" : "Number is negative")
    } else{
        alert("Can you enter a Valid Number")
    }
}


let userConfirm = confirm("Would you like to enter a number?")
if (userConfirm){
    let userNum = parseFloat(prompt("Enter a number!"));
}



function evenOdd(number){
    if(number % 2 === 0){
        return "is an even number"
    } else {
        return "odd number"
    }
}


function add100(number){
    return number + 100
}

function posNeg(number{
    if(number > 0){
        return " number is positive"
    } else {
        return "Number is negative"
    }
}
