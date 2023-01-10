function catalogue(array) {

    let storeProduct = {};

    for (let product of array) {
        let [name, price] = product.split(' : ');
        storeProduct[name] = Number(price)
    }

    let sorted = Object.entries(storeProduct).sort((a, b) => a[0].localeCompare(b[0]));

    let firstLetter ='';

    for (let element of sorted) {

        let [name, price] = element;

        if (name.charAt(0) === firstLetter) {
            console.log(`  ${name}: ${price}`);
        } else {
            firstLetter = name.charAt(0);
            console.log(firstLetter);
            console.log(`  ${name}: ${price}`);
        }
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);

