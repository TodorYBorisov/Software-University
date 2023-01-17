function sortAnArrayBy2Criteria(array) {

    let sort = array.sort((a, b) => a.length - b.length || a.localeCompare(b));

    // for (const element of sort) {
    //     console.log(element);
    // }

    console.log(sort.join('\n'));
}
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);