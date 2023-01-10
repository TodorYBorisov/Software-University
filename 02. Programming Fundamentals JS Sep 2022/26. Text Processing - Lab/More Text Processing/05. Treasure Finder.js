function treasureFinders(array) {

    let key = array.shift().split(' ')
    let line = array.shift();

    while (line !== 'find') {
        let decreptedMessage = ''

        let count = 0;

        while (count < line.length) {

            for (let i = 0; i < key.length; i++) {

                if (count === line.length) {
                    break;
                }
                let num = Number(key[i]);

                let currentChar = line[count].charCodeAt();

                let decreptedLetter = String.fromCharCode(currentChar - num)
                count++
                decreptedMessage += decreptedLetter;
            }
        }

        let startIndexT = decreptedMessage.indexOf('&')
        let endIndexT = decreptedMessage.lastIndexOf('&')
        let type = decreptedMessage.substring(startIndexT + 1, endIndexT)
        let startIndexC = decreptedMessage.indexOf('<')
        let endIndexC = decreptedMessage.lastIndexOf('>')
        let coordinates = decreptedMessage.substring(startIndexC + 1, endIndexC)

        console.log(`Found ${type} at ${coordinates}`);

        line = array.shift();
    }

}
treasureFinders(["1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"]);

    treasureFinders(["1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"]);