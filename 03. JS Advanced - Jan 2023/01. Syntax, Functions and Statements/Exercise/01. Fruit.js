function fruits(fruit, grams, price) {

    let gramsToKg = grams / 1000;
    let moneyNeeded = gramsToKg * price;

    console.log(`I need $${moneyNeeded.toFixed(2)} to buy ${gramsToKg.toFixed(2)} kilograms ${fruit}.`);
}
fruits('orange', 2500, 1.80)