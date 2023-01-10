function password(input) {

    let userName = String(input[0]);
    let pass = Number(input[1]);

    let index = 2;
    let nextRow = input[index];
    index++;

    while (nextRow === pass) {

        nextRow = input[index];
        index++;

    }
    console.log(`Welcome ${userName}!`)
}

password(["Gosho",
"secret",
"secret"]);