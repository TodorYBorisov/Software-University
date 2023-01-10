function tennisRanlist(array) {

    let numberOfTournaments = Number(array[0]);
    let startingPoints = Number(array[1]);

    let pointsFromTournaments = 0;
    let tournamentCounter = 0;
    let tournamentWinCounter = 0;
    

    for (let i = 2; i < array.length; i++) {
        let stage = String(array[i]);

        if (stage === "W") {

            pointsFromTournaments += 2000;
            tournamentWinCounter += 1;
        } else if (stage === "F") {

            pointsFromTournaments += 1200;

        } else {

            pointsFromTournaments += 720;
        }
    }
    let totalPoints = startingPoints + pointsFromTournaments;
    console.log(`Final points: ${totalPoints}`);
    let avgPointsfromTournamnet =Math.floor(pointsFromTournaments / numberOfTournaments);
    console.log(`Average points: ${avgPointsfromTournamnet}`);
    let percentWinTournaments = (tournamentWinCounter / numberOfTournaments) * 100;
    console.log(`${percentWinTournaments.toFixed(2)}%`);

}
//tennisRanlist(["5", "1400", "F", "SF", "W", "W", "SF"]);
tennisRanlist(["4",
"750",
"SF",
"W",
"SF",
"W"]);