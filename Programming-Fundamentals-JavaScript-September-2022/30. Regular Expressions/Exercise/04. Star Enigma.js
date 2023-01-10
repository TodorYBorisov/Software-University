function starEnigma(input) {

    let numberOfmessage = Number(input.shift());

    let attackedPlanet = [];
    let destroyedPlanet = []

    for (let line of input) {
        let key = 0
        for (const char of line.toLowerCase()) {

            if (char === 's' || char === 't' || char === 'a' || char === 'r') {
                key++;
            }
        }
        let decreptedMessage = '';

        for (let letter of line) {
            let decreptedLetter = String.fromCharCode(letter.charCodeAt() - key)
            decreptedMessage += decreptedLetter;
        }

        let pattern = /[^@\-!:>]*?\@(?<planet>[A-Za-z]+)[^@\-!:>]*?\:(?<population>\d+)[^@\-!:>]*?\!(?<type>[A|D])\![^@\-!:>]*?\-\>(?<soldiers>\d+)[^@\-!:>]*?/gm

        let decMess = pattern.exec(decreptedMessage);

        while (decMess !== null) {
            let planetName = decMess.groups.planet;
            let attakType = decMess.groups.type

            if (attakType === 'A') {
                attackedPlanet.push(planetName)

            } else if (attakType === 'D') {
                destroyedPlanet.push(planetName)
            }
            decMess = pattern.exec(decreptedMessage);
        }
    }

    let sortedAttackedPlanets = attackedPlanet.sort((a, b) => a.localeCompare(b));
    let sortedDestroyedPlanets = destroyedPlanet.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${sortedAttackedPlanets.length}`);

    for (let planet of sortedAttackedPlanets) {
        console.log(`-> ${planet}`);
    }

    console.log(`Destroyed planets: ${sortedDestroyedPlanets.length}`);
    for (let planet of sortedDestroyedPlanets) {
        console.log(`-> ${planet}`);
    }
}
starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']
)
// starEnigma(['3',
// "tt(''DGsvywgerx>6444444444%H%1B9444",
// 'GQhrr|A977777(H(TTTT',
// 'EHfsytsnhf?8555&I&2C9555SR']
// );