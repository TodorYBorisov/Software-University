function passwordGenerator(array) {

    let concatenated = array[0] + array[1];
    let word = array[2].toUpperCase();
    let password = '';
    let usedLetters = 0;

    for (let i = 0; i < concatenated.length; i++) {
       
        let char = concatenated[i];

        if ((char === "a") || (char === "e") || (char === "i") || (char === "o") || (char === "u")) {

            char = word[usedLetters];
            usedLetters++;
            if (usedLetters === word.length) {
                usedLetters = 0
            }
        }
        password += char
    }

    console.log(`Your generated password is ${password.split('').reverse().join('')}`)
}
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters', 'absolute'
    ]);
