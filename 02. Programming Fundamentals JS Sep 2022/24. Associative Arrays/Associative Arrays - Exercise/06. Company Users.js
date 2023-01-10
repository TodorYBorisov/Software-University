function companyUsers(array) {

    let list = {};

    for (let line of array) {
        let [company, id] = line.split(' -> ');

        if (!list[company]) {
            list[company] = [];
        }
        if (!list[company].includes(id)) {
            list[company].push(id);
        }
    }

    let sort = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));

    for (let el of sort) {
        let [company, id] = el;

        console.log(company);
        for (const employe of id) {
            console.log(`-- ${employe}`)
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
]);

