function lowestPriceinCities(array) {

    let result = {};

    for (let line of array) {

        let [townName, productName, productPrice] = line.split(' | ');

        productPrice = Number(productPrice);

        if (!result[productName]) {
            result[productName] = { productPrice, townName };
        } else {
            if (result[productName].productPrice > productPrice) {
                result[productName] = { productPrice, townName };
            }
        }
    }

    for (let key in result) {
        console.log(`${key} -> ${result[key].productPrice} (${result[key].townName})`);
    }
} 
lowestPriceinCities(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
