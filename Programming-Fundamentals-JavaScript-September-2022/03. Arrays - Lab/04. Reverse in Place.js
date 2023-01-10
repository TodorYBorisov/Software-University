function reverseInPlace(array) {

    let buff = '';

    let n = array.length;

    for (let i = n - 1; i >= 0; i--) {
        let element = array[i];

        buff += `${element + ' '}`

    }

    // for (let index = array.length-1; index >=0; index--) {
    //     let element = array[index];
    //     buff += `${element + ' '}`
    // }

    console.log(buff);

}

reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop']);