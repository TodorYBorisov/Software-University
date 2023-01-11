function cirleArea(input) {

    let argument = typeof (input)

    if (argument === 'number') {
        let area = Math.PI * input ** 2;
        console.log(area.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${argument}.`);
    }
}
cirleArea(5)