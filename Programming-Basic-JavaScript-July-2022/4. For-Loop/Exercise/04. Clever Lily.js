function cleverLily(input) {

    let age = Number(input[0]);
    let priceForWashingmashine = Number(input[1]);
    let pricePerToy = Number(input[2]);

    let toyCounter = 0;
    let extraMoney = 0;
    let money = 0;
    let evenCounter=0;

    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            evenCounter ++;
            extraMoney += 10;
            money += extraMoney;


        } else {
            toyCounter += 1;
        }

    }

    let savedMoney = money + (toyCounter * pricePerToy) - evenCounter;

    if (savedMoney >= priceForWashingmashine) {

        let leftmoney = savedMoney - priceForWashingmashine;
        console.log(`Yes! ${(leftmoney).toFixed(2)}`);
    }
    else {
        let moneyNeeded = Math.abs(savedMoney - priceForWashingmashine);
        console.log(`No! ${(moneyNeeded).toFixed(2)}`);
    }
}



cleverLily(["21","1570.98","3"]);