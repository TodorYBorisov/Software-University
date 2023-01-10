function travelTime(array) {

    let list = {};
    for (const entry of array) {

        let [countryName, town, cost] = entry.split(' > ');

        if (!list[countryName]) {
            list[countryName] = [];
        }
        if (!list[countryName][town]) {
            list[countryName][town] = Number.MAX_SAFE_INTEGER
        }

        if (list[countryName][town]) {
            if (list[countryName][town] > Number(cost)) {
                list[countryName][town] = Number(cost)
            }
        }
    }
    let sortedList = Object.keys(list).sort((a, b) => a.localeCompare(b));

    for (const countryName of sortedList) {
        let output = "";
        output += `${countryName} -> `;

        let sortTownbByCost = Object.keys(list[countryName]).sort((a, b) => list[countryName][a] - list[countryName][b]);

        for (const town of sortTownbByCost) {
            output += `${town} -> `;
            output += `${list[countryName][town] + ' '}`;
        }

        console.log(output)
    }
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 200",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 800",
    "Bulgaria > Lukowit > 150"]);