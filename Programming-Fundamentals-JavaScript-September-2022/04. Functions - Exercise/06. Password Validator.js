function passwordValidator(password) {
    let digitCounter = 0;
    let passwordLength = password.length;
    let isSymbol = false;

    for (let i = 0; i < passwordLength; i++) {
        let charNum = password[i].charCodeAt();
        
        //тези проверки ги прави от ASCII таблицата
        let isDigit = charNum >= 48 && charNum <= 57;
        let isSmallLetter = charNum >= 97 && charNum <= 122;
        let isBiggerLetter = charNum >= 65 && charNum <= 90;

        if (isDigit) {
            digitCounter++;
        }

        if (!isDigit && !isSmallLetter && !isBiggerLetter) {
            isSymbol = true;
        }
    }

    if (password.length < 6 || password.length > 10) {
        console.log('Password must be between 6 and 10 characters');
    }
    if (isSymbol) {
        console.log('Password must consist only of letters and digits');
    }
    if (digitCounter < 2) {
        console.log('Password must have at least 2 digits');
    }
    if (digitCounter >= 2 && !isSymbol && (password.length >= 6 || password.length <= 10)) {
        console.log('Password is valid');
    }
}

//passwordValidator('logIn');
passwordValidator('MyPass123');