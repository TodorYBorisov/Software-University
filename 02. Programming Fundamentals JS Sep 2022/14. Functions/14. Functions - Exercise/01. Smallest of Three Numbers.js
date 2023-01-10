function smallestOfThreeNumbers(num1, num2, num3) {

    let minNumber = Number.MAX_SAFE_INTEGER;

    if (num1 <= num2 && num1 <= num3) {
        minNumber = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        minNumber = num2;
    } else {
        minNumber = num3
    }

    console.log(minNumber)
}
smallestOfThreeNumbers(3, 3, 3)