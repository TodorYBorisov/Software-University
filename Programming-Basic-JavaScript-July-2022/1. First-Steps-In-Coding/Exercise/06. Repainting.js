function repaiting(input) {

    let nylon = 1.50;
    let paint = 14.50;
    let paintThinner = 5.00;
    let bags = 0.40;

    let neededNylon = Number(input[0]) + 2;
    let needPaint = Number(input[1]) * 1.1;
    let needThinner = Number(input[2]);
    let workersHours = Number(input[3]);

    let totalSumMaterials = (neededNylon * nylon) + (needPaint * paint) + (needThinner * paintThinner) + bags;

    let amountForWorket = (totalSumMaterials * 0.30) * workersHours;

    let finalSum = totalSumMaterials + amountForWorket;

    console.log(finalSum);
}
repaiting(["5 ",
"10 ",
"10 ",
"1 "]
);