function trainTheTrainers(input) {

    let index = 0;
    let numPeopleOfJury = Number(input[index]);
    index++
    let command = input[index];
    index++;

    let totalSumRatingPresentation = 0
    let gradeCount = 0;

    while (command !== 'Finish') {

        let sumRatingFromPresentation = 0; //трябва да зануляваме този брояч след всяка нова команда!

        for (let i = 1; i <= numPeopleOfJury; i++) {

            let grade = Number(input[index]);
            index++;

            sumRatingFromPresentation += grade;
            totalSumRatingPresentation += grade;
            gradeCount++;

        }

        let averageScorePerPresentation = sumRatingFromPresentation / numPeopleOfJury;

        console.log(`${command} - ${averageScorePerPresentation.toFixed(2)}.`);

        command = input[index];
        index++;

    }

    let finalAssesment = totalSumRatingPresentation / gradeCount;
    console.log(`Student's final assessment is ${finalAssesment.toFixed(2)}.`)

}
trainTheTrainers(["2",
    "While-Loop",
    "6.00",
    "5.50",
    "For-Loop",
    "5.84",
    "5.66",
    "Finish"]);
