function cardGames(array) {

    let power = { '1': 10, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 }
    let type = { 'C': 1, 'D': 2, 'H': 3, 'S': 4 }

    let playerList = {};

    for (const line of array) {
        let [name, cards] = line.split(': ');
        let splitedCards = cards.split(', ')

        if (!playerList[name]) {
            playerList[name] = new Set();
        }

        for (const card of splitedCards) {
            
            playerList[name].add(card)
        }
    }

    for (let kvp in playerList) {

        let name = kvp
        let cards = playerList[kvp]
        let sum = 0

        for (const card of cards) {

            let a = power[card[0]];
            let b = type[card.slice(-1)];

            sum += a * b;
        }

        console.log(`${name}: ${sum}`);
    }
}

cardGames([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);