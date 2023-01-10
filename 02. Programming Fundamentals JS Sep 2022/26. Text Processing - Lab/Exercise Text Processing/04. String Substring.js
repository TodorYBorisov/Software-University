function stringSubstracting(word, text) {

    let sentence = text.split(' ');

    for (let el of sentence) {

        if (el.toLowerCase() === word) {
            return console.log(word);
        } else {
            continue;
        }
    }
    console.log(`${word} not found!`);
}
stringSubstracting('javascript', 'JavaScript is the best programming language');