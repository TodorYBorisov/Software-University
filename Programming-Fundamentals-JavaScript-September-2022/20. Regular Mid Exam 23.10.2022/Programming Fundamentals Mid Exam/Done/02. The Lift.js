function theLift(array) {

    let people = Number(array.shift());
    let waggons = array.toString().split(' ').map(Number);
    let waggonMax = 4;

    for (let i = 0; i < waggons.length; i++) {

        if (waggons[i] < waggonMax) {

            if (people >= waggonMax - waggons[i]) {
                people -= waggonMax - waggons[i];
                waggons[i] = waggonMax;
            } else {
                waggons[i] += people;
                people = 0
            }
        }
    }
    let waggonIsFull = true;
    for (let j = 0; j < waggons.length; j++) {
        let check = waggons[j];
        if (check < waggonMax) {
            waggonIsFull = false;
            break;
        }
    }

    if (waggonIsFull && people > 0) {
        console.log(`There isn't enough space! ${people} people in a queue!`);
    }
    if (!waggonIsFull && people === 0) {
        console.log(`The lift has empty spots!`);
    }

    console.log(waggons.join(' '));
}
theLift(["15", "0 0 0 0 0"]);