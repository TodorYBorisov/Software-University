function phoneBook() {

    let propertyName = 'Anabel Petrova'

    let phoneBook = {
        toshko: 11,
        gosho: 18,
        pesho: 36,
        lili: 26,
        Atanas: 87,
        Mitko: 2,
        'Anabel Petrova': 13,
        [propertyName]: 13, // тук деларираме динамично пропърти
    }
    console.log(phoneBook.toshko) //тук достъпваме с дот синтаксиса до стойността, връща 12

    console.log(phoneBook['Anabel Petrova']); // тук достъпваме по бракет синтаксиса, връща 13

    //let propertyName = 'Anabel Petrova' // присвоявам на ключа към нова променлива, връща 13

    console.log(phoneBook[propertyName])

    for (let name in phoneBook) { // с този цикъл може да минаваме по обекта
        console.log(`${name}->${phoneBook[name]}`)
        console.log(phoneBook[name]);//така достъпваме директно стойностите
    }

    if (phoneBook.hasOwnProperty('toshko')) {
        console.log('yes');
    }
    //начин да проверим дали даден ключ вече го имаме в обекта, важи и за долния пример
    if (phoneBook['toshko']) {
        console.log(phoneBook['toshko']);
    }

    delete phoneBook['Anabel Petrova'];//изтрива ключ от обекта
    console.log(phoneBook)

    let phoneBookArr = phoneBook.Object.entries(phoneBook);
    for (const [key, value] of Object.entries(phoneBook)) {//деструктурирано минава по обекта като прави всяка двойка на масивче 
        console.log(`${key} => ${value}`);
    }
    for (const kvp of phoneBookArr) { //същото като горното само, че по
        let name = kvp[0];
        let phone = kvp[1];
        console.log(`${name}=> ${phone}`);
    }

    for (const key in store) {
        console.log(`${key} -> ${store[key]}`);
    }

    let { toshko } = phoneBook; //деструктуриране на обект
    console.log(toshko);

    let convertedPhoneBook = Object.entries(phoneBook); //обръщаме първо към масив, за да може да сортираме двойките
    convertedPhoneBook.sort((a, b) => a[1] - b[1]);// сортиране по стойност с индекс от 1
    convertedPhoneBook.sort((kvpA, kvpB) => kvpA[0].localeCompare(kvpB[0])); //сортиране по азбучен ред с индекс от 0

    convertedPhoneBook.sort(([keyA, valueA], [keyB, valueB]) => valueA.localeCompare(valueB));
    console.log(convertedPhoneBook);

    let нещо =Object.entries(обекта).sort((a, b) => b[1].sum - a[1].sum || a[0].localeCompare(b[0]))
    //сортиране на обек първо по стойност от най-голямата към най-малката и след това по азбучен ред

    let sortedPhoneBook = Object.fromEntries(sorted);  //обръщане обратно към асоциативен масив
    console.log(sortedPhoneBook)
    //=============================================================================================
}
phoneBook()

