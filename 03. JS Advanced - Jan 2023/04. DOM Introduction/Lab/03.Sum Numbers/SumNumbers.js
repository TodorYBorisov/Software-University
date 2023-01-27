function calc() {

    const num1 = document.getElementById('num1').value;
    const num2 = document.getElementById('num2').value;
    const result = Number(num1) + Number(num2);

    document.getElementById('sum').value = result;
}

// Това е моят подход за ершението по долу.
// function calc() {

//     const num1 = document.getElementById('num1');
//     const num2 = document.getElementById('num2');
//     const sum = document.getElementById('sum');

//     sum.value = Number(num1.value) + Number(num2.value);
// }