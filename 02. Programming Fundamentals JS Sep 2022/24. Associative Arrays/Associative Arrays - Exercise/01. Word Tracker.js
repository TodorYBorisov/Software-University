function wordTracker(array) {

    let words = array.shift().split(' ');
    let result = {};

    for (const word of words) {
        result[word] = 0
    }

    for (let word of array) {
        if (result.hasOwnProperty(word)) {

            result[word]++;
        }
    }

    let sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);;
    for (const kvp of sorted) {
        console.log(`${kvp[0]} - ${kvp[1]}`);
    }
}
wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'])