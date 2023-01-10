function shopppig(input) {

    let budget = Number(input[0]);
    let numVideocards = Number(input[1]);
    let numProcesors = Number(input[2]);
    let numRam = Number(input[3]);

    let videoCard = 250;
    let procesor = numVideocards * videoCard * 0.35;
    let ram = numVideocards * videoCard * 0.1;

    let totalSum = (numVideocards * videoCard) + (numProcesors * procesor) + (numRam * ram);

    if (numVideocards > numProcesors) {
        totalSum = totalSum * 0.85;
    }

    if (totalSum <= budget) {
        let leftMoney = budget - totalSum;
        console.log(`You have ${leftMoney.toFixed(2)} leva left!`);
    }
    else {
        let moneyNeeded = Math.abs(budget - totalSum);
        console.log(`Not enough money! You need ${moneyNeeded.toFixed(2)} leva more!`)
    }

}

//shopppig(["900", "2", "1", "3"])
shopppig(["920.45",
"3",
"1",
"1"])
