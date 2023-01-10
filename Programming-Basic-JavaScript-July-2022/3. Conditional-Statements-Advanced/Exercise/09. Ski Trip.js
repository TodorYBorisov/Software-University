function skiTrip(input) {

    let numberOfDays = Number(input[0])
    let roomType = input[1];
    let grade = input[2];

    
    let finalPrice = 0.0;

    switch (roomType) {
        case "room for one person":
            if (numberOfDays < 10) {
                finalPrice = 18.00 * (numberOfDays-1);
            }
            else if (numberOfDays > 10 && numberOfDays < 15) {
                finalPrice = 18.00 * (numberOfDays-1);
            } else if (numberOfDays > 15) {
                finalPrice = 18.00 * (numberOfDays-1);
            }
            break;
        case "apartment":
            if (numberOfDays < 10) {
                finalPrice = (25.00 * 0.7) * (numberOfDays-1);
            }
            else if (numberOfDays > 10 && numberOfDays < 15) {
                finalPrice = (25.00 * 0.65) * (numberOfDays-1);
            } else if (numberOfDays > 15) {
                finalPrice = (25.00 * 0.5) * (numberOfDays-1);
            }
            break;
        case "president apartment":
            if (numberOfDays < 10) {
                finalPrice = (35.00 * 0.9) * (numberOfDays-1);
            }
            else if (numberOfDays > 10 && numberOfDays < 15) {
                finalPrice = (35.00 * 0.85) * (numberOfDays-1);
            } else if (numberOfDays > 15) {
                finalPrice = (35.00 * 0.8) * (numberOfDays-1);
            }
            break;
    }
    if (grade === "positive") {
        finalPrice *= 1.25;
    } else if(grade ==="negative") {
        finalPrice *= 0.9;
    }

    console.log(finalPrice.toFixed(2));

}
//skiTrip(["14", "apartment", "positive"]);
skiTrip(["30","president apartment","negative"]);