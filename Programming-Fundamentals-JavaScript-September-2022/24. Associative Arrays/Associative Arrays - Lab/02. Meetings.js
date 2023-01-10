function meetings(array) {

    let schedule = {};

    for (let entry of array) {
        let [weekday, name] = entry.split(' ');

        // if (schedule.hasOwnProperty(weekday)) {
        //     console.log(`Conflict on ${weekday}!`);
        // } else {
        //     schedule[weekday] = name;
        //     console.log(`Scheduled for ${weekday}`);
        // }

        if (schedule[weekday]) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            schedule[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    }

    for (let key in schedule) {

        console.log(`${key} -> ${schedule[key]}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']);