function matchPhoneNumber(array) {

    let pattern = /\+359([ -])2\1\d{3}\1\d{4}\b/g;

    let numbers = array.shift()
   

    // let result = [];
    // let phoneNum = pattern.exec(numbers);

    // while (phoneNum !== null) {

    //     result.push(phoneNum[0]);

    //     phoneNum = pattern.exec(numbers);
    // }

    // console.log(result.join(', '));

    let final = numbers.match(pattern)
    console.log(final.join(', '));
}
matchPhoneNumber(['+359 2 222 2222,359-2-222-2222, +359/2/222/2222, +359-2 222 2222 +359 2-222-2222, +359-2-222-222, +359-2-222-22222 +359-2-222-2222'])