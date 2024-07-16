//Activity 1

    //task 1
    const numberCheck = (num) => {
        if (num > 0)
            console.log(`${num} is positive`)
        else if (num < 0)
            console.log(`${num} is negative`);
        else
            console.log(`${num} is zero`);
    }
    numberCheck(7)
    numberCheck(-5)
    numberCheck(0)

    //task 2
    const ageCheck = (age) => {
        if (age >= 18)
            console.log(`person is eligible to vote`);
        else {
            console.log(`person has to wait until ${18 - age} year before eligible to vote`);
        }
    }
    ageCheck(18)
    ageCheck(25)
    ageCheck(17)

console.log('\n')
//Activity 2

    //task 3
    function findLargest(num1, num2, num3) {
        if (num1 > num2) {
            if (num1 > num3)
                console.log(`${num1} is the largest number`);
            else
                console.log(`${num3} is the largest number`);
        }
        else {
            if (num2 > num3)
                console.log(`${num2} is the largest number`);
            else
                console.log(`${num3} is the largest number`);

        }
    }

    findLargest(100, 50, 30)
    findLargest(100, 200, 150)
    findLargest(100, 100, 250)

console.log('\n')
//Activity 3

    //task 4
    function findWeek(num) {
        switch (num) {
            case 1:
                console.log("Monday");
                break;
            case 2:
                console.log("Tuesday");
                break;
            case 3:
                console.log("Wednesday");
                break;
            case 4:
                console.log("Thursday");
                break;
            case 5:
                console.log("Friday");
                break;
            case 6:
                console.log("Saturday");
                break;
            case 7:
                console.log("Sunday");
                break;

            default:
                console.log(`invalid input - ${num}`);
                break;
        }
    }

    const number = [1, 2, 3, 4, 5, 6, 7, 8, 'vis']
    number.forEach((num) => findWeek(num))

    //task 5
    function gradeDecide(num) {
        
        switch (true) {
            case (num >= 91 && num <= 100):
                console.log("O");
                break;
            case (num >= 81 && num <= 90):
                console.log("A");
                break;
            case (num >= 71 && num <= 80):
                console.log("B");
                break;
            case (num >= 61 && num <= 70):
                console.log("C");
                break;
            case (num >= 51 && num <= 60):
                console.log("D");
                break;
            case (num >= 41 && num <= 50):
                console.log("E");
                break;
            case(num<=40):
                console.log('F')
                break;
            default:
                console.log("invalid number --> ",num)
                break;
        }
    }
    const grade=[97,45,77,65,87,65,40,33,78.5,'a']
    grade.forEach((item)=>gradeDecide(item))

console.log('\n')
//Activity 4

    //task 6
    function checkEvenOdd(num){
        num%2==0 ? console.log(`${num} is even `):console.log(`${num} is odd `)
    }
    checkEvenOdd(55)
    checkEvenOdd(20)

console.log('\n')
//Activity 5
//here year was divisible by 4 if it is then is a leap year
//but century year are not find by leap year using divisible by 4 we need divisible by 400 and check it is century year or not we divisible by 100
    //task 7
    function checkLeap(year){
        if( year%4== 0 && year % 100!=0 || year%400 == 0){
            console.log(`${year} is a leap year`);
        }
        else{
            console.log(`${year} is a not leap year`);
        }
    }

    checkLeap(2024)
    checkLeap(2100)
    checkLeap(2003)


