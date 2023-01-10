function wordOccurences(array) {

    let wordOccurs = {};

    for (let word of array) {
        let counter = 0
        if (!wordOccurs[word]) {
            counter++;
            wordOccurs[word] = counter
        } else {
            wordOccurs[word] += 1
        }
    }

    let wordOccursArr = Object.entries(wordOccurs);
    let sortedArr = wordOccursArr.sort((a, b) => b[1] - a[1]);
    
    for (let [word,num] of sortedArr) {

        console.log(`${word} -> ${num} times`);
    }
}
wordOccurences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])