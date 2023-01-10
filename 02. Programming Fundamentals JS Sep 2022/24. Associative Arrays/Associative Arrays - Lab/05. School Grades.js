function schoolGrades(array) {

    let grades = {};

    for (let el of array) {

        let split = el.split(' ');
        let name = split.shift();
        let schoolGrades = split.map(Number)

        if (!grades[name]) {
            grades[name] = schoolGrades;
        } else {
            for (let rating of schoolGrades) {
                grades[name].push(rating)
            }
        }
    }

    let gradesArr = Object.entries(grades)
    let sorted = gradesArr.sort((a, b) => a[0].localeCompare(b[0]));
    
    let finalBook = {};
    for (let line of sorted) {
        let name = line[0]
        let ratings = line[1];

        let sum = 0;
        for (let i = 0; i < ratings.length; i++) {

            let grade = ratings[i];
            sum += grade
        }
        let avgRating = (sum / ratings.length).toFixed(2);
        finalBook[name] = avgRating;
    }
    for (const key in finalBook) {
        console.log(`${key}: ${finalBook[key]}`);
    }
}

schoolGrades(['Steven 3 5 6 4',
//'George 4 6',
//'Tammy 2 5 3',
'Steven 6 3']);