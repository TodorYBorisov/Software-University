function sameNumbers(input) {

    let num = input.toString();
    let isSame = true;
    let firstNumber = num[0];
    let sum = 0;
    let arrL = num.length;

    for (let i = 0; i < arrL; i++) {

        sum += Number(num[i]);

        if (Number(firstNumber) !== Number(num[i])) {

            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(1234);