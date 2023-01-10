function primeNumberChecker(number) {

    let prime = 0;

    for (let i = 0; i <= number; i++) {

        if (number % i === 0)
            prime++;

    }

    if (prime === 2) {
        console.log('true');
    } else {
        console.log('false');
    }
}
primeNumberChecker(8);