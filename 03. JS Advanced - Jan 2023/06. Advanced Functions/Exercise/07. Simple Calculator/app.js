function calculator() {

    let input1 = null;
    let input2 = null;
    let resultField = null;

    let result = {

        init: (selector1, selector2, resultSelector) => {
            input1 = document.querySelector(selector1);
            input2 = document.querySelector(selector2);
            resultField = document.querySelector(resultSelector);
        },

        add: () => {

            resultField.value = Number(input1.value) + Number(input2.value);
        },

        subtract: () => {
            resultField.value = Number(input1.value) - Number(input2.value);
        }
    };
    return result;

    // let selector1 = null;
    // let selector2 = null;
    // let resultSelector = null;

    // return {
    //     init: () => {
    //         selector1 = document.getElementById('num1');
    //         selector2 = document.getElementById('num2');
    //         resultSelector = document.getElementById('result');
    //     },
    //     add: () => {
    //         resultSelector.value = Number(selector1.value) + Number(selector2.value);
    //     },
    //     subtract: () => {
    //         resultSelector.value = Number(selector1.value) - Number(selector2.value);
    //     }
    // };
}
const calculate = calculator();
calculate.init('#num1', '#num2', '#result'); 