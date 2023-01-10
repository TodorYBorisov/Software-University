function gladiatorInventory(array) {

    let inventory = array.shift().split(' ');

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');
        let element = command[1];

        if (command[0] === 'Buy') {
            if (!inventory.includes(element)) {
                inventory.push(element);
            }
        } else if (command[0] === 'Trash') {

            for (let i = 0; i < inventory.length; i++) {

                let elementTocheck = inventory[i];

                if (elementTocheck === element) {
                    inventory.splice(i, 1)
                }
            }
        } else if (command[0] === 'Repair') {
            for (let i = 0; i < inventory.length; i++) {
                let elementTocheck = inventory[i];

                if (elementTocheck === element) {
                    let moveToLastPosition = inventory.splice(i, 1)
                    inventory.push(moveToLastPosition.join());
                }
            }
        } else if (command[0] === 'Upgrade') {

            for (let i = 0; i < inventory.length; i++) {
                let elementTocheck = inventory[i];
                let upgrade = element.split('-');

                if (elementTocheck === upgrade[0]) {
                    inventory.splice(i + 1, 0, `${elementTocheck}:${upgrade[1]}`)
                }
            }
        }
    }

    console.log(inventory.join(' '))
}


gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V']
);