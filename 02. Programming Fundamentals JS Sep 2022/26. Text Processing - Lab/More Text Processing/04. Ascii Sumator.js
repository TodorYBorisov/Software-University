function asciiSimulator(array) {

    let fisrt = Number(array[0].charCodeAt());
    let second = Number(array[1].charCodeAt());
    let string = array[2]

    let sum = 0;

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let charNum = Number(char.charCodeAt());

        if (fisrt < charNum && charNum < second) {
            sum += charNum
        } else if (fisrt > charNum && charNum > second) {
            sum += charNum
        }
    }

    console.log(sum);
}
asciiSimulator(['.', '@', 'dsg12gr5653feee5']);
asciiSimulator(['?', 'E', '@ABCEF']);
asciiSimulator(['a', '1', 'jfe392$#@j24ui9ne#@$']);