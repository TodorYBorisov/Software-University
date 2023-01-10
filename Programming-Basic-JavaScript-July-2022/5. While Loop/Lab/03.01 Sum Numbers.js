function sum(input) {

    let index = 0;

    let n = Number(input[index]);
    index++;

    let sum = 0;

    while (sum < n) {

        let currentNumner = Number(input[index])
        index++;

        sum += currentNumner;

    }
    console.log(sum);


}

sum(["100",
    "10",
    "20",
    "80",
    "40"]);