function santasSecretHelper(array) {

    let key = Number(array.shift())
    let messages = [];
    let line = array.shift();

    while (line !== 'end') {
        let decodeMessages = ''
        for (let letter of line) {

            let decreptedLetter = String.fromCharCode(letter.charCodeAt() - key)
            decodeMessages += decreptedLetter
        }
        messages.push(decodeMessages)
        line = array.shift();
    }
               
    let pattern = /@(?<name>[A-Za-z]+)[^@\-!:>]*!(?<type>[G|N])!/gm

    for (let message of messages) {

        let match = pattern.exec(message)

        while (match !== null) {

            let childName = match.groups.name;
            let behavior = match.groups.type;

            if (behavior === 'G') {
                console.log(childName)
            }

            match = pattern.exec(message)
        }
    }
}
santasSecretHelper(['3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejnW$J$',
    'CVwdq&gnmjkvng$Q$',
    'end']);

santasSecretHelper(['3',
    'N}eideidmk$', '(mnyenmCNlpamnin$J$',
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end']);