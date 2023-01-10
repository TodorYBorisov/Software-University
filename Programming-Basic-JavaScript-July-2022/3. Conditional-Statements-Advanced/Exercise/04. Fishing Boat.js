function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numberOfFisherMen = Number(input[2]);

    let priceForRent = 0.0;

    switch (season) {
        case "Spring":
            priceForRent = 3000.00;
            break;
        case "Summer":
            priceForRent = 4200.00;
            break;
        case "Autumn":
            priceForRent = 4200.00;
            break;
        case "Winter":
            priceForRent = 2600.00;
            break;

    }

    if (numberOfFisherMen <= 6) {
        priceForRent = priceForRent * 0.9;
    } else if (numberOfFisherMen >= 7 && numberOfFisherMen <= 11) {
        priceForRent = priceForRent * 0.85;
    } else if (numberOfFisherMen >= 12) {
        priceForRent = priceForRent * 0.75;
    }

    if (numberOfFisherMen % 2 == 0 && season != "Autumn") {
        priceForRent = priceForRent * 0.95;
    }

    if (budget >= priceForRent) {
        console.log(`Yes! You have ${(budget - priceForRent).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${Math.abs(budget - priceForRent).toFixed(2)} leva.`)
    }
}
fishingBoat(["3600",
"Autumn",
"6"]);
