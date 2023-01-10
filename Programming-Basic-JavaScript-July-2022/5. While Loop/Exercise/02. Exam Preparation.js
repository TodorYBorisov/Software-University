function examPreparation(input) {

    let index = 0;

    let badGrade = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let goodGradeCounter = 0;
    let badGradeCounter = 0;
    let sumAllGrades = 0;
    let problems = "";

    while (command !== "Enough") {

        let rating = Number(input[index]);
        index++;

        sumAllGrades += rating;
        problems = command;

        if (rating <= 4) {
            badGradeCounter++;
            if (badGradeCounter === badGrade) {

                console.log(`You need a break, ${badGradeCounter} poor grades.`);
                return;
            }

        } else {
            goodGradeCounter++;
        }

        command = input[index];
        index++;
    }

    let totalproblems = goodGradeCounter + badGradeCounter;

    let avgScore = sumAllGrades / totalproblems;

    console.log(`Average score: ${avgScore.toFixed(2)}`);
    console.log(`Number of problems: ${totalproblems}`);
    console.log(`Last problem: ${problems}`);

}

examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);