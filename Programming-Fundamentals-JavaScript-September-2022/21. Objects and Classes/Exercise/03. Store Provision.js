function storeProvisions(available, delivery) {

    let storedProducts = {};

    for (let i = 0; i < available.length; i += 2) {
        let currentProduct = available[i];
        storedProducts[currentProduct] = Number(available[i + 1])
    }

    for (let j = 0; j < delivery.length; j += 2) {
        let currentProduct = delivery[j];

        if (!storedProducts.hasOwnProperty(currentProduct)) {
            storedProducts[currentProduct] = 0
        }
        storedProducts[currentProduct] += Number(delivery[j + 1])
    }

    for (let product in storedProducts) {
        console.log(`${product} -> ${storedProducts[product]}`)
    }

}
storeProvisions(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);