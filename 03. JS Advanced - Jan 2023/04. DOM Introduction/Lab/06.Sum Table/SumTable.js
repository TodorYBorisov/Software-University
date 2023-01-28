function sumTable() {

    const rows = document.querySelectorAll('td:last-child');

    let arrRows = Array.from(rows);

    let lastElement = arrRows.pop();

    let sum = 0;
    for (const num of arrRows) {
        sum += Number(num.textContent);
    }
    const total = document.getElementById('sum');
    total.textContent =Number(sum);
}