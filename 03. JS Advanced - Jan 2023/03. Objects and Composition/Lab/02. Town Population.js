function townPopulation(array) {

    let registry = {};

    for (let line of array) {

        let [cityName, population] = line.split(' <-> ');

        if (!registry[cityName]) {
            registry[cityName] = 0;
        }
        registry[cityName] += Number(population);
    }

    for (let key in registry) {
        console.log(`${key} : ${registry[key]}`);
    }
}
townPopulation(['Sofia <-> 1200000', 'Montana <-> 20000', 'New York <-> 10000000', 'Washington <-> 2345000', 'Las Vegas <-> 1000000']);