function simpleCalculator(numOne, numTwo, operator) {

    switch (operator) {
        case 'multiply':
            let multiply = (numOne, numTwo) => numOne * numTwo;
            console.log(multiply(numOne,numTwo))
            break;
        case 'divide':
            let divide = (numOne, numTwo) => numOne / numTwo;
            console.log(divide(numOne,numTwo))
            break;
        case 'add':
            let add = (numOne, numTwo) => numOne + numTwo;
            console.log(add(numOne,numTwo))
            break;
        case 'subtract':
            let subtract = (numOne, numTwo) => numOne - numTwo;
            console.log(subtract(numOne,numTwo))
            break;
    }
    
}
simpleCalculator(5, 5, 'multiply');



// let result = (a,b) => a+b;
// console.log(result(5,6))

// let sum = function(a,b){
//     return a+b;
// }
// console.log(sum(2,3));

// let double = (a)=>a*2;
// let doubleResult = double(7)

// console.log(doubleResult)
