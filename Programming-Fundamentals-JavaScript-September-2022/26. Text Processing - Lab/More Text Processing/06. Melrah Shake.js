function merlahShake(array) {

    let pattern = array.pop()
    let string = array.shift()

    while (pattern.length > 0) {
        let startIndex = string.indexOf(pattern);
        let endIndex = string.lastIndexOf(pattern)

        if (startIndex !== endIndex && (startIndex > -1 && endIndex > -1)) {

            string = string.split('')
            string.splice(startIndex, pattern.length)
            string = string.join('')
            endIndex = string.lastIndexOf(pattern)
            string = string.split('')
            string.splice(endIndex, pattern.length)
            string = string.join('')

            let letterToDelete = pattern[Math.floor(pattern.length / 2)] // Взимаме от патърна, буквата, която се намира на индекс равен на дължината на патърна делено на 2
            pattern = pattern.replace(letterToDelete, '');  // Променяме буквата с празно пространство
            console.log('Shaked it.');
        } else {
            break;
        }
    }

    console.log('No shake.');
    console.log(string);
}
merlahShake(['astalavista baby', 'sta']);
merlahShake(['##mtm!!mm.mm*mtm.#','mtm'])