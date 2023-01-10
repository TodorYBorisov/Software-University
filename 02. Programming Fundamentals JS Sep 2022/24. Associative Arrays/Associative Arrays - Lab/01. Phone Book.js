function phoneBook(array) {

    let phoneBook = {};

    for (let line of array) {
        let [name, phone] = line.split(' ');
        phoneBook[name] = phone;
    }

    for (let key in phoneBook) {

        console.log(`${key} -> ${phoneBook[key]}`);
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']);