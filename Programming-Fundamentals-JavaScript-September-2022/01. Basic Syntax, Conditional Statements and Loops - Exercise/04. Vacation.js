function vacation(numberOfGroup, typeOfGroup, dayOfWeek) {

    let price = 0;

    switch (typeOfGroup) {
        case 'Students':
            if (dayOfWeek === 'Friday') {
                price = 8.45;
            } else if (dayOfWeek === 'Saturday') {
                price = 9.80;
            } else if (dayOfWeek === 'Sunday') {
                price = 10.46;
            }

            if (numberOfGroup >= 30) {
                price *= 0.85
            }
            break;
        case 'Business':
            if (dayOfWeek === 'Friday') {
                price = 10.90;
            } else if (dayOfWeek === 'Saturday') {
                price = 15.60;
            } else if (dayOfWeek === 'Sunday') {
                price = 16.00;
            }

            if (numberOfGroup >= 100) {
                numberOfGroup -= 10;
            }
            break;
        case 'Regular':
            if (dayOfWeek === 'Friday') {
                price = 15.00;
            } else if (dayOfWeek === 'Saturday') {
                price = 20.00;
            } else if (dayOfWeek === 'Sunday') {
                price = 22.50;
            }

            if (numberOfGroup >= 10 && numberOfGroup <= 20) {
                price *= 0.95;
            }

            break;
    }

    let totalPrice = numberOfGroup * price;
    console.log(`Total price: ${totalPrice.toFixed(2)}`)

}
vacation(40,
    "Regular",
    "Saturday"
);
