function travel(input) {

    let index = 0;
    let destination = input[index];
    index++;

    let savedMoney = 0;

    while (destination !== "End") {
        let minBudget = Number(input[index]);
        index++;
        let command = input[index];
        index++;
        while (savedMoney < minBudget) {

            let amount = Number(command);
            savedMoney += amount;

            command = input[index];
            index++;
        }
        console.log(`Going to ${destination}!`);
        destination = command;

        savedMoney = 0;

    }

}

travel(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"]);