function storeCatalog(array) {

    let result = array.sort((a, b) => a.localeCompare(b));
    let current = [];
    let firstLetter = '';
    let resultL = result.length;

    for (let i = 0; i < resultL; i++) {
        current = result[i].split(' : ');

        if (result[i][0] !== firstLetter) {

            console.log(result[i][0]);

        }
        console.log(`  ${current[0]}: ${current[1]}`);
        firstLetter = result[i][0];
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