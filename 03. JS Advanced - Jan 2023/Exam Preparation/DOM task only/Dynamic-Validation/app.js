function validate() {
    let input = document.getElementById('email');

    input.addEventListener('change', () => {

        let pattern = /[a-z]+@[a-z]+[.][a-z]+/gm;
       
        if (pattern.test(input.value)) {
            input.classList.remove('error');
        } else {
            input.classList.add('error');
        }
    });
}