function worldSwimmingRecord(input) {

    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timePermeter = Number(input[2]);


    let swimDistance = distance * timePermeter;

    let addedTime = (Math.floor(distance / 15)) * 12.5;

    let totalTime = swimDistance + addedTime;

    let diffToRecord = totalTime - record;

    if (totalTime < record) {

        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
    else if (totalTime >= record) {
        console.log(`No, he failed! He was ${diffToRecord.toFixed(2)} seconds slower.`);

    }
}
worldSwimmingRecord (["10464",
"1500",
"20"])
