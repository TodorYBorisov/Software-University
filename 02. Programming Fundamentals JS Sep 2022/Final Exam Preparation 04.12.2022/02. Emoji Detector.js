function emojiDetector(array) {

    let text = array.shift();
    let patternNumbers = /\d+/gm;
    let patternEmoji = /(\:{2}|\*{2})(?<word>[A-Z][a-z]{2,})\1/g;
    let threshold = patternNumbers.exec(text);
    let coolThresholdNums = '';
    let validEmoji = [];
    let counterEmoji = 0;

    while (threshold !== null) {
        coolThresholdNums += threshold[0];
        threshold = patternNumbers.exec(text);
    }

    let coolThreshold = 1;
    for (const num of coolThresholdNums) {
        coolThreshold *= Number(num);
    }

    console.log(`Cool threshold: ${coolThreshold}`);
    let emoji = patternEmoji.exec(text);

    while (emoji !== null) {
        counterEmoji++;
        let sumLetters = 0;
        let word = emoji.groups.word

        for (let letter of word) {
            sumLetters += letter.charCodeAt()
        }

        if (sumLetters >= coolThreshold) {
            validEmoji.push(emoji[0])
        }

        emoji = patternEmoji.exec(text);
    }

    console.log(`${counterEmoji} emojis found in the text. The cool ones are:`)

    for (const em of validEmoji) {

        console.log(`${em}`);
    }
}
emojiDetector(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"]);
