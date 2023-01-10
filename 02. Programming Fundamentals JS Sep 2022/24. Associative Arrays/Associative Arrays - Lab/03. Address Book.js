function addressBook(array) {

    let information = {};

    for (const entry of array) {
        let [name, address] = entry.split(':');
        information[name] = address;
    }

    let informationSort = Object.entries(information);
    let sort = informationSort.sort((a, b) => a[0].localeCompare(b[0]));

    for (let line of sort) {
        
        let name = line[0];
        let address = line[1];
        console.log(`${name} -> ${address}`);
        //let[name, address]=line; // това е друг начин на записване
    } 
}
addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);