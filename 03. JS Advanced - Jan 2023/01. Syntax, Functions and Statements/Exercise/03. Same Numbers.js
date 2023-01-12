function sameNumbers(input) {

    let num = input.toString();
    let firstNumber = num[0];
    let sum = 0;
    
    for (let i =0; i < num.length; i++) {

        if (firstNumber === num[i]) {
            sum +=Number(num[i]);
        }else{
            console.log('false');
            sum +=Number(num[i]);
        }
    }
    console.log('true');
    console.log(sum);
}
sameNumbers(1234);