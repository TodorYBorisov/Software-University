function garage(array) {

    let garage = {};

    for (let info of array) {

        let [garageNumber, carInfo] = info.split(' - ');

        if (!garage[garageNumber]) {
            garage[garageNumber] = []
        }
        garage[garageNumber].push(carInfo)
    }
    let result = Object.entries(garage)

    for (const [garage, carInfo] of result) {
        console.log(`Garage № ${garage}`);

        for (let car of carInfo) {

            while (car.includes(': ')) {
                car = car.replace(': ', ' - ');
            }
            console.log(`--- ${car}`)
        }
    }
}
garage(['1 - color: blue, fuel type: diesel', '1 - color: red, manufacture: Audi', '2 - fuel type: petrol', '4 - color: dark blue, fuel type: diesel, manufacture: Fiat']);