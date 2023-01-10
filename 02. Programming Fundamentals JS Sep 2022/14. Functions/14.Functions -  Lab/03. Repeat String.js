function repeatString(string, n) {

    let newString = '';

    for (let i = 0; i < n; i++) {

        newString += string;

    }
    return newString;
    
}
let repeat = repeatString("abc", 3);
console.log(repeat);
