class Dog {
    constructor(dogName, dogColor) {
        this.name = dogName;
        this.color = dogColor;

    }

    bark(){
        console.log(`${this.name}: wof wof`);
    }
}

let fistDog = new Dog("Andy","Brown");

fistDog.bark();
