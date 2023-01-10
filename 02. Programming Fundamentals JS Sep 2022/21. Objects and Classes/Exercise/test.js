function phoneBook() {

    let phoneBook = {
        pesho: 36,
        toshko: 12,
        gosho: 18,
        Atanas: 73,
        Lili: 26,
    }

    let convertedPhoneBook = Object.entries(phoneBook);
    let sorted = convertedPhoneBook.sort((a, b) => a[0].localeCompare(b[0]));
    console.log(sorted)

}
phoneBook()