function graduation(input) {

    let index = 0;
    let name = input[index];
    index++;

    let sumGrade = 0;
    let fails = 0;
    let i = 1

    let hasExcluded = false;

    while (i <= 12) {

        let curentRating = Number(input[index]);
        index++;

        if (curentRating < 4.00) {

            fails++;

            if (fails === 2) {

                hasExcluded = true;
                break;
            }
            continue;
        }

        sumGrade += curentRating;
        i++;
    }
    let avgGrade = sumGrade / 12;

    if (hasExcluded) {
        console.log(`${name} has been excluded at ${i} grade`);
    } else {
        console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }

}


graduation(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);