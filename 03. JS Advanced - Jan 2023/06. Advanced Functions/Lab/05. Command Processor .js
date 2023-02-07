function commandProcessor() {

    let result = '';

    function append(string) {
        result += string;
    };

    function removeStart(n) {
        result = result.slice(n);
    };

    function removeEnd(n) {
        result = result.slice(0, -n);
    }

    function print() {
        console.log(result);
    }
    return {
        append,
        removeStart,
        removeEnd,
        print
    };
}

let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


