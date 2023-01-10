function vacationBookList(input){

    let numPages = Number(input[0]);

    let pagesPerHour = Number(input[1]);

    let days = Number(input[2]);

    let totalHours = numPages / pagesPerHour;

    let neededHours =totalHours / days;

    console.log(neededHours);
}
vacationBookList(["432 ",
"15 ",
"4 "])