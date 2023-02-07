function listProcessor(array) {

    let result = [];

    for (let line of array) {

        let [command, string] = line.split(' ');

        if (command === 'add') {
            result.push(string);
        } else if (command === 'remove') {
            result = result.filter(x => x !== string);
        } else if (command === 'print') {
            console.log(result.join(','));
        }
    }

}
listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
// return {
//     add(string) {

//     },
//     remove(string) {

//     },
//     print() {
//         console.log();
//     }
// };