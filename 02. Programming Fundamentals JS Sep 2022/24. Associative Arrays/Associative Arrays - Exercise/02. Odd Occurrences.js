function oddOccurrences(string) {

    let stringToLow = string.toLowerCase().split(' ');
    
    let symbols = {};

    for (const element of stringToLow) {
        let counter = 0
        if (!symbols.hasOwnProperty(element)) {
            counter++;
            symbols[element] = counter
        } else {
            symbols[element] += 1;
        }
    }

    let sort = Object.entries(symbols).sort((a, b) => b[1] - a[1]);

    let result =[];

    for (const element of sort) {

        if (element[1] % 2 !== 0){
            result.push(`${element[0]} `);
        }
    }
    console.log(result.join(''));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food');