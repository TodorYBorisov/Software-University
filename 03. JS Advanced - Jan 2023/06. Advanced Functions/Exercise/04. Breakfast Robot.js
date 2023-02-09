function breakfastRobot() {
    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 2 },
        burger: { carbohydrate: 5, fat: 7, flavour: 7 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 1 }
    };

    let store = { protein: 0, carbohydrate: 0, fat: 0, flavours: 0 };

    function manager(line) {

        let [command, param, quantity] = line.split(' ');

        if (command === 'prepare') {

            let recipe = recipes[param];

            for (let element in recipe) {

                if (recipe[element] * quantity > store[element]) {
                    return `Error: not enough ${element} in stock `;
                }
            }

            for (let element in recipe) {

                store[element] -= recipe[element] * quantity;
            }
            return 'Success';
        } else if (command === 'restock') {

            store[param] += Number(quantity);

            return 'Success';
        } else if (command === 'report') {
            return `protein=${store.protein} carbohydrate=${store.carbohydrate} fat=${store.fat} flavour=${store.flavours}`;
        }
    }
    return manager;
}
let manager = breakfastRobot();
console.log(manager('restock flavour 50')); // Success 
console.log(manager('prepare lemonade 4')); // Error: not enough carbohydrate in stock 
