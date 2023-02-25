function createPerson(firstName, lastName) {

    const person = {      // Създаваме си обект 
        firstName,        // Сетваме да има пропърти firstName, което ще има и такава стойност първоначално 
        lastName,         // Сетваме да има пропърти lastName, което ще има и такава стойност първоначално 
    };

    Object.defineProperty(person, 'fullName', {
        // Чрез Object.defineProperty можем да добавяме property към даден обект, на първо място е обекта,
        // на второ място е името на propertyto, на трето място е описанието на propertyto(enumerable, writable, configurable или value) може и чрез get и set
        get() {                                                 // Дефинираме getter 
            return `${this.firstName} ${this.lastName}`;        // Той ще връща първотото и второто имена с интервал между тях 
        },
        set(value) {                                            // Дефинираме setter, който приема параметър 
            const [first, last] = value.split(' ');             // Параметъра го деструктурираме, като го сплитваме по интервал 
            if (first !== undefined && last !== undefined) {    // Ако едната от двете стойности е undefined 
                this.firstName = first;                         // Сетваме стойността на първото име 
                this.lastName = last;                           // Сетваме стойността на второто име
            }
        },
    });
    return person;                      // Накрая функцията връща обекта 
}