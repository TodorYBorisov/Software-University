function valueOfaString(array) {

    let command = array.pop();
    let arrSplit = array.toString().split('')
    let sum = 0;

    if (command === 'LOWERCASE') {
        for (let char of arrSplit) {
            if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
                sum += Number(char.charCodeAt())
            }
        }
    } else if (command === 'UPPERCASE') {
        for (let char of arrSplit) {
            if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
                sum += Number(char.charCodeAt())
            }
        }
    }
    console.log(`The total sum is: ${sum}`);
}
valueOfaString(['HelloFromMyAwesomePROGRAM', 'LOWERCASE']);
valueOfaString(['AC/DC', 'UPPERCASE']);