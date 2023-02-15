function juiceFlavors(input) {

    let juices = {};
    let bottles = {};

    for (let line of input) {
        let [juiceName, juiceQuantity] = line.split(' => ');
        juiceQuantity = Number(juiceQuantity);

        if (!juices[juiceName]) {
            juices[juiceName] = juiceQuantity;
        } else {
            juices[juiceName] += juiceQuantity;
        }

        if (juices[juiceName] >= 1000) {
            let numberOfBottles = Math.trunc(juices[juiceName] / 1000);

            if (!bottles[juiceName]) {
                bottles[juiceName] = numberOfBottles;
            } else {
                bottles[juiceName] += numberOfBottles;
            }
            juices[juiceName] -= numberOfBottles * 1000;

        }
    }

    for (let key in bottles) {
        console.log(`${key} => ${bottles[key]}`);
    }
}

// juiceFlavors(['Orange => 2000',
//     'Peach => 1432',
//     'Banana => 450',
//     'Peach => 600',
//     'Strawberry => 549']);

juiceFlavors(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']
);
