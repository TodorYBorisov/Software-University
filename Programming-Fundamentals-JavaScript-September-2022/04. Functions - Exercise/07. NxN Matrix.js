function nXnMatrix(number) {

    let arr = [];

    for (let i = 1; i <= number; i++) { //външния цикъл пази броя на редовете
        let output = '';
        for (let k = 1; k <= number; k++) {

            output += `${number} `;
        }
        arr.push(output);
    }

    console.log(arr.join('\n'));
}
nXnMatrix(3);