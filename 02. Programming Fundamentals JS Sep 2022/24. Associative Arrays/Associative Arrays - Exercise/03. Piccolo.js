function piccolo(array) {

    let parkingLot = [];

    for (let entry of array) {

        let [direction, carPlate] = entry.split(', ');

        if (!parkingLot.includes(carPlate)) {
            if (direction === 'IN') {
                parkingLot.push(carPlate)
            }

        } else if (direction === 'OUT') {

            if (parkingLot.includes(carPlate)) {
                let index = parkingLot.indexOf(carPlate);
                parkingLot.splice(index, 1)

                if (parkingLot.length === 0) {
                    console.log(`Parking Lot is Empty`);
                    return;
                }
            }
        }
    }
    let sort = parkingLot.sort((a, b) => a.localeCompare(b))

    for (let car of sort) {
        console.log(car);
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']);

    piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
    )