function revealWords(words, text) {

    let wordsArray = words.split(', ');

    for (let word of wordsArray) {

        let match = '*'.repeat(word.length);

        text = text.replace(match, word);
    }
    console.log(text);
}
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages');