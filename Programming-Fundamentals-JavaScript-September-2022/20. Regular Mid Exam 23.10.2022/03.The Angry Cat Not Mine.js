function angryCat(priceList, entryPoint, type) {

    let leftSum = 0;
    let rightSum = 0;

    for (let i = entryPoint; i >= 0; i--) {
        let currentElement = priceList[i - 1];

        if (type === 'cheap') {
            if (currentElement < priceList[entryPoint]) {
                leftSum += currentElement;
            }
        } else if (type === 'expensive') {
            if (currentElement >= priceList[entryPoint]) {
                leftSum += currentElement
            }
        }
    }

    for (let i = entryPoint + 1; i < priceList.length; i++) {
        let currentElement = priceList[i];

        if (type === 'cheap') {
            if (currentElement < priceList[entryPoint]) {
                rightSum += currentElement;
            }
        } else if (type === 'expensive') {
            if (currentElement >= priceList[entryPoint]) {
                rightSum += currentElement
            }
        }
    }

    if (leftSum >= rightSum) {
        console.log(`Left - ${leftSum}`);
    } else {
        console.log(`Right - ${rightSum}`);
    }
}
angryCat([6, 2, 3, 4, 0, 6, 7, 8], 5, 'expensive');
angryCat([6, 2, 3, 4, 0, 6, 7, 3, 5, -8], 5, 'cheap');
angryCat([1, 5, 1], 1, 'cheap');
angryCat([5, 10, 12, 5, 4, 20], 3, 'cheap');
angryCat([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3], 7, 'expensive');
