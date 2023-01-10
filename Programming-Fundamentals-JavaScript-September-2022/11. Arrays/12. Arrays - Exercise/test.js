function test(params) {

    let sum = 0

    for (const iterator of params) {
        sum += Number(iterator)
    }

    console.log(sum)
}
test([1, 2, 3])