function maxNumber(input) {

    let index = 0;

    let command = (input[index]);
    index++;

    let maxValue = Number.MIN_SAFE_INTEGER;

    while (command !== "Stop") {

        let currentValue = Number(command)

        if (currentValue > maxValue) {

            maxValue=currentValue;
        }

        command = (input[index]);
        index++;
    }

    console.log(maxValue);

}

maxNumber(["100",
    "99",
    "80",
    "70",
    "Stop"]);