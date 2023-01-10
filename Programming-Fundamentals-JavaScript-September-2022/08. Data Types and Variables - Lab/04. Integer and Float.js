function integerAndfloat(num1, num2, num3) {

    let totalSum = num1 + num2 + num3;

    // if (totalSum % 1 === 0) {
    //     totalSum += ' - Integer';
    // } else {
    //     totalSum += ' - Float';
    // }

    // console.log(`${totalSum}`);

    let output = totalSum % 1 === 0 ? 'Integer' : 'Float';
    console.log(`${totalSum} - ${output}`);
}

integerAndfloat(100, 200, 30.1);
