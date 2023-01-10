function sumPrimeNonPrime(input) {

    let index = 0;
    let command = input[index];
    index++;


    let sumPrime = 0;
    let sumNonPrime = 0;

    while (command !== "stop") {

        let currentNumber = Number(command);
        
        let prime = 0; // създаваме си един брояч за простите числа, да следи броя на делителите

        if (currentNumber < 0) {
            console.log("Number is negative.");
            
            command = input[index];
            index++;
            continue;
        }
        // правим ци цикъл който да провери какво е числото, то е просто ако се дели на 1 и на себеси без остатък
        for (let i = 1; i <= currentNumber; i++) {

            if (currentNumber % i === 0) {
                prime++;
            }
        }

        if (prime == 2) {
            sumPrime += currentNumber;
        } else {
            sumNonPrime += currentNumber;
        }

        command = input[index];
        index++;

    }

    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

sumPrimeNonPrime(["30",
    "83",
    "33",
    "-1",
    "20",
    "stop"]);