function walking(input) {

    let index = 0;
    let command = input[index];
    index++;

    let totalSteps = 0;

    while (command !== "Going home") {

        let steps = Number(command);

        totalSteps += steps;

        if (totalSteps >= 10000) {

            let moreSteps = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${moreSteps} steps over the goal!`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === "Going home") {

        let stepsGoingBack = Number(input[index]);
        //index++;

        totalSteps += stepsGoingBack;

        if (totalSteps > 10000) {
            let moreSteps = totalSteps - 10000;
            console.log("Goal reached! Good job!");
            console.log(`${moreSteps} steps over the goal!`);

        } else {
            let neededSteps = 10000 - totalSteps;
            console.log(`${neededSteps} more steps to reach goal.`);
        }

    }
}

walking(["1500",
    "3000",
    "250",
    "1548", "2000",
    "Going home",
    "2000"]);