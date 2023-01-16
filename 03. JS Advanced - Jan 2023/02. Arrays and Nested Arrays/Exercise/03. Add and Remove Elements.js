function addAndRemoveElements(array) {

    const newArr = [];
    let counter = 1;

    for (let i = 0; i < array.length; i++) {

        let currentCommand = array[i];

        if (currentCommand === 'add') {
            newArr.push(counter++);
        } else if (currentCommand === 'remove') {

            newArr.pop(counter++);
        }
    }
    if (!newArr.length) {
        console.log('Empty');
    } else {
        console.log(newArr.join('\n'));
    }
}
addAndRemoveElements(['add',
    'add',
    'add',
    'add']
);