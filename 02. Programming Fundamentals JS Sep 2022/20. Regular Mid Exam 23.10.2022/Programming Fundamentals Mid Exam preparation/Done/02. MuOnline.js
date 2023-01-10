function muOnline(array) {

    let dungen = array.split('|');
    let health = 100;
    let bitcoins = 0;
    let roomCounter = 0;
    let allBitCooins = 0;

    for (let i = 0; i < dungen.length; i++) {
        let currentRoom = dungen[i].split(' ');
        let command = currentRoom[0];
        let num = Number(currentRoom[1]);
        roomCounter++;

        if (command === 'potion') {

            if (health + num > 100) {
                num = 100 - health;
                health = 100;
            } else {
                health += num;
            }
            console.log(`You healed for ${num} hp.`);
            console.log(`Current health: ${health} hp.`);

        } else if (command === 'chest') {
            bitcoins = Number(num);
            allBitCooins += Number(num);

            console.log(`You found ${bitcoins} bitcoins.`);
        } else {
            health -= Number(num);
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Bitcoins: ${allBitCooins}`);
    console.log(`Health: ${health}`);
}
muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110");