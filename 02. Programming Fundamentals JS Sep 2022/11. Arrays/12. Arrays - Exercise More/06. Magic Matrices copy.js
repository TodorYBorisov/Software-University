function magicMatrices(array) {


    let sumArrayR1 = 0;
    let sumArrayR2 = 0;
    let sumArrayR3 = 0;

    let sumArrayC1 = 0
    let sumArrayC2 = 0
    let sumArrayC3 = 0

    for (let i = 0; i < array.length; i++) {
        let currentArray = array[i];

        if (i === 0) {
            for (let i = 0; i < currentArray.length; i++) {
                let number = currentArray[i];
                sumArrayR1+=number

                if(i===0){
                    sumArrayC1+=currentArray[0];
                }else if(i===1){
                    sumArrayC2+=currentArray[1];
                }else if(i===2){
                    sumArrayC3+=currentArray[2];
                }
            }

        } else if (i === 1) {
            for (let iterator of array[i]) {
                sumArrayR2 += iterator
            }
        } else if (i === 2) {
            for (let iterator of array[i]) {
                sumArrayR3 += iterator
            }
        }



    }


}

magicMatrices([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);

