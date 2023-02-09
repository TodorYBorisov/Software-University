function argumentInfo(...input) {

    let result = {};

    for (let value of input) {
        let type = typeof value;

        console.log(`${type}: ${value}`);

        if (!result[type]) {
            result[type] = 0;
        }
        result[type]++;
    }

    let sort = Object.entries(result).sort((a, b) => b[1] - a[1]);

    for (let [type, count] of sort) {
        console.log(`${type} = ${count}`);
    }
}
argumentInfo('cat', 42, function () { console.log('Hello world!'); });