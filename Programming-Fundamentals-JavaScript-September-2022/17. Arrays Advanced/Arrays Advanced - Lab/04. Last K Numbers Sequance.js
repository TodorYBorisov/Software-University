function lastKNumberSequance(n, k) {

    let result = [1]

    for (let i = 0; i < n - 1; i++) {
        let nextNumber = result.slice(-k)
        let sum = 0;
        for (let element of nextNumber) {
            sum += element
        }
        result.push(sum)
    }

    console.log(result.join(' '))
}
lastKNumberSequance(6, 3);