function matchFullName(input) {

    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;

    let result = [];
    let names = pattern.exec(input)

    while (names !== null) {

        result.push(names[0]);

        names = pattern.exec(input)
    }

    console.log(result.join(' '));
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")