function minerTask(array) {

    let colection = {};

    for (let i = 0; i < array.length; i += 2) {
        let resource = array[i];
        let quantity = array[i + 1];

        if (!colection[resource]) {
            colection[resource] = Number(quantity);
        } else {
            colection[resource] += Number(quantity)
        }
    }

    for (let key in colection) {
        console.log(`${key} -> ${colection[key]}`);
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);