//Activity 1

let number1=30
let number2=20
    //task 1
    let Add=number1+number2
    console.log("Add",Add);

    //task 2
    let Sub=number1-number2
    console.log("Sub",Sub);

    //task 3
    let Mul=number1 * number2
    console.log("Mul",Mul);
    
    //task 4
    let Div=number1 / number2
    console.log("Div",Div);

    //task 5
    let Mod=number1 % number2
    console.log("mod",Mod);

console.log('\n');
//Activity 2

    //task 6
    let number=20
    number += 100
    console.log(number);

    //task 7
    number -= 50
    console.log(number);

console.log('\n');
//Activity 3

    // task 8

    console.log(35 < 100);

    console.log(35 > 10);

    //task 9
    console.log(50 >= 50);

    console.log(59 <= 45);

    //task 10
    console.log(100 == "100");

    console.log(100 === "100");

console.log('\n');
//Activity 4

    //task 11

    function andCheck(number){
        if(number > 20  && number < 50){
        console.log("Number satisfy both condition",number)
    }else{
        console.log("not satisfy any condition",number)
    }
    }

    andCheck(35)
    andCheck(18)

    //task 12
    function orCheck (number){
        if(number > 20  || number < 10){
        console.log("Number satisfy condition",number)
    }else{
        console.log("not satisfy any condition",number)
    }
    }
    orCheck(35)
    orCheck(15)

    //task 13
    function notCheck (number){
        if(!(number > 20)){
        console.log(number)
    }else{
        console.log("failed");
    }
    }
    notCheck(10)
    notCheck(25)

console.log('\n');
//Activity 5
    //task 14
    function ternaryCheck (number){
    (number>0)?console.log("positive number"):console.log("negative number")
    }
    ternaryCheck(10)
    ternaryCheck(-1)




    

