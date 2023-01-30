function generateReport() {

    let output = document.querySelector('#output');
    let checks = Array.from(document.querySelectorAll('thead tr th input'));
    let tableRows = Array.from(document.querySelectorAll('tbody tr'));

    let result = [];

    for (let i = 0; i < tableRows.length; i++) {

        let report = {};

        for (let j = 0; j < checks.length; j++) {
            if (checks[j].checked) {
                report[checks[j].name] = tableRows[i].children[j].textContent;
            }

        }
        result.push(report);
    }

    output.textContent = JSON.stringify(result);
}
