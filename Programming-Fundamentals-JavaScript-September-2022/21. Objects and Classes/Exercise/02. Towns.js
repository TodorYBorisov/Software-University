function towns(array) {

    let final = [];

    for (let line of array) {

        let newline = line.split(' | ');

        let town = newline[0];
        let latitude = Number(newline[1])
        let longitude = Number(newline[2])

        let create = `{ town: '${town}', latitude: '${latitude.toFixed(2)}', longitude: '${longitude.toFixed(2)}' }`
        final.push(create);
    }

    for (let line of final) {
        console.log(line);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);