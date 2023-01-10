function sortAnarryByTwoCriteria(array) {

    let sortByLength = array.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    });

    console.log(sortByLength.join('\n'))

}
sortAnarryByTwoCriteria(['test', 'Deny', 'omen', 'Default'])
