class User {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    sayHello() {
        return `${this.name} say hi!`;
    }
}

const user = new User('Toshko');
console.log(user.sayHello());
