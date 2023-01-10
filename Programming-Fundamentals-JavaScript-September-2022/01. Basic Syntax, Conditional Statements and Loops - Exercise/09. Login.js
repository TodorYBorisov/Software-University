function login(input) {

    let index = 0
    let userName = input[index];
    index++;

    let comand = input[index];
    index++;

    let reversPass = '';

    for (let i = userName.length - 1; i >= 0; i--) {

        reversPass += userName[i];
    }

    let corectPassword = reversPass;
    let logCounter = 0;

    while (comand !== corectPassword) {

        logCounter++;

        if (logCounter === 4) {
            console.log(`User ${userName} blocked!`);
            return;
        }

        console.log(`Incorrect password. Try again.`);

        comand = input[index];
        index++;
    }

    console.log(`User ${userName} logged in.`);
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);