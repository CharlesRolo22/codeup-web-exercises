let name = "joe";
let myFirstArray = [true, false, 12, "Bob", name];


console.log(myFirstArray.length);
console.log('My 3rd index is ' + myFirstArray[2])
console.log('My 1st index is ' + myFirstArray[0])

console.log("this is an out of bound element(exception) " +
myFirstArray[12])


let name = ["Bob", "Fred", "Jim", "jack"];

for (let i = 0; i < name.length; i++) {
    let greeter = "hello " + name[i];
    console.log(greeter);
}

names.forEach(function(nameCurrentIndex){
    let greeter = "Hello " + nameCurrentIndex;
    console.log(greeter);
})



