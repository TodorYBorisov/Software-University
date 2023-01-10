function trekkingMania(input) {

    let numberOfGroups = Number(input[0]);

    let totalPeople = 0;
    let climbMusala = 0;
    let climbMonBlanc = 0;
    let climbKilimanjaro = 0;
    let climbK2 = 0;
    let climbEverest = 0;

    for (let i = 1; i <= numberOfGroups; i++) {

        let numPeopleInGroup = Number(input[i]);

        totalPeople += numPeopleInGroup;

        if (numPeopleInGroup <= 5) {

            climbMusala += numPeopleInGroup;
        }
        else if (numPeopleInGroup >= 6 && numPeopleInGroup <= 12) {
            climbMonBlanc += numPeopleInGroup;
        }
        else if (numPeopleInGroup >= 13 && numPeopleInGroup <= 25) {
            climbKilimanjaro += numPeopleInGroup;
        }
        else if (numPeopleInGroup >= 26 && numPeopleInGroup <= 40) {
            climbK2 += numPeopleInGroup;
        }
        else if (numPeopleInGroup >= 41) {
            climbEverest += numPeopleInGroup;
        }
    }

    let percentMusala = (climbMusala / totalPeople) * 100;
    let percentMonBlanc = (climbMonBlanc / totalPeople) * 100;
    let percentKilimanjaro = (climbKilimanjaro / totalPeople) * 100;
    let percentK2 = (climbK2 / totalPeople) * 100;
    let percentEverest = (climbEverest / totalPeople) * 100;

    console.log(percentMusala.toFixed(2)+"%");
    console.log(percentMonBlanc.toFixed(2)+"%");
    console.log(percentKilimanjaro.toFixed(2)+"%");
    console.log(percentK2.toFixed(2)+"%");
    console.log(percentEverest.toFixed(2)+"%");

}
trekkingMania(["10",
    "10",
    "5",
    "1",
    "100",
    "12",
    "26",
    "17",
    "37",
    "40",
    "78"]);