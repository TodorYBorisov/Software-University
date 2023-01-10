function heroesOfCodeAndLogic(array) {

    let numOfHeroes = Number(array.shift());

    let heroesList = {};

    let heroes = array.splice(0, numOfHeroes);

    for (let hero of heroes) {
        let [name, hitPoints, manaPoints] = hero.split(' ')
        if (!heroesList[name]) {
            heroesList[name] = {
                hitPoints: Number(hitPoints),
                manaPoints: Number(manaPoints),
            }
        }
    }

    let line = array.shift();

    while (line !== 'End') {
        let command = line.split(' - ');

        if (command[0] === 'Heal') {

            let name = command[1];
            let amount = Number(command[2]);

            if (heroesList[name].hitPoints + amount > 100) {
                let recover = 100 - heroesList[name].hitPoints;
                heroesList[name].hitPoints += recover;
                console.log(`${name} healed for ${recover} HP!`);
            } else {
                heroesList[name].hitPoints += amount;
                console.log(`${name} healed for ${amount} HP!`);
            }

        } else if (command[0] === 'Recharge') {
            let name = command[1];
            let amount = Number(command[2]);

            if (heroesList[name].manaPoints + amount > 200) {

                let recovered = 200 - heroesList[name].manaPoints
                heroesList[name].manaPoints += recovered;
                console.log(`${name} recharged for ${recovered} MP!`);
            } else {
                heroesList[name].manaPoints += amount;
                console.log(`${name} recharged for ${amount} MP!`);
            }

        } else if (command[0] === 'TakeDamage') {
            let name = command[1];
            let damage = Number(command[2]);
            let attacker = command[3];

            let currentHP = heroesList[name].hitPoints - damage;

            if (currentHP > 0) {
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${currentHP} HP left!"`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroesList[name];
            }

        } else if (command[0] === 'CastSpell') {
            let name = command[1];
            let manaPointsNeeded = Number(command[2]);
            let spelName = command[3]

            if (heroesList[name].manaPoints >= manaPointsNeeded) {
                let leftMana = heroesList[name].manaPoints - manaPointsNeeded;
                console.log(`${name} has successfully cast ${spelName} and now has ${leftMana} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spelName}!`);
            }
        }

        line = array.shift();
    }

    for (const hero in heroesList) {

        console.log(`${hero}`);
        console.log(`  HP: ${heroesList[hero].hitPoints}`);
        console.log(`  MP: ${heroesList[hero].manaPoints}`);
    }
}
heroesOfCodeAndLogic([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']);

// heroesOfCodeAndLogic([
//     '4',
//     'Adela 90 150',
//     'SirMullich 70 40',
//     'Ivor 1 111',
//     'Tyris 94 61',
//     'Heal - SirMullich - 50',
//     'Recharge - Adela - 100',
//     'CastSpell - Tyris - 1000 - Fireball',
//     'TakeDamage - Tyris - 99 - Fireball',
//     'TakeDamage - Ivor - 3 - Mosquito',
//     'End'
// ]);
