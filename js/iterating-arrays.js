

let names = ["Joshulyne", "Amina", "Zahara", "Wesley"];
console.log(names);

console.log(names.length);
console.log('My First index is ' + names[1]);

for (i = 0; i < names.length; i++) {
    console.log(names[i]);
}

names.forEach (function (name){
    console.log(name);
})

function first(arr){
    return arr[0];
}

console.log(first(names));
function second(arr){
    return arr[1];
}

console.log(second(names));
function last(arr){
    return arr[arr.length - 1];
}

console.log(last(names));