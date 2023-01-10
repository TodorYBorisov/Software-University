function reverseAnArray(n, array) {

    let buff = '';

    for (let i = n - 1; i >= 0; i--) {

        let element = array[i];

        buff += `${element + ' '}`;
    }

    console.log(buff);

}

reverseAnArray(3, [10, 20, 30, 40, 50]);