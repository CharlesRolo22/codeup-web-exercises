let isNotValid;
let userNum;
do {

    let userNum = Number(prompt("enter a number from 1 to 50"));
    if((userNum > 50 || userNum < 1) || (userNum % 2 === 0)){
        isNotValid = true;
    }else{
        break;
    }
        console.log(isNotValid);
)while (isNotValid);


console.log("Number to skip is: " + userNum);
for (let i = 1; i < 50; i += 2) {
    if(i === userNum){
        console.log("Skipping number: " + i);
        continue;
    }

    console.log(" Here is your odd number: " + i);
    }

}
