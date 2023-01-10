function sorting(array) {

    let sortArray = array.sort((a, b) => b - a);

    let newArray = [];

    for (let i = 0; i < sortArray.length; i++) {
        let firstPush = sortArray.shift()
        let lastPush = sortArray.pop()

        newArray.push(firstPush);
        newArray.push(lastPush);
    }

    newArray.push(sortArray.shift());
    newArray.push(sortArray.pop());

    console.log(newArray.join(' '))
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])

