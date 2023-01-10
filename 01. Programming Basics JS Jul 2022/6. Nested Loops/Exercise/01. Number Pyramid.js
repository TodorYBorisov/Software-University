function numberPyramind(number) {

    let current = 1;
    let isBigger = false;
    let printCurrentLine = " ";

    for (let row = 1; row <= number; row++) {

        for (let col = 1; col <= row; col++) {

            if (current > number) {
                isBigger = true;
                break;
            }

            printCurrentLine += current + " ";
            current++;
        }

        console.log(printCurrentLine);
        printCurrentLine = " ";
        if (isBigger) {
            break;
        }
    }
}

numberPyramind(10);