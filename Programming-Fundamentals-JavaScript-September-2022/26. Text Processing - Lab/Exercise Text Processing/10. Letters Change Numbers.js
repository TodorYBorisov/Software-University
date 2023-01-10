function lettersChangeNumbers(string) {
    let alphabet = {
        'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8, 'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13,
        'N': 14, 'O': 15, 'P': 16, 'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24, 'Y': 25, 'Z': 26,
    };

    let words = string.split(' ');
    let sumAllWords = 0;

    for (let word of words) {

        let sum = 0;
        
        if (word.length === 0) {
            sumAllWords += sum;
        } else {

            let firstLetter = word[0];
            let lastLetter = word[word.length - 1];
            let number = Number(word.substring(1, word.length - 1));

            if (firstLetter.toUpperCase() === firstLetter) {
                sum += number / alphabet[firstLetter.toUpperCase()];
            } else {
                sum += number * (alphabet[firstLetter.toUpperCase()]);
            }

            if (lastLetter.toUpperCase() === lastLetter) {
                sum -= alphabet[lastLetter.toUpperCase()];
            } else {
                sum += alphabet[lastLetter.toUpperCase()];
            }
        }
        sumAllWords += sum;
    }
    console.log(sumAllWords.toFixed(2));

} lettersChangeNumbers('P34562Z q2576f   H456z')