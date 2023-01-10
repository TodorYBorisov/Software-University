function evenPowers(input) {

    let num = 1;

    for (let i = 0; i <= input[0]; i += 2) {


        console.log(num);

        num = num * 2 * 2;
    }

}
evenPowers(["7"])