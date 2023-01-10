function friendsListMaintenance(array) {

    let firnedsList = array.shift().split(', ');

    let command = array.shift();
    let blackListCounter = 0;
    let lostListCounter = 0;

    while (command !== 'Report') {

        let action = command.split(' ');

        if (action[0] === 'Blacklist') {
           
            let name = action[1];

            if (firnedsList.includes(name)) {

                let index = firnedsList.indexOf(name);
                firnedsList.splice(index, 1, 'Blacklisted');
                console.log(`${name} was blacklisted.`);
                blackListCounter++;
            } else if( !firnedsList.includes(name)) {
                console.log(`${name} was not found.`);
            }
        } else if (action[0] === 'Error') {

            let index = Number(action[1]);

            if (index >= 0 && index < firnedsList.length) {

                if (firnedsList[index] !== 'Blacklisted' && firnedsList[index] !== 'Lost') {
                    console.log(`${firnedsList[index]} was lost due to an error.`)
                    firnedsList.splice(index, 1, 'Lost');
                    lostListCounter++;
                }
            }

        } else if (action[0] === 'Change') {
            let index = Number(action[1]);
            let newName = action[2];

            if (index >= 0 && index < firnedsList.length) {
                console.log(`${firnedsList[index]} changed his username to ${newName}.`)
                firnedsList.splice(index, 1, newName);
            }
        }
        command = array.shift();
    }
    console.log(`Blacklisted names: ${blackListCounter}`);
    console.log(`Lost names: ${lostListCounter}`);
    console.log(firnedsList.join(' '));

}

friendsListMaintenance(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"]);

