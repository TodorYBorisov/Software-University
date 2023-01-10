function smallestTwoNumbers(numbers) {

    let sortNumbers = numbers.sort((a,b)=>a-b);

    let sliceSortnumbers = sortNumbers.slice(0,2)

    console.log(sliceSortnumbers.join(' '))
}
smallestTwoNumbers([30, 15, 50, 5])