function sumFirstAndLastelement(input) {

    let sum = 0;

    for (let i = 0; i < input.length; i++) {
        let addNumber = Number(input[i]);

        if (i === 0 || i === input.length - 1) {
            sum += addNumber
        }
    }
    console.log(sum);

    // let fisrt = input[0];  //решение 1!
    // let last = input[input.length - 1];

    // console.log(fisrt + last);

    // console.log(input[0]+input[input.length-1]); //решение 2!
}

sumFirstAndLastelement([20, 30, 40]);
