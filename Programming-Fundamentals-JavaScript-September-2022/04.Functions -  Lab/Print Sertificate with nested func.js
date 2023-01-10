function printSertificate(grade, nameArray) {

    if (grade >= 3.00) {
        printHeader();
        printName(nameArray);
        formatGrade(grade);
    } else {
        let msg = `${nameArray[0]} ${nameArray[1]} does not qualify`;
        console.log(msg);
    }


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

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }

    function printName(array) {

        //return `${firstName} ${lastName}`
        let firstName = array[0];
        let lastName = array[1];

        console.log(`${firstName} ${lastName}`)
    }
}
console.log(printSertificate(5.25, ['Peter', 'Carter']));
