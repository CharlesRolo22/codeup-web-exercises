let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

let planetsArray = planetsString.split("|");
console.log(planetsArray);

let brString = planetsArray.join("<br>");
console.log(brString);


let ulPlanets;
let listring;
planetsArray.ForEach(Function (planet){
    listring = "<Li>" + planet + "</Li>";
    ulPlanets += listring;
})
ulplanets += "</ul";
console.log(ulPlanets)