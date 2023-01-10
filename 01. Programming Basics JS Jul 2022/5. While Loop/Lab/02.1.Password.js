function password(input){
    let index = 0;
    let userName = input[index];
    index++;
    let pass = input[index];
    index++;

    let currentPass = input[index];
    index++;
    while (pass !== currentPass) {
        
        currentPass = input[index];
        index++;

    }
    console.log(`Welcome ${userName}!`)

} password(["Nakov",
"1234",
"Pass",
"1324",
"1234"]);