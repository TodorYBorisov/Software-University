function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetBroken = 0;
    let swordBroken = 0;
    let shieldBroken = 0;
    let armorBroken = 0;

    for (let i = 1; i <= lostFights; i++) {

        if (i % 2 === 0) {
            helmetBroken++;
        }
        if (i % 3 === 0) {
            swordBroken++;
        }
        if (i % 6 === 0) {
            shieldBroken++;
        }
        if (i % 12 === 0) {
            armorBroken++;
        }
    }

    let expenses = (helmetPrice * helmetBroken) + (swordPrice * swordBroken) + (shieldPrice * shieldBroken) + (armorPrice * armorBroken);

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);

}
gladiatorExpenses(23, 12.50, 21.50, 40, 200)