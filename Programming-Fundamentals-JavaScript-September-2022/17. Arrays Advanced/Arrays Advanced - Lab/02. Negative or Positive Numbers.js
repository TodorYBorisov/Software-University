function negativeOrPositive(array) {

    let result = [];

    for (let number of array) {

        number = Number(number)
        if (number < 0) {
            result.unshift(number)
        } else {
            result.push(number)
        }
    }

    console.log(result.join('\n'));
}

negativeOrPositive(['7', '-2', '8', '9']);
//negativeOrPositive(['3', '-2', '0', '-1']);