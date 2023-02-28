console.log("Testing")

let age = -1;

if (age >= 16){
    console.log("Old enough to drive")
} else if (age > 0 && age <= 16)
{
    console.log("not old enough")
}else {
    console.log("Not a valid age")
}

//if/else if/else example:

let daysofTheWeek = prompt("Enter a day of the week");

if (daysofTheWeek === "Monday"){
    console.log("I hate " + daysofTheWeek)
} else if (daysofTheWeek === "Tuesday"){
    console.log("Tuesday's are better")
} else if (daysofTheWeek === "Wednesday"){
    console.log(daysofTheWeek + " is fun!")
} else if (daysofTheWeek === "Thursday") {
    console.log("Thursday")
}  else if (daysofTheWeek === "Friday"){
    console.log("Fridays after work are fun!")
}   else {
    console.log("Not valid day of the week")
}


let num = 42;

if (typeof num === "string"){
    console.log("type of 'num' is a Number")
} else {
    console.log("typeof is not a number")
}



let username = "user";
let password = "password";

let userUsername = prompt("Enter you username");
let userPassword = prompt("Enter your password");

if(username === userUsername && password === userPassword){
    console.log("Successfully logged in")
} else if (username !== userUsername){
    console.log("Invalid username")
} else if (password !== userPassword){
    console.log("Invalid password")
} else {
    console.log("Invalid username and password")
}

let password = prompt("Please enter a password");

if(password.length >= 6){
    console.log("Valid password")
}else {
    console.log("Password hasn't met the requirement")
}

let name = "Bob"
let greeting = name === "Bob" ? "Hello " + name : "Hello stranger";
console.log(greeting)

if(name === "Bob"){
    console.log("Hello " + name)
} else{
    console.log("Hello Stranger!")
}

let grade = "B";

switch(grade){
    case "A":
        console.log("Way to go!");
        break;
    case "B":
        console.log("Good Work!");
        break;
    case "C":
        console.log("Not bad!");
        break;
    case "D":
        console.log("Keep Trying!");
        break;
    case "F":
        console.log("oh-oh! Not good");
        break;
    default:
        console.log(grade + " is not a valid letter grade!");
}

if(grade = "A"){
    console.log("Way to go!");
}else if (grade = "B"){
    console.log("Good Work!");
}else if (grade = "C"){
    console.log("Not Bad!");
}



let school = "codeup";

for(let i = 0; i < school.length; i++){
    console.log(school.charAt(i))
}
