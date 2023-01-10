function sumNumbers(input) {

    let number = Number(input[0]);

    let index = 1;
    
    let sum = 0;

    while (sum<number) {

        let nextNumber = Number(input[index]);

        sum +=nextNumber;
        index++;
        
    }
    console.log(sum);
}

sumNumbers(["100",
    "10",
    "20",
    "80",
    "40"]);