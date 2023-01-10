function numberModification(number) {

    let fromStringToArray = String(number).split('')

    for (let i = 0; i < fromStringToArray.length; i++) {
        let sumArray = 0;
        for (let element of fromStringToArray) {
            sumArray += Number(element)
        }

        if ((sumArray / fromStringToArray.length) < 5) {
            fromStringToArray.push('9');

        }
    }
    console.log(fromStringToArray.join(''));
}

numberModification(5835);