function autoEngineeringCompany(array) {

    let register = {};

    for (let line of array) {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);

        if (!register[carBrand]) {
            register[carBrand] = { [carModel]: producedCars };
        } else {
            if (!register[carBrand][carModel]) {
                register[carBrand][carModel] = producedCars;
            } else {
                register[carBrand][carModel] += producedCars;
            }
        }
    }

    for (let carBrand in register) {
        console.log(carBrand);
        for (let carModel in register[carBrand]) {
            console.log(`###${carModel} -> ${register[carBrand][carModel]}`);
        }
    }
}
autoEngineeringCompany(['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']);