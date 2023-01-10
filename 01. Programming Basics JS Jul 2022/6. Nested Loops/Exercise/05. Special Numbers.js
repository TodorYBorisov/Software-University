function specialNumbers(N) {

    let buff = '';

    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            for (let k = 1; k <= 9; k++) {
                for (let l = 1; l <= 9; l++) {

                    if (N % i === 0 && N % j === 0 && N % k === 0 && N % l === 0){

                        buff +=`${i}${j}${k}${l} `;
 
                    }
                }
            }
        }
    }
    console.log(buff);
}
specialNumbers(3);



// let buff = '';

// for (let i = 1; i <= 9; i++) {

//     buff += `${i} `;

// }
// console.log(buff);