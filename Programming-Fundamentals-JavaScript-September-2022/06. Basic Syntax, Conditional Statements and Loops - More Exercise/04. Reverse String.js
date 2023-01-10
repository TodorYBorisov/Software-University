function reverseString(input) {

    let word = String(input);

    let reverseString = '';

    for (let i = word.length - 1; i >= 0; i--) {

        reverseString += word[i];
    }

    console.log(reverseString)
}
reverseString('SoftUni');