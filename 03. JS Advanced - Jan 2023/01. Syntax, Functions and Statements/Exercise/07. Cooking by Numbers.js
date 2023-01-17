function cookingByNumbers(number, chop, dice, bake, fillet, spice) {

    let actualNumber = Number(number);
    let operations = [chop, dice, bake, fillet, spice];

    let command = operations.shift();

    while (command !== undefined) {

        if (command === 'chop') {
            actualNumber = actualNumber / 2;
            console.log(actualNumber);
        } else if (command === 'dice') {
            actualNumber = Math.sqrt(actualNumber);
            console.log(actualNumber);
        } else if (command === 'spice') {
            actualNumber = actualNumber + 1;
            console.log(actualNumber);
        } else if (command === 'fillet') {
            actualNumber = actualNumber * 0.8;
            console.log(actualNumber.toFixed(1));
        } else if (command === 'bake') {
            actualNumber = actualNumber * 3;
            console.log(actualNumber);
        }
        command = operations.shift();
    }
}
//cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');
//cookingByNumbers('9', 'dice', 'chop', 'chop', 'bake', 'fillet');