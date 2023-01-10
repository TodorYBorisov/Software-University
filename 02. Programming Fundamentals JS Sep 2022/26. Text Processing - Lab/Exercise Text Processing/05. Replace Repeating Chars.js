function repeatingChars(string) {

    let stringArr = string.split('');
    let result = "";

    for (let i = 0; i < stringArr.length; i++) {
        let char = stringArr[i];
        if (char !== string[i + 1]) {
            result+=char
        }
    }
    console.log(result);
}
repeatingChars('qqqwerqwecccwd')