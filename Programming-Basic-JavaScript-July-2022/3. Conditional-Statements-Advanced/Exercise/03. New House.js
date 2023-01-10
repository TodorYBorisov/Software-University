function newHouse(input) {

    let flowerType = input[0];
    let number = Number(input[1]);
    let budget = Number(input[2]);

    let price = 0.0;

    switch (flowerType) {
        case "Roses":
            price = 5.0;
            if (number > 80) {
                price = price * 0.9;
            }
            break;
        case "Dahlias":
            price = 3.80;
            if (number > 90) {
                price = price * 0.85;
            }
            break;
        case "Tulips":
            price = 2.80;
            if (number > 80) {
                price = price * 0.85;
            }
            break;
        case "Narcissus":
            price = 3.00;
            if (number < 120) {
                price = price * 1.15;
            }
            break;
        case "Gladiolus":
            price = 2.50;
            if (number < 80) {
                price = price * 1.20;
            }
            break;
    }
    let finalSum = number * price;

    if (budget >= finalSum) {
        console.log(`Hey, you have a great garden with ${number} ${flowerType} and ${(budget - finalSum).toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money, you need ${Math.abs(budget - finalSum).toFixed(2)} leva more.`)
    }

}
newHouse(["Tulips",
    "88",
    "260"]);
