function lunchBreak(input) {

    let nameOfSeries = (input[0]);
    let seriesLenght = Number(input[1]);
    let breakTime = Number(input[2]);

    let timeForLunch = breakTime / 8;

    let timeForRelax = breakTime / 4;

    let totalTime = timeForLunch + timeForRelax + seriesLenght;

    if (totalTime <= breakTime) {
        let timeLeft =Math.ceil(breakTime - totalTime);
        console.log(`You have enough time to watch ${nameOfSeries} and left with ${timeLeft} minutes free time.`)
    }
    else if (totalTime > breakTime) {

        let neededTime = Math.ceil(Math.abs(breakTime -totalTime));
        console.log(`You don't have enough time to watch ${nameOfSeries}, you need ${neededTime} more minutes.`)
    }

}

lunchBreak(["Game of Thrones", "60", "96"])
//lunchBreak(["Teen Wolf","48","60"])