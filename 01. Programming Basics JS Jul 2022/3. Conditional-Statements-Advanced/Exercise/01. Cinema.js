function cinema(input) {

    let typeOfMovie = input[0];
    let row = Number(input[1]);
    let column = Number(input[2]);

    let ticketPrice = 0.0;
    let availablePlaces = row * column;

    if (typeOfMovie === "Premiere") {
        ticketPrice = 12.00;
    } else if (typeOfMovie === "Normal") {
        ticketPrice = 7.50;
    } else if (typeOfMovie === "Discount") {
        ticketPrice = 5.00;
    }
    let finalSum = availablePlaces * ticketPrice;
    console.log(finalSum.toFixed(2))
}
cinema(["Premiere","10","12"])