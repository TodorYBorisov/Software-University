function englishName(number) {

    let lastDigit = number % 10;

    if (lastDigit < 0) {
        lastDigit = Math.abs(lastDigit)
    }

    let english = '';

    switch (lastDigit) {
        case 0:
            english = 'zero'
            break;
        case 1:
            english = 'one'
            break;
        case 2:
            english = 'two'
            break;
        case 3:
            english = 'three'
            break;
        case 4:
            english = 'four'
            break;
        case 5:
            english = 'five'
            break;
        case 6:
            english = 'six'
            break;
        case 7:
            english = 'seven'
            break;
        case 8:
            english = 'eight'
            break;
        case 9:
            english = 'nine'
            break;
    }


console.log(english);

}

englishName(-1)