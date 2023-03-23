export function addSubmitListener(form, callback) { // callback примерно ни се явява onLogin ф-ята
    form.addEventListener('submit', onSubmit);

    function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        callback(data);
    }
}

//може да го ползваме върху всякакви формуляри и ще получим данните