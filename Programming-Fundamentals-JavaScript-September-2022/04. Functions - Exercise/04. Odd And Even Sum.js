function oddAndEvenSum(number) {

    let numberToString = String(number);
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < numberToString.length; i++) {

        let element = Number(numberToString[i]);

        if (element % 2 === 0) {
            evenSum += element;
        } else {
            oddSum += element;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435);
