function focused() {
    let input = document.querySelectorAll('input');

    for (const field of input) {

        field.addEventListener('focus', onFocus);
        field.addEventListener('blur', onBlur);
    }

    function onFocus(event) {
        event.currentTarget.parentElement.classList.add('focused');
    }

    function onBlur(event) {
        event.currentTarget.parentElement.classList.remove('focused');
    }
}