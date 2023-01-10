function arrayRotation(arrayToRotate, rotation) {

    for (let index = 0; index < rotation; index++) {

        firstElement = arrayToRotate[0];

        for (let i = 0; i < arrayToRotate.length; i++) {
            arrayToRotate[i] = arrayToRotate[i + 1];

        }
        arrayToRotate[arrayToRotate.length - 1] = firstElement;

    }

    console.log(arrayToRotate.join(' '));
}

arrayRotation([2, 4, 15, 31], 5);