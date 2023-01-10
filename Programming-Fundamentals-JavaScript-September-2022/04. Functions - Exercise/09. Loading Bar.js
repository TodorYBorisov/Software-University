function loadingBar(num) {

    let allPoints = 100 / 10
    let actualPointsPercent = num / 10;

    if (num === 100) {
        console.log(`${num}% Complete!`);
    } else if (num % 10 === 0) {

        let restPoints = allPoints - actualPointsPercent;
        let print = '.'.repeat(restPoints);
        let printPercent = '%'.repeat(actualPointsPercent);

        console.log(`${num}% [${printPercent}${print}]`);
        console.log('Still loading...');
    }

}

loadingBar(50);