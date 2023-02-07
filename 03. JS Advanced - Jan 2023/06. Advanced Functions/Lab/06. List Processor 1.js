function listProcessor(array) {

    let arr = [];

    let result = {
        add: (string) => arr.push(string),
        remove: (string) => (arr = arr.filter(el => el !== string)),
        print: () => console.log(arr.join(','))
    };

    for (let line of array) {
        let [command, string] = line.split(' ');

        result[command](string);
    }
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
