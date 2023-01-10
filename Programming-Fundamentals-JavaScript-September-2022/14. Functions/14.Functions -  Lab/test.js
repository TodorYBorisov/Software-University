function printName(array) {

let newArray = [];
for (let iterator of array) {
    newArray.push(iterator)
}

    let stringCounter = 0
    let numberCounter = 0
    for (let i = 0; i < newArray.length; i++) {

        let element = array[i];

        let type = typeof(element);

        if (typeof(element) === type) {
            stringCounter++;
        } else if (typeof(element)=== type) {
            numberCounter++;
        }
    }

    
}
printName('P2ter22')