function secretChat(array) {

    let message = array.shift();
    let command = array.shift();

    while (command !== 'Reveal') {

        let action = command.split(':|:');

        if (action[0] === 'ChangeAll') {

            let substring = action[1];
            let replacment = action[2];

            message = message.split(substring).join(replacment);

            console.log(message)
        } else if (action[0] === 'Reverse') {
            let substring = action[1];

            if (!message.includes(substring)) {
                console.log(`error`);
            } else {
                let startIndex = Number(message.indexOf(substring));
                let endIndexOfSubstring = Number(startIndex + substring.length);

                let firstPart = message.substring(0, startIndex);
                let removedPart = message.substring(startIndex, endIndexOfSubstring);
                //let lastPart = message.substring(endIndexOfSubstring);

                let reversePart = removedPart.split('').reverse().join('')

                message = firstPart + reversePart;
                console.log(message)

            }

        } else if (action[0] === 'InsertSpace') {

            let spaceAtIndex = Number(action[1]);
            //let space =' ';

            let fisrtHalf = message.substring(0, spaceAtIndex);
            let endHalf = message.substring(spaceAtIndex);

            message = fisrtHalf + ' ' + endHalf;
            console.log(message)
        }
        command = array.shift();
    }

    console.log(`You have a new text message: ${message}`);
}
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal']);