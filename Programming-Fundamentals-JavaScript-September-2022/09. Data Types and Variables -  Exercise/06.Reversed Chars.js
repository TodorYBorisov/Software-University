function reverseChar(char1, char2, char3) {

    let charToString = (char1 + char2 + char3).toString();

    let buff = '';

    for (let i = charToString.length - 1; i >= 0; i--) {

        let char = charToString[i]
        buff += char + ' ';
    }

    console.log(buff);
}

reverseChar('1', 'L', '&')