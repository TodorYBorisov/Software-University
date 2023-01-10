function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {

        if (i === 5 || i === 7) {
            console.log(i + ' -> True');
        } else if (i >= 10) {

            let iToString = i.toString();

            let sumOfDigits = Number(iToString[0]) + Number(iToString[1]);

            if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
                console.log(i + ' -> True');
            } else {
                console.log(i + ' -> False');
            }
        } else {
            console.log(i + ' -> False');
        }
    }
}

specialNumbers(15)

// function specialNumbers(number) {
//     for (let i = 1; i <= number; i++) {
//         let sum = 0
//         for (char of String(i)) {
//             sum += Number(char)
//         }
//         (sum === 5) || (sum === 7) || (sum === 11) ? console.log(`${i} -> True`) : console.log(`${i} -> False`)
//     }
// }