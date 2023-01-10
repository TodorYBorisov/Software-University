function orders(product, quantity) {

    let totalSum = 0;

    if (product === 'water') {
        totalSum = 1.00 * quantity;
    } else if (product === 'coffee') {
        totalSum = 1.50 * quantity;
    } else if (product === 'coke') {
        totalSum = 1.40 * quantity;
    } else if (product === 'snacks') {
        totalSum = 2.00 * quantity;
    }

    return totalSum.toFixed(2);

}
console.log(orders("water", 5));