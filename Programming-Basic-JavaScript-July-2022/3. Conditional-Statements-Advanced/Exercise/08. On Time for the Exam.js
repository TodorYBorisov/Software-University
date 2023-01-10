function exam(input) {

    let examStartHour = Number(input[0]);
    let examStartMins = Number(input[1]);
    let arriveTimeHour = Number(input[2]);
    let arriveTimeMins = Number(input[3]);

    let hour = 0;
    let min = 0;

    let examSumInMinutes = examStartHour * 60 + examStartMins;
    let arriveSumInMinutes = arriveTimeHour * 60 + arriveTimeMins;

    let minsBeforeExam = examSumInMinutes - arriveSumInMinutes;
    let minsLateExam = arriveSumInMinutes - examSumInMinutes;

    if (examSumInMinutes === arriveSumInMinutes) {

        console.log("On time");
    } else if (minsBeforeExam >= 0 && minsBeforeExam <= 30) {
        console.log("On time");
        console.log(`${minsBeforeExam} minutes before the start`);

    } else if (minsBeforeExam > 30 && minsBeforeExam < 60) {
        console.log("Early");
        console.log(`${minsBeforeExam} minutes before the start`);

    } else if (minsBeforeExam >= 60) {
        hour = Math.floor(minsBeforeExam / 60);
        min = minsBeforeExam % 60;
        console.log("Early");

        if (min < 10) {

            console.log(`${hour}:0${min} hours before the start`);
        } else {
            console.log(`${hour}:${min} hours before the start`);
        }

    }
    else if (arriveSumInMinutes > examSumInMinutes) {
        console.log("Late");

        if (minsLateExam < 60) {
            console.log(`${minsLateExam} minutes after the start`);

        } else if (minsLateExam >= 60) {

            hour = Math.floor(minsLateExam / 60);
            min = minsLateExam % 60;

            if (min < 10) {
                console.log(`${hour}:0${min} hours after the start`);
            }
            else {
                console.log(`${hour}:${min} hours after the start`);
            }
        }
    }
}

exam(["14",
"00",
"13",
"55"]);