function sumeEvenNumbers(number) {

    let evenSum = 0;

    for (let i = 0; i < number.length; i++) {
        let num = Number(number[i]);

        if (num % 2 === 0) {
            evenSum += num;
        }

    }

    console.log(evenSum);
}
sumeEvenNumbers(['3','5','7','9']);