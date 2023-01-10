function matchFullName(input) {

    let pattern = /\b[A-Z]{1}[a-z]+ [A-Z]{1}[a-z]+\b/g;
    let matches = input.match(pattern);
    let result ='';
    for (let name of matches) {
    
        result+=`${name} `;
    }
    console.log(result)
}
matchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")