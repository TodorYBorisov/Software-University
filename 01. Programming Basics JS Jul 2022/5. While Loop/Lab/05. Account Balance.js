function accountBalance(input) {

    let index = 0;

    let command = input[index];
    index++;

    let totalSum = 0;

    while (command !== "NoMoreMoney" ) {

        let amount = Number(command);

        if (amount < 0) {
            console.log("Invalid operation!");
            console.log(`Total: ${totalSum.toFixed(2)}`);
            break;
        }

        console.log(`Increase: ${amount.toFixed(2)}`);
        totalSum += amount;

        command = input[index];
        index++;
    }

    console.log(`Total: ${totalSum.toFixed(2)}`);
}

accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);