function cinemaTickes(input) {

    let index = 0;
    let movieName = input[index];
    index++;

    let studentCounter = 0;
    let standardCounter = 0;
    let kidCounter = 0

    while (movieName !== "Finish") {
        let availableSeats =Number(input[index]);
        index++;
        let ticketCounter = 0

        while (availableSeats > ticketCounter) {


            let ticketType = input[index];
            index++;

            if (ticketType === "End") {
                break;
            }

            if (ticketType === "student") {
                studentCounter++;
            } else if (ticketType === "standard") {
                standardCounter++;
            } else if (ticketType === "kid") {
                kidCounter++;
            }

            ticketCounter++;

        }

        let roomCapacity = (ticketCounter / availableSeats) * 100.00;

        console.log(`${movieName} - ${roomCapacity.toFixed(2)}% full.`)

        movieName = input[index];
        index++;
    }

    let sumOfAllTickets = studentCounter+standardCounter+kidCounter;

    console.log(`Total tickets: ${sumOfAllTickets}`);
    console.log(`${(studentCounter/sumOfAllTickets * 100).toFixed(2)}% student tickets.`);
    console.log(`${(standardCounter/sumOfAllTickets * 100).toFixed(2)}% standard tickets.`);
    console.log(`${(kidCounter/sumOfAllTickets * 100).toFixed(2)}% kids tickets.`);

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