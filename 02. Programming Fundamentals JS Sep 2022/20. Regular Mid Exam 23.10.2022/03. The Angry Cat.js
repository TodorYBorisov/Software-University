function theAngryCat(priceList, entryPoint, type) {

    let index = priceList[entryPoint]
    let leftSum = 0
    let rightSum = 0

    if (type === 'cheap') {

        for (let i = 0; i < entryPoint; i++) {
            if (priceList[i] >= 0 && priceList[i] < index) {
                leftSum += priceList[i];
            }
        }
        for (let j = entryPoint + 1; j < priceList.length; j++) {

            if (priceList[j] >= 0 && priceList[j] < index) {
                rightSum += priceList[j];
            }

        }
    } else if (type === 'expensive') {

        for (let i = 0; i < entryPoint - 1; i++) {
            if (priceList[i] > 0 && priceList[i] >= index) {
                leftSum += priceList[i];
            }
        }
        for (let j = entryPoint + 1; j < priceList.length; j++) {

            if (priceList[j] > 0 && priceList[j] >= index) {
                rightSum += priceList[j];
            }

        }
    }

    if (leftSum >= rightSum) {
        console.log(`Left - ${leftSum}`);
    }
    else {
        console.log(`Right - ${rightSum}`);
    }

}

theAngryCat([5, 10, 12, 5, 4, 20], 3, "cheap");
theAngryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, "expensive")
