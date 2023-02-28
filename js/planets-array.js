let planetsArray = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

// console.log(planetsArray);

planetsArray.unshift("Sun");
console.log(planetsArray);

planetsArray.push("Pluto");
console.log(planetsArray);

planetsArray.pop();
console.log(planetsArray);

planetsArray.shift();
console.log(planetsArray);

let index = planetsArray.indexOf("Earth");
console.log(index);



let reversePlanets = planetsArray.reverse();
console.log(reversePlanets);

let alphanumericPlanets = planetsArray.sort();
console.log(alphanumericPlanets);