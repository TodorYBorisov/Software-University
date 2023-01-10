function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let destination = "";
    let spendMoney = 0.0;
    let vacationType = "";

    switch (season) {
        case "summer":
            vacationType = "Camp";
            if (budget <= 100) {
                destination = "Bulgaria";
                spendMoney = budget * 0.30;
            } else if (budget <= 1000) {
                destination = "Balkans";
                spendMoney = budget * 0.4;
            } else if (budget > 1000) {
                vacationType = "Hotel";
                destination = "Europe";
                spendMoney = budget * 0.9;
            }
            break;
        case "winter":
            vacationType = "Hotel";
            if (budget <= 100) {
                destination = "Bulgaria";
                spendMoney = budget * 0.70;
            } else if (budget <= 1000) {
                destination = "Balkans";
                spendMoney = budget * 0.8;
            } else if (budget > 1000) {
                vacationType = "Hotel";
                destination = "Europe";
                spendMoney = budget * 0.9;
            }
            break;
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${vacationType} - ${spendMoney.toFixed(2)}`);
}


journey(["75", "winter"])