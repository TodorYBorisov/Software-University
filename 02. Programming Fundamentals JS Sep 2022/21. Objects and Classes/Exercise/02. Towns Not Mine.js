function towns(array) {

    let townName = {};

    for (let line of array) {

        let [town, latitude, longitude] = line.split(' | ');
        townName.town = town;
        townName.latitude = Number(latitude).toFixed(2);
        townName.longitude = Number(longitude).toFixed(2);

        console.log(townName);

    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);