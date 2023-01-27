function colorize() {

    // const rows = document.querySelectorAll('table tr');

    // for (let i = 0; i < rows.length; i++) {
    //     const row = rows[i];

    //     if (i % 2 !== 0) {
    //         row.style.background = 'teal';
    //     }
    // }
    const rows = document.querySelectorAll('table tr:nth-of-type(even)');
    for (const row of rows) {
        row.style.backgroundColor = 'teal';
    }
}