function countStringOccurrences(text, word) {

    let splited = text.split(' ');
    let result = splited.filter(el => el === word);
    console.log(result.length);

}
countStringOccurrences('This is a word and it also is a sentence', 'is')