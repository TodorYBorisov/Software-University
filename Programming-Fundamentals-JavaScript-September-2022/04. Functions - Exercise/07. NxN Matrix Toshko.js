function nXnMatrix(number) {


    for (let i = 0; i < number; i++) {
        let buff = '';
        for (let j = 0; j <number; j++) {

            buff += `${number} `;
        }

        console.log(buff);

    }

}
nXnMatrix(3);