function commonElements(array1, array2) {

    for (let i = 0; i < array1.length - 1; i++) {
        //array1[i] = array1[i];

        for (let j = 0; j < array2.length - 1; j++) {
            //array2[j] = array2[j];

            if (array1[i] === array2[j]) {

                console.log(array1[i])
            }
        }
    }

    // for (let element of array1) {
    //     if(array2.includes(element)){
    //         console.log(element);
    //     }
    // }
}

commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']
); 