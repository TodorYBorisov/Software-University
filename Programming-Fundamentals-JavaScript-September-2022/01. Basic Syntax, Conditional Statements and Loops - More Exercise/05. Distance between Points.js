function distance(x1, y1, x2, y2) {

    let a =Math.abs(x1 - x2);
    let b =Math.abs(y1 - y2);

    let result = Math.sqrt(a * a + b * b);

    console.log(result)

}

distance(2, 4, 5, 0)