function makeADictioanry(array) {

    let dictionary = {};

    for (let i = 0; i < array.length; i++) {
        let element = JSON.parse(array[i]);
        let key = Object.keys(element)
        let value = Object.values(element)

        dictionary[key] = value[0]
    }

    let keys = Object.keys(dictionary)
    let sortedKey = keys.sort((a,b)=>a.localeCompare(b));

    for (let key of sortedKey) {
        console.log(`Term: ${key} => Definition: ${dictionary[key]}`);
    }
}

makeADictioanry([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);