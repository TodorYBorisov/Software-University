function hotelRoom(input) {

    let month = (input[0]);

    let numberOfNights = Number(input[1]);

    let priceforStudio = 0.0;
    let priceforApartment = 0.0;

    if (month === "May" || month === "October") {
        priceforApartment = 65;
        priceforStudio = 50;

        if (numberOfNights > 7 && numberOfNights <= 13) {
            priceforStudio = priceforStudio * 0.95;
        } else if (numberOfNights > 14) {
            priceforStudio = priceforStudio * 0.7;
            priceforApartment = priceforApartment * 0.9;
        }

    } else if (month === "June" || month === "September") {
        priceforApartment = 68.70;
        priceforStudio = 75.20;
        if (numberOfNights > 14) {
            priceforStudio = priceforStudio * 0.8;
            priceforApartment = priceforApartment * 0.9;
        }

    } else if (month === "July" || month === "August") {
        priceforApartment = 77;
        priceforStudio = 76;

        if (numberOfNights > 14) {
            priceforApartment = priceforApartment * 0.9;
        }
    }
    let finalSumApartment = numberOfNights * priceforApartment;
    let finalSumStudio = numberOfNights * priceforStudio;

    console.log(`Apartment: ${finalSumApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${finalSumStudio.toFixed(2)} lv.`)
}
hotelRoom(["June", "14"]);