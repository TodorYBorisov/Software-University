function employees(array) {

    // for (let line of array) {

    //     let employee = {
    //         name: line,
    //         personalNum: line.length,
    //     }
    //     console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    // }

    let employeeList = {};

    array.forEach(person => {
        employeeList[person]= person.length;
    });

    for (let key in employeeList) {

    console.log(`Name: ${key} -- Personal Number: ${employeeList[key]}`);
       
    }
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal']);