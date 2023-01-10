function inventory(array) {

    let inventory = array.shift().split(', ');

    let command = array.shift();

    while (command !== 'Craft!') {

        let action = command.toString().split(' - ');

        if (action[0] === 'Collect') {
            let item = action[1];

            if (!inventory.includes(item)) {
                inventory.push(item)
            }

        } else if (action[0] === 'Drop') {
            let item = action[1];

            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                inventory.splice(index, 1);
            }

        } else if (action[0] === 'Combine Items') {
            let split = action[1].split(':');
            let oldItem = split[0];
            let newItem = split[1];

            if (inventory.includes(oldItem)) {
                let index = inventory.indexOf(oldItem);
                inventory.splice(index+1,0, newItem)
            }

        } else if (action[0] === 'Renew') {
            let item = action[1];

            if (inventory.includes(item)) {
                let index = inventory.indexOf(item);
                let rearangeItem = inventory.splice(index, 1);
                inventory.push(rearangeItem.join());
            }
        }

        command = array.shift();
    }

    console.log(inventory.join(', '))
}
inventory([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]
  );