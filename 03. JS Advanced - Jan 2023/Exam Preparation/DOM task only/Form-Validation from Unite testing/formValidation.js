function validate() {

    const checkBox = document.getElementById('company');
    checkBox.addEventListener('change', () => {
        const companyInfo = document.getElementById('companyInfo');

        if (checkBox.checked === 'false') {
            companyInfo.style.display = 'none';
        } else {
            companyInfo.style.display = 'block';
        }

    });

    const submitBtton = document.getElementById('submit');
    submitBtton.addEventListener('click', onclick);

    function onclick(event) {

        event.preventDefault();

        let invalidFields = [];

        const userName = document.getElementById('username');
        let userNamePattern = /^[a-zA-Z0-9]{3,20}$/gm;

        if (!userNamePattern.test(userName.value)) {
            invalidFields.push(userName);
        }
        const email = document.getElementById('email');
        let emailValidator = /^.*@.*\..*$/gm;
        if (!emailValidator.test(email.value)) {
            invalidFields.push(email);
        }

        const pasword = document.getElementById('password');
        const paswordConfirmation = document.getElementById('confirm-password');
        let passwordsValidator = /^\w{5,15}$/gm;

        if (!passwordsValidator.test(pasword.value) || pasword.value !== paswordConfirmation.value) {
            invalidFields.push(pasword);
            invalidFields.push(paswordConfirmation);
        }

        const checkBox = document.getElementById('company');

        if (checkBox.checked) {
            const inputCompanyNumber = document.getElementById('companyNumber');
            let companyNumberValidator = /^[0-9]{4}$/gm;
            if (!companyNumberValidator.test(inputCompanyNumber.value)) {
                invalidFields.push(inputCompanyNumber);
            }
        }

        for (let field of invalidFields) {
            field.style.borderColor = 'red';
        }

        if (invalidFields.length === 0) {
            document.querySelector('#valid').style.display = 'block';
        } else {
            document.querySelector('#valid').style.display = 'none';
        }
    }
}
