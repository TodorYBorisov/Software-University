function movie(input) {

    let movieBudget = Number(input[0]);
    let numOfStatist = Number(input[1]);
    let priceForClothesPerStatist = Number(input[2]);

    let decor = movieBudget * 0.1;
   

    if (numOfStatist >= 150) {
        priceForClothesPerStatist = priceForClothesPerStatist * 0.9;
    }
    let sumForClothes = numOfStatist * priceForClothesPerStatist;
    let totalSum = decor + sumForClothes;

    if (movieBudget >= totalSum) {
        let moneyLeft = movieBudget - totalSum;
        console.log("Action!");
        console.log(`Wingard starts filming with ${moneyLeft.toFixed(2)} leva left.`);
    }
    else if (totalSum > movieBudget) {

        let moneyNeeded =Math.abs (movieBudget -totalSum);
        console.log("Not enough money!");
        console.log(`Wingard needs ${moneyNeeded.toFixed(2)} leva more.`);
    }
}

//movie(["20000", "120", "55.5"])
movie(["9587.88",
"222",
"55.68"])
