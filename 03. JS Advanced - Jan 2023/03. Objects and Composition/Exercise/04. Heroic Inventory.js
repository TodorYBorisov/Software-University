function heroicInventory(array) {

    let heroRegister = [];

    for (let line of array) {

        let [name, level, items] = line.split(' / ');
        level = Number(level);

        if (items) {
            items = items.split(', ');
        } else {
            items = [];
        }

        heroRegister.push({ name, level, items });
    }

    console.log(JSON.stringify(heroRegister));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
);