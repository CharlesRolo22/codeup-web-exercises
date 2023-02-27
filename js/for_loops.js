function showMultiplicationTable(number){

    showMultiplicationTable(6)


    for (let i = 1; i <= 10; i++) {
        let sum = number * i;
        console.log(number + " * " + i + " = " + sum);
    }


}

for (let i = 1; i <= 10 ; i++) {
    let randomNumber = Math.floor(Math.random() * 180) + 20;
    if(randomNumber % 2 === 0){
        console.log(randomNumber + ": Even")
    }else{
        console.log(randomNumber + ": Odd")
    }
}




for (let i = 1; i <= 9; i++) {
    console.log(i.toString().repeat(i))

    for (let j = 1; j <= i; j++) {
        str += i;
    }
    console.log(str)
}




