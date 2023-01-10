function arenaTier(array) {

    let command = array.shift();
    let pool = {};

    while (command !== 'Ave Cesar') {

        let line = command.split(' ')
        if (line[1] === '->') {

            let [name, technique, skill] = command.split(' -> ');

            if (!pool[name]) {
                pool[name] = {};

            }
            if (!pool[name][technique]) {
                pool[name][technique] = skill;
            }
            if (pool[name][technique]) {
                if (pool[name][technique] < Number(skill)) {
                    pool[name][technique] = Number(skill);
                }
            }
        } else if (line[1] === 'vs') {
            let [gladiator1, gladiator2] = command.split(' vs ');
            if (pool.hasOwnProperty(gladiator1) && pool.hasOwnProperty(gladiator2)) {
                let gladiator1Techniques = (pool[gladiator1]);
                let gladiator2Techniques = (pool[gladiator2]);

                for (let skill in gladiator1Techniques) {

                    if (gladiator2Techniques.hasOwnProperty(skill)) {
                        if (gladiator1Techniques[skill] > gladiator2Techniques[skill]) {
                            delete pool[gladiator2];
                        } else {
                            delete pool[gladiator1];
                        }
                    }
                }
            }
        }
        command = array.shift();
    }

    for (let key in pool) {
        let sum = 0;
        let outsideObj = pool[key];

        for (let insideKey in outsideObj) {
            sum += outsideObj[insideKey];
        }

        outsideObj['sum'] = sum;
    }

    Object.entries(pool).sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
        .forEach(gladiator => {
            console.log(`${gladiator[0]}: ${gladiator[1].sum} skill`);
            delete gladiator[1].sum;

            Object.entries(gladiator[1]).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .forEach(gladiator => { console.log(` - ${gladiator[0]} <!> ${gladiator[1]}`); });
        });
}
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar']);