function factorialDivision(num1, num2) {

    let factorelFromNum1 = 1;
    let factorelFromNum2 = 1;

    for (let i = num1; i >= 1; i--) {
        factorelFromNum1 = factorelFromNum1 * i
    }

    for (let j = num2; j >= 1; j--) {
        factorelFromNum2 = factorelFromNum2 * j
    }

    let result = factorelFromNum1 / factorelFromNum2;

    console.log(result.toFixed(2));

}

factorialDivision(5, 2);

function countDown(x) {
    console.log(x);
    if (x > 0) { countDown(x - 1); }
}
