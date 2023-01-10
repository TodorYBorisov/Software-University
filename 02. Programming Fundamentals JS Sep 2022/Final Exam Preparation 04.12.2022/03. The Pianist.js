function thePianist(array) {

    let pieces = Number(array.shift());
    let collection = {};
    let info = array.splice(0, pieces);

    for (const line of info) {

        let [piece, composer, key] = line.split('|');

        if (!collection[piece]) {

            collection[piece] = {
                composer: composer,
                key: key,
            }
        }
    }
    let command = array.shift();

    while (command !== 'Stop') {

        let action = command.split('|');

        if (action[0] === 'Add') {

            let piece = action[1];
            let composer = action[2];
            let key = action[3];

            if (!collection[piece]) {
                collection[piece] = {
                    composer: composer,
                    key: key,
                }
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else if (collection[piece]) {
                console.log(`${piece} is already in the collection!`);
            }

        } else if (action[0] === 'Remove') {

            let piece = action[1];

            if (collection[piece]) {
                delete collection[piece];
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        } else if (action[0] === 'ChangeKey') {

            let piece = action[1];
            let newKey = action[2];

            if (collection[piece]) {

                collection[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
        }

        command = array.shift();
    }

    for (let piece in collection) {
        console.log(`${piece} -> Composer: ${collection[piece].composer}, Key: ${collection[piece].key}`)
    }

}
thePianist([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop']);

    thePianist([
        '4',
        'Eine kleine Nachtmusik|Mozart|G Major',
        'La Campanella|Liszt|G# Minor',
        'The Marriage of Figaro|Mozart|G Major',
        'Hungarian Dance No.5|Brahms|G Minor',
        'Add|Spring|Vivaldi|E Major',
        'Remove|The Marriage of Figaro',
        'Remove|Turkish March',
        'ChangeKey|Spring|C Major',
        'Add|Nocturne|Chopin|C# Minor',
        'Stop']);