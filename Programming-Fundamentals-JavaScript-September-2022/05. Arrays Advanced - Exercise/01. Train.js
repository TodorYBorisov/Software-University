function train(commands) {

    let wagon = commands.shift().split(' ').map(Number);

    let maxCapacity = Number(commands.shift());

    for (let i = 0; i < commands.length; i++) {
        let element = (commands[i]).split(' ');
        let command = element[0];
        let number = Number(element[1]);

        if (command === 'Add') {
            wagon.push(number);

        } else {
            command = Number(command);
            for (let j = 0; j < wagon.length; j++) {
                let passengersInWagow = wagon[j];

                if ((passengersInWagow + command) <= maxCapacity) {
                    wagon[j] += command;
                    break;
                }
            }
        }
    }

    console.log(wagon.join(' '));
}


train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);
