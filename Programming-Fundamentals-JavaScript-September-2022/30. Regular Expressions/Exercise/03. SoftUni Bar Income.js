function softUniBar(input) {

    let pattern = /\%(?<customer>[A-Z][a-z]+)\%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[\d]+[.]*\d+)\$/g

    let income = 0;
    let command = input.shift();

    while (command !== 'end of shift') {

        let match = pattern.exec(command)

        while (match !== null) {
            let customerName = match.groups.customer;
            let productName = match.groups.product;
            let quantity =Number(match.groups.quantity);
            let price =Number(match.groups.price);

            let totalPrice = quantity * price;

            income += totalPrice;

            console.log(`${customerName}: ${productName} - ${totalPrice.toFixed(2)}`);

            match = pattern.exec(command);
        }

        command = input.shift();
    }

    console.log(`Total income: ${income.toFixed(2)}`);
}
softUniBar(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);