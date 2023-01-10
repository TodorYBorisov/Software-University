function storage(array) {

    let store = {};

    for (let product of array) {

        let [item, quantity] = product.split((' '));

        if (!store[item]) {
            store[item] = quantity;
        } else {
            let currentQuantity = Number(store[item]);
            let newQuantity = currentQuantity + Number(quantity)
            store[item] = newQuantity
        }
    }

    for (const [item, quantity] of Object.entries(store)) {

        console.log(`${item} -> ${quantity}`);
    }

    // for (const key in store) {
    //     console.log(`${key} -> ${store[key]}`);
    // }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']);