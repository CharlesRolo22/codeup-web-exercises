console.log("Hello from JavaScript!")
alert("Welcome to my Website!")
let color = prompt("Whats Your Favorite Color?")
alert ("Great, " + color + " is my favorite color too!" )

let Mermaid = Number(prompt("How many days did you rent Little Mermaid?"))
let Brother = Number(prompt("How many days did you rent Brother Bear?"))
let Hercules = Number(prompt("How many days did you rent Hercules?"))

let Total = (Mermaid + Brother + Hercules) * 3
alert("Your total amount is $" + Total)

let Google = Number(prompt("How much does Google Pay Per Hour?"))
let Amazon = Number(prompt("How much does Amazon Pay Per Hour?"))
let FB = Number(prompt("How much does FB Pay Per Hour?"))

let GG = Number(prompt("How many hours did you work with GG?"))
let AMAZN = Number(prompt("How many hours did you work with AMAZN?"))
let FaceBook = Number(prompt("How many hours did you work with FaceBook?"))

let Pay = (Google*(GG)+Amazon*(AMAZN)+FB*(FaceBook))
alert("Your total amount paid is $" + Pay)

// let submit = confirm("Is your class full and will it conflict?");


let ItsFull = confirm("Is class Full?")
let Conflict = confirm("Will class conflict?")
alert(!ItsFull && !Conflict)

alert("Product offer Valid if a person buys more than 2 items")
alert("No Minimum Purchase for Premium members.")
