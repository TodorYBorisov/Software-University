function computerStore(array) {

    let index = 0
    let command = array[index];
    index++;

    let priceWithoutTaxes = 0;

    while (command !== 'special' && command !== 'regular') {

        let price = Number(command);

        if (price < 0) {
            console.log(`Invalid price!`);
        } else {
            priceWithoutTaxes += price;
        }

        command = array[index];
        index++;
    }

    if (priceWithoutTaxes == 0) {
        console.log(`Invalid order!`);
    } else {
        let taxes = (priceWithoutTaxes * 1.2) - priceWithoutTaxes;
        let totalPrice = priceWithoutTaxes * 1.2;

        if (command === 'special') {
            totalPrice *= 0.9
        }

        console.log(`Congratulations you've just bought a new computer!
        Price without taxes: ${priceWithoutTaxes.toFixed(2)}$
        Taxes: ${taxes.toFixed(2)}$
        -----------
        Total price: ${totalPrice.toFixed(2)}$`);
    }
}
computerStore([
    'regular'
])        