function oldBooks(input) {

    let index = 0;
    let favoriteBook = input[index];
    index++
    let command = input[index];
    index++;
    let chekedBooks = 0;

    while (command !== "No More Books") {
        if (favoriteBook === command) {
            console.log(`You checked ${chekedBooks} books and found it.`);
            return;
        }
        chekedBooks++;
        command = input[index];
        index++;
    }
    console.log(`The book you search is not here!`);
    console.log(`You checked ${chekedBooks} books.`);
}

oldBooks(["Bourne",
"True Story",
"Forever",
"More Space",
"The Girl",
"Spaceship",
"Strongest",
"Profit",
"Tripple",
"Stella",
"The Matrix",
"Bourne"]);