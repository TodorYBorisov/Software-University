function carWash(array) {

    let value = 0;

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if (command === 'soap') {
            value += 10;
        } else if (command === 'water') {
            value *= 1.2;
        } else if (command === 'vacuum cleaner') {
            value *= 1.25
        } else if (command === 'mud') {
            value -=(value * 0.1)
        }
    }

    console.log(`The car is ${value.toFixed(2)}% clean.`);

}
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water'])