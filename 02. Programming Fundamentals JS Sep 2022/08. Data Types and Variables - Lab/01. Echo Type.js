function echoType(input) {

    let typeOfData = input;

    if (typeof (typeOfData) === 'string') {
        console.log('string');
        console.log(typeOfData);
    } else if (typeof (typeOfData) === 'number') {
        console.log('number');
        console.log(typeOfData);
    } else {
        console.log(typeof (typeOfData));
        console.log('Parameter is not suitable for printing');
    }

}

echoType(null);
