function combinations(input) {
    let index = 0;

    let n = Number(input[index]);
    let counter = 0;

    for (let first = 0; first <= n; first++) {
        for (let second = 0; second <= n; second++) {
            for (let third = 0; third <= n; third++) {
                if (first + second + third === n) {
                    counter++;
                }
            }
        }
    }
    console.log(counter)
}

combinations(["25"]);