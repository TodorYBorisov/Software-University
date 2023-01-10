function formatGrade(grade) {

    let assessment = ''
    if (grade >= 2.00 && grade < 3.00) {
        assessment = 'Fail';
    } else if (grade >= 3.00 && grade < 3.50) {
        assessment = 'Poor';
    } else if (grade >= 3.50 && grade < 4.50) {
        assessment = 'Good';
    } else if (grade >= 4.50 && grade < 5.50) {
        assessment = 'Very good';
    } else if (grade >= 5.50) {
        assessment = 'Excellent'
    }

    if (assessment === 'Fail') {
        console.log('Fail (2)');
    } else {
        console.log(`${assessment} (${(grade).toFixed(2)})`)
    }

}
formatGrade(3.33);
formatGrade(2.99);
formatGrade(4.50);