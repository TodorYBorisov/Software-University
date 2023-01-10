function houseParty(array) {

    let guestList = [];

    for (let i = 0; i < array.length; i++) {

        let element = array[i];
        let name = element.split(' ');
        let guestName = name[0];

        if (name.length === 3) {
            if (guestList.includes(guestName)) {
                console.log(`${guestName} is already in the list!`);
            } else {
                guestList.push(guestName)
            }
        } else {
            if (!guestList.includes(guestName)) {
                console.log(`${guestName} is not in the list!`);
            } else {
                guestList.pop();
            }
        }
    }

    console.log(guestList.join('\n'))
}
houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']);
