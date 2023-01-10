function postOffice(input) {

    let [firstPart, secondPart, thirdPart] = input[0].split('|');
    let regexForFirstPart = /(\$([A-Z])+\$|\#[A-Z]+\#|\%[A-Z]+\%|\*[A-Z]+\*|\&[A-Z]+\&)/g;
    let regexForSecondPart = /([7-8][0-9]|90|65|66|67|68|69):([0-1][1-9]|20|10)/g;
    let capitalLetters = regexForFirstPart.exec(firstPart);
    capitalLetters = capitalLetters[1].split('');
    capitalLetters.shift();
    capitalLetters.pop();
    let lettersAndLengths = secondPart.match(regexForSecondPart);
    let myMap = new Map();
    for (let letter of capitalLetters) {
        myMap.set(letter, 0);
    }
    let unique = [];
    for (let combination of lettersAndLengths) {
        let [letterAsciiCode, length] = combination.split(':');
        letterAsciiCode = String.fromCharCode(letterAsciiCode);
        if (!unique.includes(letterAsciiCode)) {
            unique.push(letterAsciiCode);
        }
        if (myMap.has(letterAsciiCode)) {
            myMap.set(letterAsciiCode, Number(length) + 1);
        }
    }
    thirdPart = thirdPart.split(' ');
    for (let letter of capitalLetters) {
        for (let word of thirdPart) {
            let firstLetter = word[0];
            if (letter === firstLetter && word.length === myMap.get(letter)) {
                console.log(word);
            }
        }
    }
}

postOffice(['sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'])