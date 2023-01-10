function requiredReading(numberOfPages, pagesReadPerHour, dayToRead) {

    let totalHoursPerDay = (numberOfPages / pagesReadPerHour) /dayToRead;

    console.log(totalHoursPerDay)
}

requiredReading(212, 20, 2)