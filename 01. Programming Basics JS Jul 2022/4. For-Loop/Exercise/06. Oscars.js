function oscars(input) {

    let actorName = String(input[0]);
    let academyPoints = Number(input[1]);
    //let judgesCount = Number(input[2]);

    let totalPoints = academyPoints;

    for (let i = 3; i < input.length; i += 2) {

        let assesorName = String(input[i]);
        let assesorPoints = Number(input[i + 1]);

        let pointsReceived = assesorName.length * assesorPoints / 2.0;

        totalPoints += pointsReceived;

        if (totalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${totalPoints.toFixed(1)}!`);
            return;
        }
    }

    let neededPoints = 1250.50 - totalPoints;
    console.log(`Sorry, ${actorName} you need ${neededPoints.toFixed(1)} more!`);
}

oscars(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);