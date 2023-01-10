function palindromeIntegers(array) {

    for (let i = 0; i < array.length; i++) {
        let currentElement = String(array[i]);

        let firstNum = 0
        let lastNum = 0
        for (let j = 0; j < currentElement.length; j++) {
            let number = Number(currentElement[j])

            if (j === 0) {
                firstNum += number
            }

            if (j === (currentElement.length - 1)) {
                lastNum += number
            }

        }

        if (firstNum === lastNum) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
}
palindromeIntegers([32, 2, 232, 1010]);