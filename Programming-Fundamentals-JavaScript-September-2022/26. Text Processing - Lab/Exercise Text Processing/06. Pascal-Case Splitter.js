function pascalCaseSpliter(text) {

    let result = [];
    let currentWord = text[0]

    for (let i = 1; i < text.length; i++) {
        let currentChar = text[i];

        if ((currentChar.toLowerCase()) === currentChar) {
            currentWord += currentChar
        } else {
            result.push(currentWord)
            currentWord = currentChar
        }
    }

    result.push(currentWord);
    console.log(result.join(', '));
}
pascalCaseSpliter('HoldTheDoor')

// function pascalCaseSpliter(text) {
//     let result = text[0];
//     let lower = text.toLowerCase();

//     for (let i = 1; i < text.length; i++) {
//         if (text[i] !== lower[i]) {
//             result += ', '
//         }
//         result += text[i];
//     }
//     console.log(result);
// }
// pascalCaseSpliter('HoldTheDoor')