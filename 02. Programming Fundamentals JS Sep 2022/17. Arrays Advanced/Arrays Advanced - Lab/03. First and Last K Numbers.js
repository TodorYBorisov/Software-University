function fisrtAndLastKNumbers(array) {

    let k = array.shift();
    
    let firstKnumbers = array.slice(0,k)
    let lastKnumbers = array.slice(-k)

    console.log(firstKnumbers.join(' '));
    console.log(lastKnumbers.join(' '));

}

fisrtAndLastKNumbers([2, 7, 8, 9]);
fisrtAndLastKNumbers([3, 6, 7, 8, 9]);