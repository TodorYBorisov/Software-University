function magicSum(array, magicNumber) {

    for (let i = 0; i < array.length; i++) {
        let num1 = Number(array[i]);

        for (let j = i + 1; j < array.length; j++) {
            let sum = 0;

            let num2 = Number(array[j]);

            sum = num1 + num2;

            if (sum === magicNumber) {

                console.log(`${num1} ${num2}`);
            } 
        }
    }

}

magicSum([1, 7, 6, 2, 19, 23], 8);