function deleteByEmail() {
    let input = document.querySelector('input');
    let rows = document.querySelectorAll('tbody tr');
    let resultElement = document.getElementById('result');

    for (let row of rows) {
        if (input.value === row.children[1].textContent) {
            resultElement.textContent = 'Deleted.';
            row.parentElement.removeChild(row);
            if (resultElement.textContent = 'Deleted.') {
                // input.value = '';             // Изчистваме инпут полето
                return;
            }
        } else {
            resultElement.textContent = 'Not found.';
        }
    }
}