function sumOfTwoNumbers(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let magicNumber = Number(input[2]);

    let counter = 0;
    let isFound = false;


    for (let i = start; i <= end; i++) {
        for (let j = start; j <= end; j++) {
            let result = i + j;
            counter++;
            if (result === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${magicNumber})`)
                isFound = true;
                break;

            }

        }
        if (isFound) {
            break;
        }
    }

    if (!isFound) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }
}

sumOfTwoNumbers(["88",
    "888",
    "1000"]);