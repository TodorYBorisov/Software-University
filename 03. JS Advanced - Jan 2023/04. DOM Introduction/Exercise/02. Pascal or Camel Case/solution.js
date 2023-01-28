function solve() {
    let string1 = document.getElementById('text').value;
    let string2 = document.getElementById('naming-convention').value;

    let resultConverted = '';

    let array = string1.toLowerCase().split(' ');

    if (string2 === 'Camel Case') {

        resultConverted += array[0];

        for (let i = 1; i < array.length; i++) {
            const element = array[i];
            let rest = element.slice(1);
            resultConverted += element.charAt(0).toUpperCase() + rest;
        }
    } else if (string2 === 'Pascal Case') {
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            let rest = element.slice(1);
            resultConverted += element.charAt(0).toUpperCase() + rest;
        }
    } else {
        resultConverted += 'Error!';
    }
    document.getElementById('result').textContent = resultConverted;
}