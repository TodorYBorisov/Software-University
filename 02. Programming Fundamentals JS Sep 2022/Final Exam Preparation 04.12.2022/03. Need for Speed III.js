function needForSpeed(array) {

    let numberOfCars = Number(array.shift());
    let availableCars = array.splice(0, numberOfCars)
    let carsList = {};

    let carLine = availableCars.shift();

    while (carLine !== undefined) {
        let [car, mileage, fuel] = carLine.split('|');
        if (!carsList[car]) {
            carsList[car] = {
                mileage: Number(mileage),
                fuel: Number(fuel),
            }
        }

        carLine = availableCars.shift();
    }

    let command = array.shift();

    while (command !== 'Stop') {

        let action = command.split(' : ');

        if (action[0] === 'Drive') {
            let car = action[1];
            let distance = Number(action[2]);
            let fuel = Number(action[3]);

            if (carsList[car]) {
                    //.hasOwnProperty(car)
                if (carsList[car].fuel < fuel) {
                    console.log(`Not enough fuel to make that ride`);
                } else {
                    carsList[car].mileage += distance;
                    carsList[car].fuel -= fuel;

                    console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                }

                if (carsList[car].mileage >= 100000) {
                    console.log(`Time to sell the ${car}!`);
                    delete carsList[car];
                }
            }

        } else if (action[0] === 'Refuel') {
            let car = action[1];
            let fuel = Number(action[2]);

            if (carsList[car].fuel + fuel > 75) {
                let refil = 75 - carsList[car].fuel
                carsList[car].fuel += refil;
                console.log(`${car} refueled with ${refil} liters`);
            } else {

                carsList[car].fuel += fuel;
                console.log(`${car} refueled with ${fuel} liters`);
            }

        } else if (action[0] === 'Revert') {
            let car = action[1];
            let kilometers = Number(action[2]);

            carsList[car].mileage -= kilometers;
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);

            if (carsList[car].mileage <= 10000) {
                carsList[car].mileage = 10000;
            }
        }

        command = array.shift();
    }

    for (let key in carsList) {

        console.log(`${key} -> Mileage: ${carsList[key].mileage} kms, Fuel in the tank: ${carsList[key].fuel} lt."`);
    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);  