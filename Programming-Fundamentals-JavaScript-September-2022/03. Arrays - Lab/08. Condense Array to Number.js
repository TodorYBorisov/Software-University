function condenseArrayToNumber(nums) {

    let result = [];

    for (let element of nums) {

        result.push(element);
    }

    while (result.length > 1) {
        
        let temporaryArray = [];

        for (let i = 0; i < result.length - 1; i++) {
            temporaryArray[i] = result[i] + result[i + 1];

        }

        result = temporaryArray;
    }
    console.log(result.join());

}
condenseArrayToNumber([5,0,4,1,2]);