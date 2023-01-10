function minNumber(input) {

    let index = 0;

    let currentValue = input[index];
    index++;

    let minValue = Number.MAX_SAFE_INTEGER;

    while (currentValue !== "Stop") {

        let currentNumber = Number(currentValue);

        if (currentNumber < minValue) {

            minValue = currentNumber;
        }

        currentValue = input[index];
        index++;
    }


    console.log(minValue)

}

minNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);