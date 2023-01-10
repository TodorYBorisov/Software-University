function arrayRotation(array, rorations) {

    for (let i = 0; i < rorations; i++) {
        
        let elementToRotate = array.shift();

        array.push(elementToRotate);
    }
    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);

