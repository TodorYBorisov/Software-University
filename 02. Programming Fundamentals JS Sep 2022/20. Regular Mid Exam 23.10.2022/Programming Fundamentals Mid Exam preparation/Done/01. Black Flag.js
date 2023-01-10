function blackFlag(array) {

    let days = Number(array[0]);
    let dailyPlunder = Number(array[1]);
    let expectedPlunder = Number(array[2]);
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;

        if (i % 3 == 0 && i % 5 === 0) {
            totalPlunder += (dailyPlunder * 0.5);
            totalPlunder *= 0.7;

        } else if (i % 3 == 0) {
            totalPlunder += (dailyPlunder * 0.5);

        } else if (i % 5 == 0) {
            totalPlunder *= 0.7;
        }
    }

    if (totalPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else {
        let lessPlunderPercent = (totalPlunder / expectedPlunder) * 100;

        console.log(`Collected only ${lessPlunderPercent.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["15", "40", "300"]);
blackFlag(["10", "20", "380"]);
