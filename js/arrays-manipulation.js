let dogs = [" Misty ", " Nebula ", " Shadow ", " Robert" ]
console.log(dogs)

dogs.unshift(<items: "robert");

dogs.push("hub")

dogs.pop();

dogs.shift();

console.log(dogs)


let index = dogs.indexOf("Shadow");
console.log(index);


let lastIndex = dogs.lastIndexof("Misty");
console.log(lastIndex)


let newDogsArray = dogs.slice(1, 3);
console.log(newDogsArray);

console.log(dogs)

let reverseDog = dogs.reverse();
console.log(reverseDog)

let alphanumericDogs = dogs.sort();
console.log(alphanumericDogs)

let animals = "dogs, cats, hedgehogs";
let animalArray = animals.split(",")
console.log(animalArray)


let animalString = animalArray.join("|");
console.log(animalString);