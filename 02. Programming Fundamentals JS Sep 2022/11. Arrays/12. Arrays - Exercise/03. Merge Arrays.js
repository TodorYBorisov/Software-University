function mergeArrays(array1, array2) {

    let array3 = [];
    //let array1Length = array1.length; прави нова променлива за дължината
    
    for (let i = 0; i < array1.length; i++) {
        array1[i] = array1[i]

        if (i % 2 === 0) {
            sum = Number(array1[i]) + Number(array2[i]);
            array3.push(sum);
            //array3.push(Number(array1[i]) + Number(array2[i]));
        }else{
            array3.push(`${array1[i]}${array2[i]}`)
        }
    }

    console.log(array3.join(' - '));

}
mergeArrays(['5', '15', '23', '56', '35'],
            ['17', '22', '87', '36', '11']);
