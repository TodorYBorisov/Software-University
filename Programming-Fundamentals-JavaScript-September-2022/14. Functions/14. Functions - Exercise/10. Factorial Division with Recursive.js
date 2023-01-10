function factorialDivision(num1) {

    if (num1 === 0 || num1 === 1) {
        return 1;
    } else {
        return num1 * factorialDivision(num1 - 1);

    }
}
let num1 = 5
let result = factorialDivision(num1);
console.log(result);