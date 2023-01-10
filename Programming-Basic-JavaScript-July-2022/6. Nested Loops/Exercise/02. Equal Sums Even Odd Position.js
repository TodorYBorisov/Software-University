function equalSumsEvenOddPosition(input) {

    let index = 0;
    let num1 = Number(input[index]);
    index++;
    let num2 = Number(input[index]);
    index++;

    let buff = "";

    for (let currentNum = num1; currentNum <= num2; currentNum++) {
        
        let currentNumAsString = currentNum.toString();

        let evenSum = 0;
        let oddsSum = 0;

        for (let index = 0; index < currentNumAsString.length; index++) {
            
            let currentDigit = Number(currentNumAsString[index]);

            let position = index + 1;

            if (position % 2 === 0) {
                evenSum += currentDigit;
            } else {
                oddsSum += currentDigit;
            }

        }

        if (evenSum === oddsSum) {
            buff += `${currentNumAsString} `;
        }

    }
    console.log(buff);

}

equalSumsEvenOddPosition(["100000", "100050"]);