function cinemaTickes(input) {

    let index = 0;

    let movieName = input[index];
    index++;

    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0;

    while (movieName !== "Finish") {

        let freeSpaces = Number(input[index]);
        index++;

        let ticketType = input[index];
        index++;

        let spacesTaken = 0;

        while (ticketType !== "End") {
           
            spacesTaken++;

            if (ticketType === 'student') {
                studentCounter++;
            } else if (ticketType === 'standard') {
                standardCounter++;
            } else if (ticketType === 'kid') {
                kidCounter++;
            }

            if (spacesTaken === freeSpaces) {
                break;
            }

            ticketType = input[index];
            index++;
        }

        let spacesTakenPercent = (spacesTaken / freeSpaces) *100;
        console.log(`${movieName} - ${spacesTakenPercent.toFixed(2)}% full.`)

        movieName = input[index];
        index++;
    }

    let totaTicketCount = studentCounter + standardCounter + kidCounter;

    console.log(`Total tickets: ${totaTicketCount}`);
    console.log(`${(studentCounter/totaTicketCount * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter/totaTicketCount * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter/totaTicketCount * 100).toFixed(2)}% kids tickets.`);

}
cinemaTickes(["Taxi",
"10",
"standard",
"kid",
"student",
"student",
"standard",
"standard",
"End",
"Scary Movie",
"6",
"student",
"student",
"student",
"student",
"student",
"student",
"Finish"]);