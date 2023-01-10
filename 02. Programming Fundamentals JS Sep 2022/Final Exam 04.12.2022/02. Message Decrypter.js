function messageDecrypter(array) {

    let numberOfMessages = Number(array.shift());

    let pattern = /^([$%])(?<tag>[A-Z][a-z]{2,})\1: \[(?<char1>\d+)\]\|\[(?<char2>\d+)\]\|\[(?<char3>\d+)\]\|$/gm

    let command = array.shift();

    while (command !== undefined) {

        let match = pattern.exec(command);

        if (match !== null) {

            let tag = match.groups.tag;
            let char1 = match.groups.char1;
            let char2 = match.groups.char2;
            let char3 = match.groups.char3;

            let decryptedMessage = String.fromCharCode(char1) + String.fromCharCode(char2) + String.fromCharCode(char3);
            console.log(`${tag}: ${decryptedMessage}`);

        } else {
            console.log(`Valid message not found!`);
        }

        match = pattern.exec(command);
        command = array.shift();
    }
}
messageDecrypter(["4",
    "$Request$: [73]|[115]|[105]|",
    "%Taggy$: [73]|[73]|[73]|",
    "%Taggy%: [118]|[97]|[108]|",
    "$Request$: [73]|[115]|[105]|[32]|[75]|"]);

    messageDecrypter(["3",
    "This shouldnt be valid%Taggy%: [118]|[97]|[108]|",
    "$tAGged$: [97][97][97]|",
    "$Request$: [73]|[115]|[105]|true"])
    