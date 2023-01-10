function addAndRemove(array) {

    let initialNumber = 1;
    let newString = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i];

        if (command === 'add') {
            let number = Number(i + initialNumber)
            newString.push(number);
        } else {
            newString.pop();
        }
    }

    if (newString.length === 0 ) {
        console.log('Empty');
    } else {
        console.log(newString.join(' '));
    }
}
//addAndRemove(['add', 'add', 'add', 'add']);
//addAndRemove(['add', 'add', 'remove', 'add', 'add']);
addAndRemove(['remove', 'remove', 'remove']);
