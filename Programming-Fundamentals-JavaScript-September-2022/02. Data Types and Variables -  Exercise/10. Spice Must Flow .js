function spiceMustFlow(startingYield) {

    let daysMinig = 0;
    let workersConsumption = 26;
    let minimumYield = 100;
    let actualYield = startingYield;
    let totalAmountOfSpices = 0
    let yieldDrop = 10;

    while (actualYield >= minimumYield) {
        daysMinig++;
        totalAmountOfSpices += actualYield - workersConsumption;
        actualYield -= yieldDrop;

    }

    if (totalAmountOfSpices > 0) {
        console.log(daysMinig);
        console.log(totalAmountOfSpices - workersConsumption);
    } else {
        console.log(daysMinig);
        console.log(totalAmountOfSpices);
    }
}

spiceMustFlow(-100);
