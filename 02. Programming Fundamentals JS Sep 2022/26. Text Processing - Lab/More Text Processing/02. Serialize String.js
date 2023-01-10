function serializeString(array) {

    array = array[0].toString().split('')
    let results = {};

    for (let i = 0; i < array.length; i++) {
        let char = array[i];
        let index = i;

        if (!results[char]) {
            results[char] = `${index}`
        } else {
            results[char] += `/${index}`
        }
    }

   for (let char in results) {
    console.log(`${char}:${results[char]}`);
   }
}
serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);