function solve() {
    let selectMenuTo = document.getElementById('selectMenuTo');
    let result = document.getElementById('result');
    let input = document.getElementById('input');

    let option1 = document.createElement('option');
    option1.value = 'binary';
    option1.innerHTML = 'Binary';
    selectMenuTo.appendChild(option1);

    let option2 = document.createElement('option');
    option2.value = 'hexadecimal';
    option2.innerHTML = 'Hexadecimal';
    selectMenuTo.appendChild(option2);

    document.getElementsByTagName('button')[0].addEventListener('click', whenClicked);

    function whenClicked() {

        if (selectMenuTo.value === 'binary') {

            result.value = Number(input.value).toString(2);

        } else if (selectMenuTo.value === 'hexadecimal') {

            result.value = Number(input.value).toString(16).toUpperCase();
        }
    }
}