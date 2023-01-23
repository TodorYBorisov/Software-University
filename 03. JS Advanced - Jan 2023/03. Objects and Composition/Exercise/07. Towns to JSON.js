function townsToJson(array) {

    let res = [];

    for (let i = 1; i < array.length; i++) {
        let [town, latitude, longitude] = array[i]
            .split('|')
            .filter((x) => x.length !== 0)
            .map((el) => el.trim());

        res.push({
            Town: town,
            Latitude: Number(Number(latitude).toFixed(2)),
            Longitude: Number(Number(longitude).toFixed(2)),
        });
    }

    console.log(JSON.stringify(res));

}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
townsToJson(['| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);