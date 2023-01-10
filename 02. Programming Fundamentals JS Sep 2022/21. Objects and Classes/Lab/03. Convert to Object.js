function convertToObject(input) {

let object = JSON.parse(input);

    for (const key of Object.keys(object)) {

        console.log(`${key}: ${object[key]}`);
    }
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')

