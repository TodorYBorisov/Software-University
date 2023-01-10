function processOddNumbers(numbers) {

    let oddNumberts = numbers.filter((num,i) => i % 2 !== 0);

    let doubled = oddNumberts.map(num => num * 2);

    let reverseOrder = doubled.reverse();

    console.log(reverseOrder.join(' '));
}

processOddNumbers([10, 15, 20, 25])
processOddNumbers([3, 0, 10, 4, 7, 3]) 