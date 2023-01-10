function worldTour(input) {

    let destinations = input.shift();
    let command = input.shift();

    while (command !== 'Travel') {

        let action = command.split(':');

        if (action[0] === 'Add Stop') {
            let index = Number(action[1]);
            let substring = action[2];

            if (index >= 0 && index < destinations.length) {
                let firstHalf = destinations.substring(0, index);
                let secondHalf = destinations.substring(index);
                destinations = firstHalf + substring + secondHalf;
            }
            console.log(destinations);

        } else if (action[0] === 'Remove Stop') {
            let startIndex = Number(action[1]);
            let endIndex = Number(action[2]);

            if (startIndex >= 0 && startIndex < destinations.length && endIndex >= 0 && endIndex < destinations.length) {
                let firstHalf = destinations.substring(0, startIndex);
                let secondHalf = destinations.substring(endIndex + 1);
                destinations = firstHalf + secondHalf;
            }
            console.log(destinations);

        } else if (action[0] === 'Switch') {
            let oldSting = action[1];
            let newString = action[2];

            if (destinations.includes(oldSting)) {
                destinations = destinations.split(oldSting).join(newString)
            }
            console.log(destinations);
        }
        command = input.shift();
    }
    console.log(`Ready for world tour! Planned stops: ${destinations}`)
}
worldTour(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);