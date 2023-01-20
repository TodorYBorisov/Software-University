function cityRecord(name, population, treasury) {

    let result = {
        name: name,
        population: population,
        treasury: treasury,
    };

    console.log(JSON.stringify(result));
}
cityRecord('Tortuga', 7000, 15000);