function cars(input) {

    const objFn = { create, inherit, set, print };
    const carList = {};

    for (let line of input) {
        let info = line.split(' ');
        let command = info.shift();
        objFn[command](info);
    }

    function create(info) {
        let [name, inherit, parentName] = info;

        if (!carList[name]) {
            carList[name] = {};
        }

        if (inherit) {
            objFn[inherit](name, parentName);
        }
    }

    function inherit(name, parentName) {
        let parentObj = Object.create(carList[parentName]);
        carList[name] = parentObj;
    }

    function set(info) {
        let [name, key, value] = info;
        carList[name][key] = value;
    }

    function print([name]) {
        const entries = [];
        for (const key in carList[name]) {
            entries.push(`${key}:${carList[name][key]}`);
        }
        console.log(entries.join(','));
    }
}
cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
);