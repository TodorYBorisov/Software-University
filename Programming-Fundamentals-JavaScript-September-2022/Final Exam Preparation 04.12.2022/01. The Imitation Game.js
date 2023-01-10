function theImitationGame(input) {

    let message = input.shift();
    let command = input.shift();

    while (command !== 'Decode') {
        let action = command.split('|');

        if (action[0] === 'Move') {
            let numOfLetters = Number(action[1]);

            let firstHalf = message.substring(0,numOfLetters);
            let secondHalf =message.substring(numOfLetters);

            message=secondHalf+firstHalf;
        }else if(action[0]==='Insert'){

            let index = Number(action[1]);
            let value = (action[2]);

            let firstHalf = message.substring(0,index);
            let secondHalf = message.substring(index);

            message = firstHalf+value+secondHalf;
        }else if(action[0]==='ChangeAll'){

            let substring = action[1];
            let replacement = action[2];

            message= message.split(substring).join(replacement);
        }

        command = input.shift();
    }
    console.log(`The decrypted message is: ${message}`);
    
} 
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
// theImitationGame(['owyouh',
//     'Move|2',
//     'Move|3',
//     'Insert|3|are',
//     'Insert|9|?',
//     'Decode',])