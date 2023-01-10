function race(input) {

    let patternName = /[A-Za-z]+/g;
    let patternDisstance = /\d+/g;

    let finalList = {};

    let racerList = input.shift().split(', ');

    let line = input.shift();

    while (line !== 'end of race') {

        let name = line.match(patternName).join('')
        let currentDistance = line.match(patternDisstance).join('').split('')

        if (racerList.includes(name)) {
            let distance = 0;

            currentDistance.forEach(digit => {
                distance += Number(digit)
            });

            if (!finalList[name]) {
                finalList[name] = distance
            } else {
                finalList[name] += distance

            }
        }

        line = input.shift();
    }

    let sort = Object.entries(finalList).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${sort[0][0]}`);
    console.log(`2nd place: ${sort[1][0]}`);
    console.log(`3rd place: ${sort[2][0]}`);

}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race']);