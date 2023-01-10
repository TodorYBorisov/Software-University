function bonusScoringSystem(array) {

    let numberOfStudents = Number(array[0]);
    let numberOfLectures = Number(array[1]);
    let additionalBonus = Number(array[2]);

    let maxAttendence = 0
    let maxBonus = 0

    for (let i = 3; i < array.length; i++) {
        let attendence = Number(array[i]);

        let totalBonus = (attendence / numberOfLectures) * (5 + additionalBonus);

        if (totalBonus >= maxBonus) {
            maxBonus = totalBonus;
        }
        if (attendence >= maxAttendence) {
            maxAttendence = attendence;
        }
    }

    console.log(`Max Bonus: ${Math.round(maxBonus)}.`);
    console.log(`The student has attended ${Math.round(maxAttendence)} lectures.`)
}

bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
bonusScoringSystem(['10', '30', '14', '8', '23', '27', '28', '15', '17', '25', '26', '5', '18'])