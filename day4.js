//Activity 1

    //task 1
    function printNumber(num){
        for (let i = 1; i <= num; i++) {
            console.log(i);
        }
    }
    printNumber(10)

    //task 2
    function printTable(num=0){
        for (let i = 1; i <= num; i++) {
            console.log(`table of ${i}`);
            for (let j = 1; j <= 10 ; j++){
                console.log(`\t${i} * ${j} = ${i*j}`);
            }

        }
    }
    printTable(5)

console.log('\n');
//Activity 2

    //task 3
    function calcNumber(number) {
        //  10 to 1
        let sum=0
        let num=number
        while(number){
            sum += number
            number--
        }
        console.log(`The sum of calculate number is ${sum}`);

        //  1 to 10
        let a=1
        let sum1=0
        while(a<=num){
            sum1 += a
            a++
        }
        console.log(`The sum of calculate number is ${sum1}`);
    }
    calcNumber(10)


    //task 4
    function printNumber(number) {
        
        while(number){
            console.log(number);
            number--
        }
    }
    printNumber(10)

console.log('\n');
//Activity 3

    //task 5
    function printNum(num){
        let i=1
        do{
            console.log(i);
            i++
        }while(i<=num);
    }
    printNum(5)

    //task 6
    function factorial(num){
        let fact=1
        let i=1
        do{
            fact = fact * i
            i++
        }while(i<=num);
        console.log(`Factorial of ${num} is ${fact}`);
    }
    factorial(5)

console.log('\n');
//Activity 4

    //task 7
    function pattern(length){
      let star=''
        for (let i = 1; i <= length; i++) {
            for(let j=0;j<i;j++){
                star +='* '
            }
            console.log(star)
            star=''

        }
    }
    pattern(5)

console.log('\n');
//Activity 5

    //task 8

    function continueEx(number){
        for (let i = 1; i <= number; i++) {
            if(i==5){
                continue
            }
            console.log(i);
        }
    }
    continueEx(10)

    // task 9
    function breakEx(num){
        for (let i = 1; i <= num; i++) {
            console.log(i);
            if(i==7){
                break
            }
        }
    }
    breakEx(10)
