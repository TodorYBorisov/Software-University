function softUniReception(array) {

    let converted = array.map(Number);

    let firstEmployee = converted[0];
    let secondEmployee = converted[1];
    let thirdEmployee = converted[2];

    let totalStudents = converted[3];
    let hours = 0;

    while (totalStudents > 0) {
        
        hours++;
        if (hours % 4 == 0) {
            hours += 1
        }
        if (totalStudents > 0) {
            totalStudents -= firstEmployee;
            if (totalStudents === 0) {
                break;
            }
        }
        if (totalStudents > 0) {
            totalStudents -= secondEmployee;
            if (totalStudents === 0) {
                break;
            }
        }
        if (totalStudents > 0) {
            totalStudents -= thirdEmployee;
            if (totalStudents === 0) {
                break;
            }
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

softUniReception(['3', '2', '5', '40'])