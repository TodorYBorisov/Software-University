class Company {

    constructor() {

        this.departments = {};
    }

    addEmployee(name, salary, position, department) {

        if (name === '' || name === undefined || name === null) {
            throw new Error('Invalid input!');
        } else if (salary === '' || salary === undefined || salary === null || salary <= 0) {
            throw new Error('Invalid input!');
        } else if (position === '' || position === undefined || position === null) {
            throw new Error('Invalid input!');
        } else if (department === '' || department === undefined || department === null) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = {};
        }

        if (!this.departments[department][name]) {
            this.departments[department][name] = {
                salary: Number(salary),
                position,
            };
        }

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {

        let avgDepSalary = [];

        for (let department in this.departments) {

            let counter = 0;
            let temporarySum = 0;

            for (let employee in this.departments[department]) {
                temporarySum += this.departments[department][employee].salary;
                counter++;
            }

            avgDepSalary.push([department, (temporarySum / counter)]);
        }

        let finalResult = [];

        avgDepSalary = avgDepSalary.sort((a, b) => b[1] - a[1]).shift();
        
        finalResult.push(`Best Department is: ${avgDepSalary[0]}`, `Average salary: ${avgDepSalary[1].toFixed(2)}`);
        
        let bestDeparment = avgDepSalary[0];
        
        let sortedEmployee = Object.entries(this.departments[bestDeparment]).sort((a, b) => b[1].salary - a[1].salary || a[0].localeCompare(b[0]));
        
        for (let line of sortedEmployee) {

            finalResult.push(`${line[0]} ${line[1].salary} ${line[1].position}`);
        }

        return finalResult.join('\n');
    }
}

let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());

