function biggestNumber(num1, num2, num3) {

    let maxNumber = Number.MIN_SAFE_INTEGER;

    if (num1 >= num2 && num1 >= num3) {
        maxNumber = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maxNumber = num2;
    } else if (num3 >= num1 && num3 >= num2) {
        maxNumber = num3;
    }

    console.log(maxNumber)
}

biggestNumber(2, 2, 2);    