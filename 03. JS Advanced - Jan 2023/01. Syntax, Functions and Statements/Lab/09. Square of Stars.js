function squareOfStars(input) {

    if (input === undefined) {
        const num = 5;
        for (let i = 1; i <= num; i++) {
            console.log('* '.repeat(num));
        }

    } else {
        for (let i = 1; i <= input; i++) {
            console.log('* '.repeat(input));
        }
    }
}
squareOfStars(2)