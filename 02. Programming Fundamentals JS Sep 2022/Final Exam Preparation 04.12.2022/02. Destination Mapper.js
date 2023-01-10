function destinationMapper(text) {
    let pattern = /(\=|\/)(?<country>[A-Z][A-Za-z]{2,})\1/gm;

    let match = pattern.exec(text);
    let travelPoints = 0;

    let output = [];
    while (match !== null) {

        let countryName = match.groups.country;
        travelPoints += Number(countryName.length)

        output.push(countryName);

        match = pattern.exec(text)
    }

    console.log(`Destinations: ${output.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);
}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=");
