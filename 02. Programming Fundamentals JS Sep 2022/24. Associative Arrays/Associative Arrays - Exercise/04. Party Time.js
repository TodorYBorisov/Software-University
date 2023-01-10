function partyTime(array) {

    let vip = [];
    let regular = [];

    let command = array.shift();

    while (command !== 'PARTY') {

        let firstSymbol = command.charAt(0); //тук взимаме първия символ
        //след което казвам, че ако той е м/у 48-57 код от АСКИ значи е някво число.
        if (firstSymbol >= String.fromCharCode(48) && firstSymbol<= String.fromCharCode(57)) {
            vip.push(command)
        } else {
            regular.push(command);
        }

        command = array.shift();
    }

    let list = vip.concat(regular) // тук конкатениране двата масива в един
    
    for (let guest of array) {

        if(list.includes(guest)){
            let index = list.indexOf(guest)
            list.splice(index,1);
        }
        
    }

    console.log(list.length);

    for (const guestDidntCome of list) {
        console.log(guestDidntCome)
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);