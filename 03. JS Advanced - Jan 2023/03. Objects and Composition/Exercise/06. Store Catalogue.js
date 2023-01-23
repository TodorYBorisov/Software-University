function storeCatalog(array) {

    let catalog = {};

    for (let line of array) {

        let [productName, productPrice] = line.split(' : ');

        catalog[productName] = Number(productPrice);
    }

    let sorted = Object.entries(catalog).sort((a, b) => a[0].localeCompare(b[0]));

    let firstLetter = '';

    for (let line of sorted) {
        let [name, price] = line;

        if (name.charAt(0) === firstLetter) {
            console.log(`  ${name}: ${price}`);
            
        } else {
            firstLetter = name.charAt(0);
            console.log(firstLetter);
            console.log(`  ${name}: ${price}`);
        }
    }
}
storeCatalog(['Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);