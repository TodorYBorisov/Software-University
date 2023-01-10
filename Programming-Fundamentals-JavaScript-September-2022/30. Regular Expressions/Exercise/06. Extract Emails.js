function extractEmails(input) {

    let word = input.split(' ')
    let pattern = /(?<!\S)[A-Za-z]+([\.\-\_]*[A-Za-z]+)*@[A-Za-z]+([\.\-\_]*[A-Za-z]+)*(\.[A-Za-z]+)/gm

    let match = pattern.exec(input);

    while (match !== null) {

        let mail = match[0]

        console.log(mail)

        match = pattern.exec(input)
    }
}
extractEmails('Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.');
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.');
extractEmails('Please contact us at: support@github.com.')