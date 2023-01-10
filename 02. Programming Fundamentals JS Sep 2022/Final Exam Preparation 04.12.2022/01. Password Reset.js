function passwordReset(input) {

    let password = input.shift();

    let command = input.shift();

    while (command !== 'Done') {

        let action = command.split(' ');

        if (action[0] === 'TakeOdd') {
            let newPass = '';

            for (let i = 0; i < password.length; i++) {
                let char = password[i];

                if (i % 2 == 1) {
                    newPass += char;
                }
            }
            password = newPass;
            console.log(password);
        } else if (action[0] === 'Cut') {

            let startIndex = Number(action[1]);
            let lenght = Number(action[2]);
            let start = password.substring(0, startIndex)
            let remove = password.substring(startIndex, startIndex + lenght);
            let end = password.substring(startIndex + lenght);
            password = start + end;
            console.log(password);
        } else if (action[0] === 'Substitute') {

            let substring = action[1];
            let substitute = action[2];

            if (password.includes(substring)) {
                password = password.split(substring).join(substitute);
                console.log(password)
            } else {
                console.log(`Nothing to replace!`);
            }
        }
        command = input.shift();
    }
    console.log(`Your password is: ${password}`);
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]);