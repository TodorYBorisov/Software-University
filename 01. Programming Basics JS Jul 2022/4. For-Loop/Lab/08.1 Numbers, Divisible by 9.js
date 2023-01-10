function numbersDivisible(input) {

    let n = Number(input[0]);
    let m = Number(input[1]);

    let sum = 0;
    let outPutNumbers = "";

    for (let i = n; i <= m; i++) {

        if (i % 9 === 0) {

            sum += i;
            outPutNumbers += i + "\n";
        }
    }

    console.log("The sum: " + sum);
    console.log(outPutNumbers);

}
numbersDivisible(["100", "200"]);