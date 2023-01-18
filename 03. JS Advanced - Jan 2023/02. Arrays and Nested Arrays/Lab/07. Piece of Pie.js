function pieceOfPie(array, flavor1, flavor2) {

    let startIndex = Number(array.indexOf(flavor1));
    let lastIndex = Number(array.indexOf(flavor2));
    let removed = array.slice(startIndex, lastIndex + 1);

    return removed;
}
(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));