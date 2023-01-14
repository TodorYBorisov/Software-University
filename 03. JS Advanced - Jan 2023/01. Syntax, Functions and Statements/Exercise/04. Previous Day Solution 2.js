function previousDay(year, month, day) {

    let dateInput = `${year}-${month}-${day}`;

    let date = new Date(dateInput);

    date.setDate(date.getDate()-1);

    let result = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    console.log(result);

}
previousDay(2016, 9, 30);
previousDay(2015, 5, 10);